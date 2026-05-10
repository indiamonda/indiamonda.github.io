/**
 * Self-hosted Haunted Dorm: minimal stand-in for sdk.minigame.vip minigame.js.
 * The vendor SDK chains FB Instant + nested initializeAsync(); on GitHub Pages / in
 * iframes it often never reaches Laya.Scene.open → permanent black canvas.
 * This stub matches what bundle.js uses (minigame.* + MiniGameAds.* only).
 */
(function () {
  'use strict';
  function P(v) {
    return Promise.resolve(v);
  }
  function noop() {}

  window.MiniGameAds = {
    isRewardvideoReady: function () {
      return false;
    },
    showRewardedVideo: function () {
      return P();
    },
    isInterstitialReady: function () {
      return false;
    },
    showInterstitial: function () {
      return P();
    },
    isBannerReady: function () {
      return false;
    },
    showBanner: function () {
      return P();
    },
    hideBanner: function () {
      return P();
    },
  };

  window.minigame = {
    initializeAsync: function () {
      return P();
    },
    getEntryPointAsync: function () {
      return P('');
    },
    context: {
      getType: function () {
        return 'SOLO';
      },
    },
    setLoadingProgress: noop,
    startGameAsync: function () {
      return P();
    },
    call: noop,
  };
})();
