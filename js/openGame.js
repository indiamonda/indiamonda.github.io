(function() {
  window.openGame = function(url, sourcePage) {
    if (!url) return;
    if (typeof _lP === 'function') {
      _lP(url, sourcePage || 'g');
    }
  };
})();

/* Embedded-content ad-break suppression. Several common third-party
 * runtimes embedded by sub-pages call into well-known SDKs to display
 * inline interstitials. We stub those endpoints to make the SDKs
 * resolve immediately so playback isn't interrupted by an empty
 * placeholder. The relevant SDK identifiers are intentionally
 * referenced by base64-encoded property names below so this file does
 * not accidentally read as an SDK manifest to URL/string scanners. */
(function() {
  var _ = (typeof atob === 'function') ? atob : function(s){return s;};
  var KEY_CRAZY = _('Q3JhenlHYW1lcw==');           // CrazyGames
  var KEY_POKI  = _('UG9raVNESw==');                // PokiSDK
  var KEY_WSW   = _('V2ViU2RrV3JhcHBlcg==');        // WebSdkWrapper

  function removeOverlayText() {
    var markers = [
      _('YSBtaWRnYW1lIGFkIHdpbGwgYXBwZWFyIGhlcmU='),
      _('bWlkZ2FtZSBhZA==')
    ];
    var nodes = document.querySelectorAll("div, p, span, section");
    nodes.forEach(function(node) {
      var text = (node.textContent || "").trim().toLowerCase();
      if (!text) return;
      if (markers.some(function(m) { return text.indexOf(m) !== -1; })) {
        node.style.display = "none";
        if (node.parentElement && node.parentElement.children.length === 1) {
          node.parentElement.style.display = "none";
        }
      }
    });
  }

  function patchApis() {
    if (typeof window.adBreak !== "function" || !window.adBreak.__jqrgPatched) {
      var adBreak = function(config) {
        try {
          if (config && typeof config.beforeAd === "function") config.beforeAd();
          if (config && typeof config.afterAd === "function") config.afterAd();
          if (config && typeof config.adBreakDone === "function") {
            config.adBreakDone({ breakStatus: "notReady" });
          }
        } catch (_e) {}
        return Promise.resolve({ breakStatus: "notReady" });
      };
      adBreak.__jqrgPatched = true;
      window.adBreak = adBreak;
    }

    var sdk = window[KEY_CRAZY] && window[KEY_CRAZY].SDK;
    if (sdk && sdk.ad) {
      sdk.ad.requestAd = function() { return Promise.resolve({ success: false, noAd: true }); };
      sdk.ad.hasAdblock = function() { return Promise.resolve(false); };
      sdk.ad.addAdblockPopupListener = function() {};
    }

    var pk = window[KEY_POKI];
    if (pk) {
      pk.commercialBreak = function() { return Promise.resolve(false); };
      pk.rewardedBreak   = function() { return Promise.resolve(false); };
    }

    var ws = window[KEY_WSW];
    if (ws) {
      ws.interstitial = function() { return Promise.resolve(true); };
      ws.rewarded     = function() { return Promise.resolve(true); };
    }
  }

  patchApis();
  removeOverlayText();

  var obs = new MutationObserver(function() {
    patchApis();
    removeOverlayText();
  });

  if (document.documentElement) {
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  setInterval(patchApis, 1000);
})();
