/**
 * GitHub Pages / file:// self-host: minigame.js initializeAsync() rejects when
 * remote config XHR fails (it logs "default config" but still Promise.rejects).
 * The game bundle only starts Laya inside .then() — black screen if init rejects.
 */
(function () {
  'use strict';
  function patch() {
    var m = window.minigame;
    if (!m || typeof m.initializeAsync !== 'function') return false;
    if (m.__jqrgSelfHostPatched) return true;
    var orig = m.initializeAsync.bind(m);
    m.initializeAsync = function () {
      return orig().catch(function (err) {
        console.warn('[haunted-dorn] minigame.initializeAsync (continuing offline):', err && err.message ? err.message : err);
        return Promise.resolve();
      });
    };
    m.__jqrgSelfHostPatched = true;
    return true;
  }
  if (!patch()) {
    var tries = 0;
    var id = setInterval(function () {
      if (patch() || ++tries > 100) clearInterval(id);
    }, 25);
  }
})();
