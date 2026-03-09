/**
 * Backrooms custom menu & tutorial music
 * Auto-detects screen from Unity "Loaded Objects" logs: 2674=tutorial, 2677=in game, 3224/3495=menu.
 * Keys 1-5 still work as manual overrides.
 */
(function () {
  'use strict';

  var LOADED_OBJECTS_MENU = [3224, 3495];
  var LOADED_OBJECTS_TUTORIAL = 2674;
  var LOADED_OBJECTS_GAME = 2677;
  var lastDetectedState = null;
  var lastLoadedObjects = 0;
  var autoSwitchDebounce = 0;

  var RealAC = window.AudioContext || window.webkitAudioContext;
  if (!RealAC) return;

  var gameGainNodes = [];

  function wrapContext(realCtx) {
    var gain = realCtx.createGain();
    gain.gain.value = 0;
    gain.connect(realCtx.destination);
    gameGainNodes.push(gain);
    return new Proxy(realCtx, {
      get: function (target, prop) {
        if (prop === 'destination') return gain;
        var v = target[prop];
        return typeof v === 'function' ? v.bind(target) : v;
      }
    });
  }

  window.AudioContext = function (opt) {
    return wrapContext(new RealAC(opt));
  };
  window.AudioContext.prototype = RealAC.prototype;
  if (window.webkitAudioContext) {
    window.webkitAudioContext = window.AudioContext;
  }

  function unmuteGame() {
    gameGainNodes.forEach(function (g) { g.gain.value = 1; });
  }

  function muteGame() {
    gameGainNodes.forEach(function (g) { g.gain.value = 0; });
  }

  var base = document.querySelector('script[src*="custom-music"]');
  var basePath = (base && base.src) ? base.src.replace(/\/[^/]*$/, '/') : '';
  var gameDir = basePath.replace(/\/js\/?$/, '');
  var soundsPath = gameDir + (gameDir.slice(-1) === '/' ? '' : '/') + 'sounds/';

  var menuAudio = new Audio(soundsPath + 'menu.mp3');
  var tutorialAudio = new Audio(soundsPath + 'tutorial.mp3');
  menuAudio.loop = true;
  tutorialAudio.loop = true;

  function stopAll() {
    menuAudio.pause();
    menuAudio.currentTime = 0;
    tutorialAudio.pause();
    tutorialAudio.currentTime = 0;
  }

  function playMenu() {
    muteGame();
    stopAll();
    menuAudio.play().catch(function () {});
  }

  function playTutorial() {
    muteGame();
    stopAll();
    tutorialAudio.play().catch(function () {});
  }

  function useGameMusic() {
    stopAll();
    unmuteGame();
  }

  window.__BackroomsCustomMusic = {
    playMenu: playMenu,
    playTutorial: playTutorial,
    useGameMusic: useGameMusic,
    unmuteGame: unmuteGame,
    muteGame: muteGame
  };

  function onFirstUserGesture() {
    playMenu();
  }

  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.code === 'Digit1') {
      lastDetectedState = 'menu';
      playMenu();
      e.preventDefault();
    }
    if (e.code === 'Digit2') {
      lastDetectedState = 'tutorial';
      playTutorial();
      e.preventDefault();
    }
    if (e.code === 'Digit3') {
      lastDetectedState = 'menu';
      playMenu();
      e.preventDefault();
    }
    if (e.code === 'Digit4') {
      lastDetectedState = 'game';
      useGameMusic();
      e.preventDefault();
    }
    if (e.code === 'Digit5') {
      lastDetectedState = 'menu';
      playMenu();
      e.preventDefault();
    }
  });

  document.addEventListener('click', function () {
    onFirstUserGesture();
  }, { once: true });
  document.addEventListener('keydown', function () {
    onFirstUserGesture();
  }, { once: true });
})();
