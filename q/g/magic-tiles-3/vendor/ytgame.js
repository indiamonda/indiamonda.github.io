/* jqrg fork: no-op replacement for the YouTube Playables SDK that ships
 * with the upstream Magic Tiles 3 build. The original vendor/ytgame.js
 * shipped with this game does two things that are actively hostile to
 * iframed embedding:
 *
 *   1. When `window !== window.parent` (i.e. inside any iframe, including
 *      our own SPA's #game-frame), it locks every storage primitive with
 *      Object.defineProperty(..., { value: null, writable: false }):
 *        - localStorage, sessionStorage, indexedDB, caches, document.cookie
 *      Cocos2d-JS uses localStorage for save data and audio settings; once
 *      it's nulled out the game never recovers and only renders a blank
 *      canvas (with audio still working - the classic symptom). The SDK
 *      lock assumes the embedder is the official YT Playables host and
 *      will provide saves through MessageChannel; we obviously aren't, so
 *      saves silently disappear into the void.
 *
 *   2. The minified tail (lines 64+ in the original) is a packed mirror
 *      protector that fetches `${origin}/pages/home.html`, looks for an
 *      `<h1 class="title">The Marz Library</h1>` heading, and redirects
 *      to `https://marzlib.cc/pages/home.html?r=true` if it finds one.
 *      That has nothing to do with the actual game and only exists because
 *      we mirrored the build from a packaging that came through marzlib.
 *
 * Magic Tiles 3 itself does not call `ytgame.*` from its own code (we
 * verified with rg over main.js / main.min.js / src/), so this stub only
 * has to keep `window.ytgame` defined for any internal callsites that
 * might reference it. Every method is a no-op that returns the right
 * shape (Promise / unsubscribe function / boolean) so even if a future
 * version of the game starts using the SDK, nothing throws.
 */
(function () {
  'use strict';
  if (typeof window === 'undefined') return;
  if (window.ytgame) return;

  function noop() {}
  function resolved(v) { return Promise.resolve(v); }
  function unsubNoop() { return function () {}; }

  var SdkErrorType = {
    UNKNOWN: 0, API_UNAVAILABLE: 1, INVALID_PARAMS: 2, SIZE_LIMIT_EXCEEDED: 3,
    0: 'UNKNOWN', 1: 'API_UNAVAILABLE', 2: 'INVALID_PARAMS', 3: 'SIZE_LIMIT_EXCEEDED',
  };

  function SdkError(errorType, message) {
    var e = new Error(message || '');
    e.errorType = (typeof errorType === 'number') ? errorType : 0;
    e.name = 'SDK_ERROR_' + (SdkErrorType[e.errorType] || 'UNKNOWN');
    return e;
  }
  // Make `instanceof SdkError` plausible so any defensive code that does
  // type-checking does not break, even though we don't extend Error here.
  SdkError.prototype = Object.create(Error.prototype);

  var AdResult = {
    UNKNOWN: 0, SHOWED: 1, REJECTED: 3, DISMISSED: 2,
    0: 'UNKNOWN', 1: 'SHOWED', 3: 'REJECTED', 2: 'DISMISSED',
  };

  var ytgame = {
    SDK_VERSION: '0.0.0-jqrg-stub',
    IN_PLAYABLES_ENV: false,
    SdkError: SdkError,
    SdkErrorType: SdkErrorType,
    ads: {
      AdResult: AdResult,
      // Mimic the upstream behavior of resolving the request without
      // actually showing an ad. The real SDK returns a numeric AdResult.
      requestAd: function () { return resolved(AdResult.DISMISSED); },
    },
    engagement: {
      sendScore: function () { return resolved(); },
      openYTContent: function () { return resolved(); },
    },
    game: {
      saveData: function () { return resolved(); },
      loadData: function () { return resolved(''); },
      firstFrameReady: noop,
      gameReady: noop,
      onGameDataAvailable: unsubNoop,
      shareInviteCode: function (code) {
        if (typeof code !== 'string' || code.length === 0) {
          return Promise.reject(SdkError(SdkErrorType.INVALID_PARAMS,
            'Invite code cannot be empty'));
        }
        return resolved();
      },
    },
    health: {
      log: noop,
      logError: noop,
      logWarning: noop,
    },
    system: {
      onAudioEnabledChange: unsubNoop,
      isAudioEnabled: function () { return true; },
      onPause: unsubNoop,
      onResume: unsubNoop,
      getLanguage: function () { return resolved('en'); },
    },
  };

  window.ytgame = ytgame;

  // Some upstream code paths poke at these globals before reaching for
  // `window.ytgame`. Provide harmless defaults so feature detection works.
  if (typeof window.loadYTGame !== 'function') {
    window.loadYTGame = noop;
  }
  if (typeof window.getCurrentSdkUrl !== 'function') {
    window.getCurrentSdkUrl = function () { return null; };
  }
  if (typeof window.getLocationHash !== 'function') {
    window.getLocationHash = function () { return window.location.hash; };
  }
  window.enableSendingResourceLoadedEvents = false;
})();
