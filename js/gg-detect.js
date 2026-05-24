// ============================================
// GOGUARDIAN STATE DETECTION & OVERLAY
// ============================================
// Detects if GoGuardian extension is active and
// displays schoology-overlay.html fullscreen if so
//
// Detection method: Check for injected content script
// markers and DOM elements that GoGuardian creates
// ============================================

(function() {
  'use strict';

  const GOGUARDIAN_STATES = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    UNKNOWN: 'unknown'
  };

  const EXTENSION_ID = 'haldlgldplgnggkjaafhelgiaglafanh';

  // Icon path constants - Active uses enabled-light, Inactive uses static-light
  const ICON_PATHS = {
    active: 'enabled-light',
    inactive: 'static-light'
  };

  let overlayElement = null;
  let overlayStyle = null;
  let isOverlayActive = false;

  // ============================================
  // DETECTION FUNCTIONS
  // ============================================

  function checkForGoGuardianInjectedCode() {
    // Check for GoGuardian's known global functions/objects
    if (typeof window.gg !== 'undefined') return true;

    // Check for chat widget GoGuardian injects
    if (document.querySelector('#chat-widget, [data-gg-chat], .gg-chat')) return true;

    // Check for blocked page overlay elements
    if (document.querySelector('#gg-blocked, .gg-blocked, [data-blocked-by="goguardian"]')) return true;

    // Check for explicit image filter elements
    if (document.querySelector('.gg-explicit-filter, [data-gg-explicit]')) return true;

    // Check for teacher presentation overlay
    if (document.querySelector('.gg-presentation, #teacher-presentation')) return true;

    // Check for GoGuardian's specific attributes
    const html = document.documentElement;
    if (html.hasAttribute('data-gg-enabled') ||
        html.hasAttribute('data-goguardian') ||
        html.getAttribute('data-extension-id')?.includes('hald')) {
      return true;
    }

    // Check for specific CSS that GoGuardian injects
    const styles = document.querySelectorAll('style');
    for (const style of styles) {
      if (style.textContent.includes('gg-dark-shield') ||
          (style.textContent.includes('goguardian') && style.textContent.includes('blocked'))) {
        return true;
      }
    }

    return false;
  }

  function checkForBlockedPagePattern() {
    // Check if on GoGuardian blocked page
    const hostname = window.location.hostname || '';
    if (hostname.includes('blocked.goguardian.com') ||
        hostname.includes('staging-blocked.goguardian.com') ||
        hostname.includes('enroll.goguardian.com') ||
        hostname.includes('staging-enroll.goguardian.com')) {
      return true;
    }
    return false;
  }

  function checkForExtensionContext() {
    // Try Chrome extension API (only works from extension context)
    if (typeof chrome === 'undefined' || !chrome.runtime) {
      return Promise.resolve(false);
    }

    return new Promise((resolve) => {
      chrome.runtime.sendMessage(EXTENSION_ID, { type: 'ping' }, (response) => {
        if (chrome.runtime.lastError) {
          resolve(false);
        } else {
          resolve(response?.success === true);
        }
      });
      setTimeout(() => resolve(false), 500);
    });
  }

  async function detectGoGuardian() {
    // Run all detection checks
    const results = {
      injected: checkForGoGuardianInjectedCode(),
      blocked: checkForBlockedPagePattern()
    };

    // If any check returns true, GoGuardian is active
    if (results.injected || results.blocked) {
      return {
        state: GOGUARDIAN_STATES.ACTIVE,
        evidence: results
      };
    }

    // Could not definitively detect
    return {
      state: GOGUARDIAN_STATES.UNKNOWN,
      evidence: results
    };
  }

  // ============================================
  // OVERLAY FUNCTIONS
  // ============================================

  function createOverlay() {
    if (overlayElement) return overlayElement;

    // Remove existing if any
    removeOverlay();

    // Create fullscreen iframe that sits ON TOP of content
    // Does NOT hide or remove underlying content - just covers it
    overlayElement = document.createElement('iframe');
    overlayElement.id = 'schoology-overlay-iframe';
    overlayElement.src = '/schoology-overlay.html';
    overlayElement.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      border: none !important;
      z-index: 2147483647 !important;
      background: white !important;
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: auto !important;
    `;

    // Do NOT hide underlying content - we want to preserve game state!
    // Just ensure our iframe is on top and any goguardian overlays are hidden
    overlayStyle = document.createElement('style');
    overlayStyle.id = 'schoology-overlay-style';
    overlayStyle.textContent = `
      /* Keep underlying content alive (game progress preserved) */
      html, body {
        visibility: visible !important;
        overflow: hidden !important;
        height: 100vh !important;
        width: 100vw !important;
      }
      /* Hide any goguardian overlays that might appear on top */
      [data-gg-blocked], .gg-blocked, #gg-blocked,
      iframe[src*="goguardian"], .gg-dark-shield,
      .gg-presentation, #teacher-presentation {
        display: none !important;
        visibility: hidden !important;
        z-index: -1 !important;
      }
      /* Ensure our overlay stays on top of everything */
      #schoology-overlay-iframe {
        z-index: 2147483647 !important;
      }
    `;

    document.head.appendChild(overlayStyle);
    document.body.appendChild(overlayElement);

    isOverlayActive = true;
    console.log('[GG-Detect] Overlay activated - covering page content (game preserved)');

    return overlayElement;
  }

  function removeOverlay() {
    if (overlayElement) {
      overlayElement.remove();
      overlayElement = null;
    }
    if (overlayStyle) {
      overlayStyle.remove();
      overlayStyle = null;
    }
    isOverlayActive = false;
    console.log('[GG-Detect] Overlay removed');
  }

  function isOverlay() {
    return isOverlayActive;
  }

  // ============================================
  // MAIN INITIALIZATION
  // ============================================

  async function init() {
    console.log('[GG-Detect] Initializing...');

    const result = await detectGoGuardian();

    if (result.state === GOGUARDIAN_STATES.ACTIVE) {
      console.log('[GG-Detect] GoGuardian ACTIVE - activating overlay', result.evidence);
      createOverlay();
    } else {
      console.log('[GG-Detect] GoGuardian not detected or unknown state');
    }

    // Expose API for manual control
    window.ggDetect = {
      detect: detectGoGuardian,
      createOverlay: createOverlay,
      removeOverlay: removeOverlay,
      isOverlay: isOverlay,
      STATES: GOGUARDIAN_STATES
    };
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();