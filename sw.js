const CACHE_NAME = 'jqrg-pwa-v7';

// Complete list of all source files to pre-cache
const urlsToCache = [
  // ============ ROOT FILES ============
  '/',
  '/index.html',
  '/403.html',
  '/404.html',
  '/404-building.html',
  '/404-safe.html',
  '/67.html',
  '/goguardian-.html',
  '/html-opener.html',
  '/interesting.html',
  '/linewize-.html',
  '/nostalgia.html',
  '/manifest.json',
  '/appmanifest.json',
  '/jq.ico',
  '/info.ico',
  '/background.png',
  '/eaglercraft-background.png',
  '/undertale-background.png',
  '/github.png',
  '/jqrg-jiushifen.png',
  '/u/ubgu-logo.png',

  // ============ CSS FILES ============
  '/css/main.css',
  '/css/info.css',

  // ============ JS FILES ============
  '/js/authority.js',
  '/js/blacklist.js',
  '/js/cursor.js',
  '/js/mainPageCloak.js',
  '/js/openGame.js',
  '/js/panicKey.js',
  '/js/preventOpen.js',
  '/js/style.js',

  // ============ CLOAK IMAGES ============
  '/cloak-images/default.png',
  '/cloak-images/docs.png',
  '/cloak-images/drive.png',
  '/cloak-images/forms.png',
  '/cloak-images/gmail.png',
  '/cloak-images/pausd.png',
  '/cloak-images/schoology.png',

  // ============ CURSOR IMAGES ============
  '/cursor/cursor.png',
  '/cursor/cursor-64.png',
  '/cursor/animated-cursor/cursor1.png',
  '/cursor/animated-cursor/cursor2.png',
  '/cursor/animated-cursor/cursor3.png',
  '/cursor/animated-cursor/cursor4.png',
  '/cursor/animated-cursor/cursor5.png',
  '/cursor/animated-cursor/cursor6.png',
  '/cursor/animated-cursor/cursor7.png',
  '/cursor/animated-cursor/cursor8.png',
  '/cursor/animated-cursor/cursor9.png',
  '/cursor/animated-cursor/cursor10.png',
  '/cursor/animated-cursor/cursor11.png',
  '/cursor/animated-cursor/cursor12.png',
  '/cursor/animated-cursor/cursor13.png',
  '/cursor/animated-cursor/cursor14.png',
  '/cursor/animated-cursor/cursor15.png',
  '/cursor/animated-cursor/cursor16.png',
  '/cursor/animated-cursor/cursor17.png',
  '/cursor/animated-cursor/cursor18.png',
  '/cursor/animated-cursor/cursor19.png',
  '/cursor/animated-cursor/cursor20.png',

  // ============ GAME IMAGES - COLLECTIONS ============
  '/game-images/collections/eaglercraft.png',
  '/game-images/collections/geo-dash-scratch.png',
  '/game-images/collections/scratch.png',
  '/game-images/collections/undertale.png',

  // ============ GAME IMAGES - GAMES ============
  '/game-images/games/10-minutes-till-dawn.png',
  '/game-images/games/1v1.lol.png',
  '/game-images/games/3d-car-simulator.png',
  '/game-images/games/a-dance-of-fire-and-ice.png',
  '/game-images/games/among-us.png',
  '/game-images/games/angry-birds.png',
  '/game-images/games/asriel.png',
  '/game-images/games/backrooms.png',
  '/game-images/games/bad-parenting-1.png',
  '/game-images/games/bottle-flip-3d.png',
  '/game-images/games/bridd-jump.png',
  '/game-images/games/browser-quest.png',
  '/game-images/games/browser.png',
  '/game-images/games/candy-jump.png',
  '/game-images/games/catgun-island.png',
  '/game-images/games/chat.png',
  '/game-images/games/cookie-clicker.png',
  '/game-images/games/count-master.png',
  '/game-images/games/crazy-cattle.png',
  '/game-images/games/crossy-road.png',
  '/game-images/games/curveball.png',
  '/game-images/games/deltarune.png',
  '/game-images/games/dino.png',
  '/game-images/games/doodle-jump.png',
  '/game-images/games/drift-boss.png',
  '/game-images/games/drive-mad.png',
  '/game-images/games/flappy-bird.png',
  '/game-images/games/flappy-dunk.png',
  '/game-images/games/flowey.png',
  '/game-images/games/fnf.png',
  '/game-images/games/gaster.png',
  '/game-images/games/geo-dash.png',
  '/game-images/games/hacks.png',
  '/game-images/games/half-life.png',
  '/game-images/games/hex-gl.png',
  '/game-images/games/hollow-knight.png',
  '/game-images/games/hypper-sandbox.png',
  '/game-images/games/iron-lungs.png',
  '/game-images/games/jls.png',
  '/game-images/games/jq.png',
  '/game-images/games/karlson.png',
  '/game-images/games/last-breath.png',
  '/game-images/games/level-devil.png',
  '/game-images/games/magic-tiles-3.png',
  '/game-images/games/melon-playground.png',
  '/game-images/games/pacman.png',
  '/game-images/games/paperio2.png',
  '/game-images/games/parkoreen.png',
  '/game-images/games/portal.png',
  '/game-images/games/pvs.png',
  '/game-images/games/r1-12-2.png',
  '/game-images/games/r1-5-2.png',
  '/game-images/games/r1-8-8-t1.png',
  '/game-images/games/r1-8-8-t2.png',
  '/game-images/games/r1-8-8.png',
  '/game-images/games/rammerhead.png',
  '/game-images/games/retro-bowl.png',
  '/game-images/games/sans-cjs-i.png',
  '/game-images/games/sans-cjs.png',
  '/game-images/games/sans-frisk-mode.png',
  '/game-images/games/sans-hell-mode.png',
  '/game-images/games/sans-i.png',
  '/game-images/games/sans-underfell-i.png',
  '/game-images/games/sans-underfell.png',
  '/game-images/games/sans.png',
  '/game-images/games/skyball.png',
  '/game-images/games/slope-2-players.png',
  '/game-images/games/slope-3.png',
  '/game-images/games/slope.png',
  '/game-images/games/snow-rider.png',
  '/game-images/games/solar-smash.png',
  '/game-images/games/sound-buttons.png',
  '/game-images/games/sound-effect-player.png',
  '/game-images/games/stickman-hook.png',
  '/game-images/games/subway-surfers-beijing.png',
  '/game-images/games/subway-surfers-houston.png',
  '/game-images/games/subway-surfers-monaco.png',
  '/game-images/games/subway-surfers-newyork.png',
  '/game-images/games/subway-surfers.png',
  '/game-images/games/survival-race.png',
  '/game-images/games/tag.png',
  '/game-images/games/tanuki-sunset.png',
  '/game-images/games/tg-playground.png',
  '/game-images/games/thatsnotmyneighbor.png',
  '/game-images/games/there-is-no-game.png',
  '/game-images/games/tomb-of-the-mask.png',
  '/game-images/games/trigger-rally.png',
  '/game-images/games/tunnel-rush.png',
  '/game-images/games/underswap-papyrus.png',
  '/game-images/games/undertale-y.png',
  '/game-images/games/undertale.png',
  '/game-images/games/uno.png',
  '/game-images/games/vex.png',
  '/game-images/games/we-become-what-we-behold.png',
  '/game-images/games/wmcbg.png',
  '/game-images/games/wordle-noletterdetection.png',
  '/game-images/games/wordle.png',
  '/game-images/games/you-are-an-idiot.png',
  '/game-images/games/zombie-derby-pixel-survival.png',

  // ============ INFO PAGES ============
  '/info/',
  '/info/index.html',
  '/info/ec/',
  '/info/ec/index.html',
  '/info/ec/servers/',
  '/info/ec/servers/index.html',
  '/info/rmhd/',
  '/info/rmhd/index.html',
  '/info/chr-bk/',
  '/info/chr-bk/index.html',

  // ============ JQRG-GAMES PAGES ============
  '/jqrg-games/',
  '/jqrg-games/index.html',
  '/jqrg-games/infinite-campus.png',
  '/jqrg-games/aF7kL2pQ9mXr8HsVzT1wYcB5jDn4GqE0Uo.html',
  '/jqrg-games/J4mT9vQ2xZpL6rFwK1bHs8yC0nAeR7uYdG.html',

  // ============ JQRG-GAMES EAGLERCRAFT ============
  '/jqrg-games/eaglercraft/',
  '/jqrg-games/eaglercraft/index.html',
  '/jqrg-games/eaglercraft/background3.png',
  '/jqrg-games/eaglercraft/r1-5-2.html',
  '/jqrg-games/eaglercraft/r1-8-8.html',
  '/jqrg-games/eaglercraft/r1-8-8-t1.html',
  '/jqrg-games/eaglercraft/r1-8-8-t2.html',
  '/jqrg-games/eaglercraft/r1-8-8-w.html',
  '/jqrg-games/eaglercraft/r1-12-2.html',
  '/jqrg-games/eaglercraft/r1-12-2-w.html',
  '/jqrg-games/eaglercraft/hacks/',
  '/jqrg-games/eaglercraft/hacks/index.html',
  '/jqrg-games/eaglercraft/hacks/dragonx.html',
  '/jqrg-games/eaglercraft/hacks/fuchsiax-ghost.html',
  '/jqrg-games/eaglercraft/hacks/kerosene.html',
  '/jqrg-games/eaglercraft/hacks/nebula.html',
  '/jqrg-games/eaglercraft/hacks/nitclient.html',
  '/jqrg-games/eaglercraft/hacks/oddfuture.html',
  '/jqrg-games/eaglercraft/hacks/resent-pvp.html',

  // ============ JQRG-GAMES UNDERTALE ============
  '/jqrg-games/undertale/',
  '/jqrg-games/undertale/index.html',
  '/jqrg-games/undertale/background.png',
  '/jqrg-games/undertale/game/',
  '/jqrg-games/undertale/game/index.html',
  '/jqrg-games/undertale/game/background.png',
  '/jqrg-games/undertale/simulators/',
  '/jqrg-games/undertale/simulators/index.html',
  '/jqrg-games/undertale/simulators/background.png',
  '/jqrg-games/undertale/simulators/asriel.sb3',
  '/jqrg-games/undertale/simulators/asriel-i.sb3',
  '/jqrg-games/undertale/simulators/flowey.sb3',
  '/jqrg-games/undertale/simulators/flowey-i.sb3',
  '/jqrg-games/undertale/simulators/sans/',
  '/jqrg-games/undertale/simulators/sans/index.html',
  '/jqrg-games/undertale/simulators/sans/background.png',
  '/jqrg-games/undertale/simulators/underswap/',
  '/jqrg-games/undertale/simulators/underswap/index.html',
  '/jqrg-games/undertale/simulators/underswap/background.png',

  // ============ JQRG-GAMES GAME FILES ============
  '/jqrg-games/games/',
  '/jqrg-games/games/index.html',
  '/jqrg-games/games/10-minutes-till-dawn/',
  '/jqrg-games/games/1v1-lol/',
  '/jqrg-games/games/2048/',
  '/jqrg-games/games/3d-car-simulator/',
  '/jqrg-games/games/404/',
  '/jqrg-games/games/among-us/',
  '/jqrg-games/games/angry-birds/',
  '/jqrg-games/games/asriel-i/',
  '/jqrg-games/games/asriel/',
  '/jqrg-games/games/backrooms/',
  '/jqrg-games/games/bad-parenting-1/',
  '/jqrg-games/games/bottle-flip-3d/',
  '/jqrg-games/games/browser-quest/',
  '/jqrg-games/games/candy-jump/',
  '/jqrg-games/games/catgun-island/',
  '/jqrg-games/games/cookie-clicker/',
  '/jqrg-games/games/count-master/',
  '/jqrg-games/games/crazy-cattle/',
  '/jqrg-games/games/crossy-road/',
  '/jqrg-games/games/curveball/',
  '/jqrg-games/games/deltarune/',
  '/jqrg-games/games/dino/',
  '/jqrg-games/games/doodle-jump/',
  '/jqrg-games/games/drive-mad/',
  '/jqrg-games/games/flappy-bird/',
  '/jqrg-games/games/flappy-dunk/',
  '/jqrg-games/games/flowey-i/',
  '/jqrg-games/games/flowey/',
  '/jqrg-games/games/fnf/',
  '/jqrg-games/games/gaster-fight/',
  '/jqrg-games/games/geo-dash/',
  '/jqrg-games/games/granny/',
  '/jqrg-games/games/half-life/',
  '/jqrg-games/games/hex-gl/',
  '/jqrg-games/games/hollow-knight-/',
  '/jqrg-games/games/hollow-knight/',
  '/jqrg-games/games/hypper-sandbox/',
  '/jqrg-games/games/iron-lungs/',
  '/jqrg-games/games/karlson/',
  '/jqrg-games/games/level-devil/',
  '/jqrg-games/games/magic-tiles-3/',
  '/jqrg-games/games/melon-playground/',
  '/jqrg-games/games/pacman/',
  '/jqrg-games/games/paperio2/',
  '/jqrg-games/games/patrick-star/',
  '/jqrg-games/games/portal/',
  '/jqrg-games/games/pvs/',
  '/jqrg-games/games/retro-bowl/',
  '/jqrg-games/games/sans-cjs-i/',
  '/jqrg-games/games/sans-cjs/',
  '/jqrg-games/games/sans-frisk-mode/',
  '/jqrg-games/games/sans-hell/',
  '/jqrg-games/games/sans-i/',
  '/jqrg-games/games/sans-last-breath/',
  '/jqrg-games/games/sans-script.js',
  '/jqrg-games/games/sans-underfell-i/',
  '/jqrg-games/games/sans-underfell/',
  '/jqrg-games/games/sans/',
  '/jqrg-games/games/skyball/',
  '/jqrg-games/games/slope-2/',
  '/jqrg-games/games/slope-3/',
  '/jqrg-games/games/slope/',
  '/jqrg-games/games/snow-rider/',
  '/jqrg-games/games/solar-smash/',
  '/jqrg-games/games/sound-buttons/',
  '/jqrg-games/games/stickman-hook/',
  '/jqrg-games/games/subway-surfers-beijing/',
  '/jqrg-games/games/subway-surfers-houston/',
  '/jqrg-games/games/subway-surfers-monaco/',
  '/jqrg-games/games/subway-surfers-newyork/',
  '/jqrg-games/games/subway-surfers/',
  '/jqrg-games/games/survival-race-game-code.html',
  '/jqrg-games/games/survival-race/',
  '/jqrg-games/games/tag/',
  '/jqrg-games/games/tanuki-sunset/',
  '/jqrg-games/games/tg-playground/',
  '/jqrg-games/games/thatsnotmyneighbor/',
  '/jqrg-games/games/there-is-no-game/',
  '/jqrg-games/games/tomb-of-the-mask/',
  '/jqrg-games/games/trigger-rally/',
  '/jqrg-games/games/tunnel-rush/',
  '/jqrg-games/games/underswap-papyrus/',
  '/jqrg-games/games/underswap-sans-easy/',
  '/jqrg-games/games/underswap-sans-normal/',
  '/jqrg-games/games/undertale-y/',
  '/jqrg-games/games/undertale/',
  '/jqrg-games/games/uno/',
  '/jqrg-games/games/vex/',
  '/jqrg-games/games/we-become-what-we-behold/',
  '/jqrg-games/games/wordle/',
  '/jqrg-games/games/zombie-derby-pixel-survival/',
  '/jqrg-games/games/gaster-fight.sb3',

  // ============ UNBLOCKS PAGES ============
  '/unblocks/',
  '/unblocks/index.html',
  '/unblocks/infinite-campus.png',
  '/unblocks/c6e66984-1a96-4753-b83d-e7824f7c7c2a.png',
  '/unblocks/i-ready-games/',
  '/unblocks/i-ready-games/index.html',
  '/unblocks/i-ready-games/images.png',
  '/unblocks/i-ready-games/infinite-campus-icon.png',

  // ============ CHAT PAGES ============
  '/chat/',
  '/chat/index.html',
  '/chat/jimmyqrg.html',
  '/chat/jls.html',

  // ============ ABOUT PAGE ============
  '/about/',
  '/about/index.html',

  // ============ JOIN PAGE ============
  '/join/',
  '/join/index.html',

  // ============ SUGGEST GAMES ============
  '/suggest-games/',
  '/suggest-games/index.html',

  // ============ HTML UNBLOCKER ============
  '/HTML-unblocker/',
  '/HTML-unblocker/index.html',
  '/HTML-unblocker/no-back.html',
  '/HTML-unblocker/infinite-campus-icon.png',
  '/HTML-unblocker/tech-keyboard.png',

  // ============ UNBLOCKED BROWSER ============
  '/unblocked-browser/',

  // ============ STRATEGIES ============
  '/strategies/',
  '/strategies/index.html',
  '/strategies/home-page-example.html',
  '/strategies/articles/',
  '/strategies/articles/index.html',
  '/strategies/articles/avoid-goguardian.html',
  '/strategies/articles/clear-history.html',
  '/strategies/articles/example-article.html',
  '/strategies/articles/make-website/',
  '/strategies/articles/make-website/index.html',
  '/strategies/articles/make-website/1.html',
  '/strategies/articles/make-website/3.html',
  '/strategies/articles/make-website/templates.html',
  '/strategies/articles/make-website/more-than-25MB.html',
  '/strategies/articles/make-website/background.png',
  '/strategies/articles/make-website/code.png',
  '/strategies/articles/make-website/images/',
  '/strategies/articles/make-website/images/image-1.png',
  '/strategies/tools/',
  '/strategies/tools/browser.html',
  '/strategies/tools/html-runner.html',

  // ============ LX PAGES ============
  '/lx/',
  '/lx/index.html',
  '/lx/background.png',
  '/lx/jq.ico',
  '/lx/jq.png',
  '/lx/as/',
  '/lx/as/index.html',
  '/lx/doc/',
  '/lx/doc/index.html',

  // ============ TEST FILES ============
  '/test/jqrgd.html',
  '/test/jszip.js',

  // ============ EXTERNAL RESOURCES (FONTS & ICONS) ============
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
  'https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - pre-cache all files
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install - Pre-caching all files');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Caching', urlsToCache.length, 'files');
        // Cache files one by one to handle failures gracefully
        return Promise.allSettled(
          urlsToCache.map(url => {
            return cache.add(url).catch(err => {
              console.warn('[ServiceWorker] Failed to cache:', url, err.message);
            });
          })
        );
      })
      .then(() => {
        console.log('[ServiceWorker] Pre-caching complete');
        return self.skipWaiting();
      })
  );
});

// Activate event - delete ALL old caches and take control
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate - Clearing old caches');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - Network first, always update cache with fresh content
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) return;

  // Don't intercept Stickman Rebirth (Construct 3) - SW caching breaks data.json
  const u = event.request.url;
  if (u.includes('/games/stickman-rebirth/')) {
    return; // Let browser fetch normally, no SW involvement
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Got network response - cache it and return
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Network failed - try cache
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // No cache, return offline fallback for navigation
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});

// Message handler for manual cache operations
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        caches.delete(cacheName);
      });
    });
  }
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
