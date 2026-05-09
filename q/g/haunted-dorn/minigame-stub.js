/* Minimal minigame.vip SDK stub for self-hosted Laya builds: no external
 * script loads, no FBInstant, no redirects. Reward/banner calls resolve as
 * no-fill so gameplay can continue offline. */
(function () {
  'use strict';
  var P = function (v) { return Promise.resolve(v); };
  var noop = function () {};

  function callStub() {
    /* platformClass.call("SkipToGoogle") etc. */
  }

  window.MiniGameAds = {
    isRewardvideoReady: function () { return false; },
    showRewardedVideo: function () { return P(); },
    isInterstitialReady: function () { return false; },
    showInterstitial: function () { return P(); },
    isBannerReady: function () { return false; },
    showBanner: function () { return P(); },
    hideBanner: function () { return P(); },
  };

  window.minigame = {
    initializeAsync: function () { return P(); },
    getEntryPointAsync: function () { return P(''); },
    context: { getType: function () { return 'SOLO'; } },
    setLoadingProgress: noop,
    startGameAsync: function () { return P(); },
    call: callStub,
  };
})();
