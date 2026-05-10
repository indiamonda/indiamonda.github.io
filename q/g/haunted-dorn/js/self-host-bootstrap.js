/**
 * Self-hosted / GitHub Pages: the vendor minigame SDK expects FB Instant / remote
 * config. When init fails or stops early, the Laya bundle still runs:
 *   minigame.initializeAsync().then(function () {
 *     minigame.context.getType();  // throws if context missing → black screen
 *     t.startMiniGameSDK();        // never reached
 *   });
 * We stub missing APIs and soften methods that throw when the FB SDK never wired up.
 */
(function () {
  'use strict';

  function ensureStubs(m) {
    if (!m) return;
    if (!m.context || typeof m.context.getType !== 'function') {
      m.context = { getType: function () { return 'SOLO'; } };
    }
    if (m.__jqrgSelfHostPatched) return;
    m.__jqrgSelfHostPatched = true;

    if (typeof m.getEntryPointAsync === 'function') {
      var gep = m.getEntryPointAsync.bind(m);
      m.getEntryPointAsync = function () {
        return gep().catch(function () {
          return '';
        });
      };
    }

    if (typeof m.setLoadingProgress === 'function') {
      var slp = m.setLoadingProgress.bind(m);
      m.setLoadingProgress = function (p) {
        try {
          return slp(p);
        } catch (e) {
          console.warn('[haunted-dorn] setLoadingProgress:', e && e.message ? e.message : e);
        }
      };
    }

    if (typeof m.startGameAsync === 'function') {
      var sga = m.startGameAsync.bind(m);
      m.startGameAsync = function () {
        return Promise.resolve(sga()).catch(function (e) {
          console.warn('[haunted-dorn] startGameAsync:', e && e.message ? e.message : e);
          return undefined;
        });
      };
    }
  }

  function patchInitialize() {
    var m = window.minigame;
    if (!m || typeof m.initializeAsync !== 'function') return false;
    if (m.__jqrgInitWrapped) return true;
    m.__jqrgInitWrapped = true;
    var orig = m.initializeAsync.bind(m);
    m.initializeAsync = function () {
      return orig()
        .then(function (v) {
          ensureStubs(m);
          return v;
        })
        .catch(function (err) {
          console.warn('[haunted-dorn] minigame.initializeAsync:', err && err.message ? err.message : err);
          ensureStubs(m);
          return undefined;
        });
    };
    return true;
  }

  if (!patchInitialize()) {
    var tries = 0;
    var id = setInterval(function () {
      if (patchInitialize() || ++tries > 120) clearInterval(id);
    }, 25);
  }
})();
