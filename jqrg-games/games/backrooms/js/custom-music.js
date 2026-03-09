/**
 * Backrooms custom menu & tutorial music
 * Keys: 1=menu, 2=tutorial, 3=tutorial ended (main menu again), 4=in game, 5=back to main menu from game.
 * On each key press we log a snapshot for debugging (to look for state we could detect automatically later).
 */
(function () {
  'use strict';

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

  /** Snapshot state when you press 1–5 so we can look for detectable patterns. */
  function logSnapshot(label) {
    var t = performance.now();
    var out = {
      label: label,
      time: Math.round(t),
      gameGainNodesCount: gameGainNodes.length
    };
    try {
      if (window.gameInstance) {
        out.gameInstanceKeys = Object.keys(window.gameInstance);
        if (typeof window.gameInstance.SendMessage === 'function') {
          out.hasSendMessage = true;
        }
      }
    } catch (err) {
      out.gameInstanceError = String(err.message);
    }
    try {
      var names = [];
      for (var k in window) {
        if (/unity|Unity|Module|gameInstance/i.test(k)) names.push(k);
      }
      if (names.length) out.unityLikeGlobals = names;
    } catch (err) {}
    try {
      var canvas = document.querySelector('canvas');
      if (canvas) {
        out.canvasWidth = canvas.width;
        out.canvasHeight = canvas.height;
        out.canvasClientRect = canvas.getBoundingClientRect ? canvas.getBoundingClientRect().width + 'x' + canvas.getBoundingClientRect().height : 'n/a';
      }
    } catch (err) {}
    console.log('[Backrooms state]', JSON.stringify(out, null, 2));
  }

  window.__BackroomsCustomMusic = {
    playMenu: playMenu,
    playTutorial: playTutorial,
    useGameMusic: useGameMusic,
    unmuteGame: unmuteGame,
    muteGame: muteGame,
    logSnapshot: logSnapshot
  };

  function onFirstUserGesture() {
    playMenu();
  }

  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.code === 'Digit1') {
      logSnapshot('1=menu');
      playMenu();
      e.preventDefault();
    }
    if (e.code === 'Digit2') {
      logSnapshot('2=tutorial');
      playTutorial();
      e.preventDefault();
    }
    if (e.code === 'Digit3') {
      logSnapshot('3=tutorial_ended_main_menu');
      playMenu();
      e.preventDefault();
    }
    if (e.code === 'Digit4') {
      logSnapshot('4=in_game');
      useGameMusic();
      e.preventDefault();
    }
    if (e.code === 'Digit5') {
      logSnapshot('5=back_to_main_menu_from_game');
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
