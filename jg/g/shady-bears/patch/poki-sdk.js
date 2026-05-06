// Local no-ads PokiSDK shim for Shady Bears.
// Keeps the API shape expected by src/js/ads.js and game scripts.
(function () {
  function resolved(value) { return Promise.resolve(value); }
  function noop() {}
  function noArgPromise() { return resolved(); }
  function rewarded() { return resolved(true); }

  window.PokiSDK = {
    init: function () { return resolved(); },
    initWithVideoHB: function () { return resolved(); },
    customEvent: noop,
    commercialBreak: noArgPromise,
    rewardedBreak: rewarded,
    displayAd: noop,
    destroyAd: noop,
    getLeaderboard: function () { return resolved([]); },
    getSharableURL: function () { return Promise.reject(new Error("disabled")); },
    shareableURL: function () { return resolved(""); },
    getURLParam: function () { return ""; },
    disableProgrammatic: noop,
    gameLoadingStart: noop,
    gameLoadingFinished: noop,
    gameInteractive: noop,
    roundStart: noop,
    roundEnd: noop,
    muteAd: noop,
    setDebug: noop,
    gameplayStart: noop,
    gameplayStop: noop,
    gameLoadingProgress: noop,
    happyTime: noop,
    setPlayerAge: noop,
    togglePlayerAdvertisingConsent: noop,
    logError: noop,
    sendHighscore: noop,
    setDebugTouchOverlayController: noop,
  };
})();
