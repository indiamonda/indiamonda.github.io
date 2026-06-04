const ads = {};
ads.shareableURL = "";
ads.gameplayStopped = true;
ads.videoIsActive = false;
ads.player = null;

function adsExternalCall(fName, params) {
  if (ads[fName]) ads[fName](params);
}

// Intentionally no-op: we self-host this game and skip all ad SDK flows.
ads.init = function () {};
ads.init();

function safePlayerCall(name, arg) {
  try {
    if (!ads.player || typeof ads.player[name] !== "function") return;
    if (typeof arg === "undefined") ads.player[name]();
    else ads.player[name](arg);
  } catch (_) {}
}

ads.showAd = function () {
  setTimeout(() => {
    safePlayerCall("onAdStarted");
    safePlayerCall("onAdEnded");
  }, 0);
  ads.gameplayStart();
};

ads.showRewardedVideo = function () {
  setTimeout(() => {
    safePlayerCall("onRewardedAdStarted");
    safePlayerCall("onRewardedAdEnded", true);
  }, 0);
  ads.gameplayStart();
};

ads.onVideoStarted = function () { ads.videoIsActive = true; };
ads.onVideoClosed = function () { ads.videoIsActive = false; };
ads.onVideoCompleted = function () {};
ads.onVideoNotAvailable = function () {};
ads.happyTime = function () {};

ads.gameplayStop = function () {
  if (ads.gameplayStopped) return;
  ads.gameplayStopped = true;
  if (isTouchDevice()) gamepad.hide();
};

ads.gameplayStart = function () {
  if (!ads.gameplayStopped) return;
  ads.gameplayStopped = false;
  if (isTouchDevice()) gamepad.show();
};

ads.gameLoadingStart = function () {};
ads.gameLoadingFinished = function () {};
ads.gameLoadingProgress = function () {};
ads.setShareableURL = function () {};

window.addEventListener("keydown", (ev) => {
  if (["ArrowDown", "ArrowUp", " "].includes(ev.key)) ev.preventDefault();
});
window.addEventListener("wheel", (ev) => ev.preventDefault(), { passive: false });
