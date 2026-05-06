const CACHE_NAME = 'app-v140';

const urlsToCache = [
  // ============ ROOT ============
  '/',
  '/index.html',
  '/403.html',
  '/404.html',
  '/404-building.html',
  '/appmanifest.json',
  '/jq.ico',
  '/info.ico',
  '/background.png',
  '/banner.png',
  '/eaglercraft-background.png',
  '/undertale-background.png',
  '/github.png',
  '/jqrg-jiushifen.png',
  '/u/ubgu-logo.png',
  '/cloak.js',

  // ============ LEARN COVER ============
  '/learn/style.css',
  '/learn/images/join-background.png',

  // ============ CSS ============
  '/css/main.css',
  '/css/info.css',
  '/css/tools.css',

  // ============ JS ============
  '/js/cursor.js',
  '/js/jqrg-cloud.js',
  '/js/jqrg-auth-ui.js',
  '/js/jqrg-content-gate.js',
  '/js/jqrg-gate.js',
  '/js/jqrg-loader-lines.js',
  '/js/mainPageCloak.js',
  '/js/openGame.js',
  '/js/panicKey.js',

  // ============ ICONS-A ============
  '/cloak-images/default.png',
  '/cloak-images/docs.png',
  '/cloak-images/drive.png',
  '/cloak-images/forms.png',
  '/cloak-images/gmail.png',
  '/cloak-images/google.png',
  '/cloak-images/pausd.png',
  '/cloak-images/schoology.png',

  // ============ ICONS-B ============
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

  // ============ MEDIA-A ============
  '/game-images/collections/eaglercraft.png',
  '/game-images/collections/geo-dash-scratch.png',
  '/game-images/collections/scratch.png',
  '/game-images/collections/undertale.png',

  // ============ MEDIA-B ============
  '/game-images/games/10-minutes-till-dawn.png',
  '/game-images/games/1v1.lol.png',
  '/game-images/games/2048.png',
  '/game-images/games/3.png',
  '/game-images/games/3d-car-simulator.png',
  '/game-images/games/a-dance-of-fire-and-ice.png',
  '/game-images/games/amenda.png',
  '/game-images/games/among-us.png',
  '/game-images/games/angry-birds.png',
  '/game-images/games/appel.png',
  '/game-images/games/asriel.png',
  '/game-images/games/backrooms.png',
  '/game-images/games/bad-parenting-1.png',
  '/game-images/games/bitplanes.png',
  '/game-images/games/bloxd.png',
  '/game-images/games/bomb-pass.png',
  '/game-images/games/boom-slingers.png',
  '/game-images/games/bottle-flip-3d.png',
  '/game-images/games/brawl-star.png',
  '/game-images/games/bridd-jump.png',
  '/game-images/games/brotato.png',
  '/game-images/games/buckshot-roulette.png',
  '/game-images/games/browser-quest.png',
  '/game-images/games/browser.png',
  '/game-images/games/candy-jump.png',
  '/game-images/games/catgun-island.png',
  '/game-images/games/celeste.png',
  '/game-images/games/chat.png',
  '/game-images/games/cookie-clicker.png',
  '/game-images/games/count-master.png',
  '/game-images/games/crazy-cattle.png',
  '/game-images/games/crossy-road.png',
  '/game-images/games/csgo.png',
  '/game-images/games/curveball.png',
  '/game-images/games/deltarune.png',
  '/game-images/games/dino.png',
  '/game-images/games/donottakethiscathome.png',
  '/game-images/games/doodle-jump.png',
  '/game-images/games/drift-boss.png',
  '/game-images/games/drive-mad.png',
  '/game-images/games/eaglercraft.png',
  '/game-images/games/escape-road-2.png',
  '/game-images/games/escape-road-city.png',
  '/game-images/games/escape-road.png',
  '/game-images/games/evaw.png',
  '/game-images/games/flappy-bird.png',
  '/game-images/games/flappy-dunk.png',
  '/game-images/games/flowey.png',
  '/game-images/games/fnaf.png',
  '/game-images/games/fnf.png',
  '/game-images/games/gaster.png',
  '/game-images/games/geo-dash.png',
  '/game-images/games/gladihoppers.png',
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
  '/game-images/games/minecraft.png',
  '/game-images/games/ovo.png',
  '/game-images/games/ovo2.png',
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
  '/game-images/games/retro-bowl-college.png',
  '/game-images/games/round-and-wound.png',
  '/game-images/games/rs.png',
  '/game-images/games/sans-cjs-i.png',
  '/game-images/games/sans-cjs.png',
  '/game-images/games/sans-frisk-mode.png',
  '/game-images/games/sans-hell-mode.png',
  '/game-images/games/sans-i.png',
  '/game-images/games/sans-underfell-i.png',
  '/game-images/games/sans-underfell.png',
  '/game-images/games/sans.png',
  '/game-images/games/shady-bears.png',
  '/game-images/games/shell-shocker.png',
  '/game-images/games/silksong.png',
  '/game-images/games/skyball.png',
  '/game-images/games/slope-2-players.png',
  '/game-images/games/slope-3.png',
  '/game-images/games/slope.png',
  '/game-images/games/snow-rider.png',
  '/game-images/games/solar-smash.png',
  '/game-images/games/sound-buttons.png',
  '/game-images/games/sound-effect-player.png',
  '/game-images/games/stickman-arena.png',
  '/game-images/games/stickman-hook.png',
  '/game-images/games/stickman-rebirth.png',
  '/game-images/games/subway-surfers-beijing.png',
  '/game-images/games/subway-surfers-houston.png',
  '/game-images/games/subway-surfers-monaco.png',
  '/game-images/games/subway-surfers-newyork.png',
  '/game-images/games/subway-surfers.png',
  '/game-images/games/super-star-car.png',
  '/game-images/games/survival-race.png',
  '/game-images/games/tag.png',
  '/game-images/games/tanuki-sunset.png',
  '/game-images/games/temple-run-2.png',
  '/game-images/games/territorial.png',
  '/game-images/games/tg-playground.png',
  '/game-images/games/thatsnotmyneighbor.png',
  '/game-images/games/there-is-no-game.png',
  '/game-images/games/tomb-of-the-mask.png',
  '/game-images/games/tower-square.png',
  '/game-images/games/trigger-rally.png',
  '/game-images/games/tunnel-rush.png',
  '/game-images/games/underswap-papyrus.png',
  '/game-images/games/undertale-y.png',
  '/game-images/games/undertale.png',
  '/game-images/games/ultrakill.png',
  '/game-images/games/uno.png',
  '/game-images/games/vex.png',
  '/game-images/games/we-become-what-we-behold.png',
  '/game-images/games/wmcbg.png',
  '/game-images/games/wordle-noletterdetection.png',
  '/game-images/games/wordle.png',
  '/game-images/games/you-are-an-idiot.png',
  '/game-images/games/zombie-derby-pixel-survival.png',

  // ============ MEDIA-C ============
  '/game-images/apps/deepseek.png',
  '/game-images/apps/gemini.png',
  '/game-images/apps/github.png',
  '/game-images/apps/gn-math.png',
  '/game-images/apps/instagram.png',
  '/game-images/apps/jtools.png',
  '/game-images/apps/tiktok.png',
  '/game-images/apps/twitch.png',
  '/game-images/apps/youtube.png',

  // ============ MEDIA-D ============
  '/game-images/unblocks/hackwize.png',
  '/game-images/unblocks/jinfo.png',
  '/game-images/unblocks/rammerhead.png',
  '/game-images/unblocks/unlinewize.png',

  // ============ MEDIA-E ============
  '/game-images/contacts/discord.png',
  '/game-images/contacts/forms.png',
  '/game-images/contacts/jchat.png',

  // ============ PAGES-I ============
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

  // ============ PAGES-J ============
  '/jg/infinite-campus.png',
  '/jg/aF7kL2pQ9mXr8HsVzT1wYcB5jDn4GqE0Uo.html',
  '/jg/J4mT9vQ2xZpL6rFwK1bHs8yC0nAeR7uYdG.html',

  // ============ PAGES-E ============
  '/jg/e/',
  '/jg/e/index.html',
  '/jg/e/background3.png',
  '/jg/e/r1-5-2.html',
  '/jg/e/r1-8-8.html',
  '/jg/e/r1-8-8-t1.html',
  '/jg/e/r1-8-8-t2.html',
  '/jg/e/r1-8-8-w.html',
  '/jg/e/r1-12-2.html',
  '/jg/e/r1-12-2-w.html',
  '/jg/e/hacks/',
  '/jg/e/hacks/index.html',
  '/jg/e/hacks/dragonx.html',
  '/jg/e/hacks/fuchsiax-ghost.html',
  '/jg/e/hacks/kerosene.html',
  '/jg/e/hacks/nebula.html',
  '/jg/e/hacks/nitclient.html',
  '/jg/e/hacks/oddfuture.html',
  '/jg/e/hacks/resent-pvp.html',

  // ============ PAGES-U ============
  '/jg/u/',
  '/jg/u/index.html',
  '/jg/u/background.png',
  '/jg/u/game/',
  '/jg/u/game/index.html',
  '/jg/u/game/background.png',
  '/jg/u/simulators/',
  '/jg/u/simulators/index.html',
  '/jg/u/simulators/background.png',
  '/jg/u/simulators/asriel.sb3',
  '/jg/u/simulators/asriel-i.sb3',
  '/jg/u/simulators/flowey.sb3',
  '/jg/u/simulators/flowey-i.sb3',
  '/jg/u/simulators/sans/',
  '/jg/u/simulators/sans/index.html',
  '/jg/u/simulators/sans/background.png',
  '/jg/u/simulators/underswap/',
  '/jg/u/simulators/underswap/index.html',
  '/jg/u/simulators/underswap/background.png',

  // ============ PAGES-G ============
  '/jg/g/10-minutes-till-dawn/',
  '/jg/g/1v1-lol/',
  '/jg/g/2048/',
  '/jg/g/3/',
  '/jg/g/3d-car-simulator/',
  '/jg/g/404/',
  '/jg/g/a-dance-of-fire-and-ice/',
  '/jg/g/among-us/',
  '/jg/g/angry-birds/',
  '/jg/g/appel/',
  '/jg/g/asriel-i/',
  '/jg/g/asriel/',
  '/jg/g/backrooms/',
  '/jg/g/bad-parenting-1/',
  '/jg/g/bitplanes/',
  '/jg/g/bloxd/',
  '/jg/g/bluechasm/',
  '/jg/g/bomb-pass/',
  '/jg/g/boom-slingers/',
  '/jg/g/bottle-flip-3d/',
  '/jg/g/brawl-star/',
  '/jg/g/bridd-jump/',
  '/jg/g/brotato/',
  '/jg/g/browser-quest/',
  '/jg/g/candy-jump/',
  '/jg/g/catgun-island/',
  '/jg/g/celeste/',
  '/jg/g/cookie-clicker/',
  '/jg/g/count-master/',
  '/jg/g/crazy-cattle/',
  '/jg/g/crossy-road/',
  '/jg/g/csgo/',
  '/jg/g/curveball/',
  '/jg/g/deltarune/',
  '/jg/g/dino/',
  '/jg/g/donottakethiscathome/',
  '/jg/g/doodle-jump/',
  '/jg/g/drift-boss/',
  '/jg/g/drive-mad/',
  '/jg/g/escape-road-2/',
  '/jg/g/escape-road-city/',
  '/jg/g/escape-road/',
  '/jg/g/evaw/',
  '/jg/g/flappy-bird/',
  '/jg/g/flappy-dunk/',
  '/jg/g/flowey-i/',
  '/jg/g/flowey/',
  '/jg/g/gaster-fight/',
  '/jg/g/geo-dash/',
  '/jg/g/gladihoppers/',
  '/jg/g/granny/',
  '/jg/g/hex-gl/',
  '/jg/g/hypper-sandbox/',
  '/jg/g/iron-lungs/',
  '/jg/g/karlson/',
  '/jg/g/level-devil/',
  '/jg/g/magic-tiles-3/',
  '/jg/g/melon-playground/',
  '/jg/g/ovo/',
  '/jg/g/ovo2/',
  '/jg/g/pacman/',
  '/jg/g/paperio2/',
  '/jg/g/patrick-star/',
  '/jg/g/portal/',
  '/jg/g/pvs/',
  '/jg/g/retro-bowl/',
  '/jg/g/retro-bowl-college/',
  '/jg/g/round-and-wound/',
  '/jg/g/sans-cjs-i/',
  '/jg/g/sans-cjs/',
  '/jg/g/sans-frisk-mode/',
  '/jg/g/sans-hell/',
  '/jg/g/sans-i/',
  '/jg/g/sans-last-breath/',
  '/jg/g/sans-script.js',
  '/jg/g/sans-underfell-i/',
  '/jg/g/sans-underfell/',
  '/jg/g/sans/',
  '/jg/g/shady-bears/',
  '/jg/g/skyball/',
  '/jg/g/slope-2/',
  '/jg/g/slope-3/',
  '/jg/g/slope/',
  '/jg/g/snow-rider/',
  '/jg/g/solar-smash/',
  '/jg/g/sound-buttons/',
  '/jg/g/stickman-arena/',
  '/jg/g/stickman-hook/',
  '/jg/g/subway-surfers-beijing/',
  '/jg/g/subway-surfers-houston/',
  '/jg/g/subway-surfers-monaco/',
  '/jg/g/subway-surfers-newyork/',
  '/jg/g/subway-surfers/',
  '/jg/g/survival-race-game-code.html',
  '/jg/g/survival-race/',
  '/jg/g/tag/',
  '/jg/g/temple-run-2/',
  '/jg/g/tg-playground/',
  '/jg/g/there-is-no-game/',
  '/jg/g/tomb-of-the-mask/',
  '/jg/g/trigger-rally/',
  '/jg/g/tunnel-rush/',
  '/jg/g/underswap-papyrus/',
  '/jg/g/underswap-sans-easy/',
  '/jg/g/underswap-sans-normal/',
  '/jg/g/undertale/',
  '/jg/g/ultrakill/',
  '/jg/g/uno/',
  '/jg/g/vex/',
  '/jg/g/we-become-what-we-behold/',
  '/jg/g/where-the-water-flows/',
  '/jg/g/wordle/',
  '/jg/g/zombie-derby-pixel-survival/',
  '/jg/g/gaster-fight.sb3',

  // ============ PAGES-B ============
  '/unblocks/',
  '/unblocks/index.html',
  '/unblocks/infinite-campus.png',
  '/unblocks/c6e66984-1a96-4753-b83d-e7824f7c7c2a.png',
  '/unblocks/dino/',
  '/unblocks/dino/index.html',
  '/unblocks/dino.svg',
  '/unblocks/i-ready-games/',
  '/unblocks/i-ready-games/index.html',
  '/unblocks/i-ready-games/images.png',
  '/unblocks/i-ready-games/infinite-campus-icon.png',

  // ============ PAGES-CH ============
  '/chat/',
  '/chat/index.html',
  '/chat/jimmyqrg.html',
  '/chat/jls.html',

  // ============ PAGES-AB ============
  '/about/',
  '/about/index.html',

  // ============ PAGES-JN ============
  '/join/',
  '/join/index.html',

  // ============ PAGES-SG ============
  '/suggest-games/',
  '/suggest-games/index.html',

  // ============ PAGES-HT ============
  '/HTML-unblocker/',
  '/HTML-unblocker/index.html',
  '/HTML-unblocker/no-back.html',
  '/HTML-unblocker/infinite-campus-icon.png',
  '/HTML-unblocker/tech-keyboard.png',

  // ============ PAGES-T ============
  '/tools/',
  '/tools/index.html',

  // ============ PAGES-BR ============
  '/unblocked-browser/',

  // ============ PAGES-S ============
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

  // ============ PAGES-LX ============
  '/lx/',
  '/lx/index.html',
  '/lx/background.png',
  '/lx/jq.ico',
  '/lx/jq.png',
  '/lx/as/',
  '/lx/as/index.html',
  '/lx/doc/',
  '/lx/doc/index.html',

  // ============ PAGES-TS ============
  '/test/jqrgd.html',
  '/test/jszip.js',

  // ============ EXTERNAL ============
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
  'https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return Promise.allSettled(
          urlsToCache.map(url => {
            return cache.add(url).catch(() => {});
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  try {
    const reqUrl = new URL(event.request.url);
    if (reqUrl.origin !== self.location.origin) return;
  } catch (_) {}

  /* Skip large streaming asset bundles — cloning the response stream for
   * cache.put would otherwise abort the runtime's streaming compile mid
   * download, breaking the loader. Per-folder list covers known large
   * payloads; the extension check at the bottom is the catch-all. */
  const u = event.request.url;
  const noInterceptHosts = [
    '/jg/g/boom-slingers/',
    '/jg/g/stickman-rebirth/',
    '/jg/g/hypper-sandbox/',
    '/jg/g/crazy-cattle/',
    '/jg/g/cookie-clicker/'
  ];
  for (let i = 0; i < noInterceptHosts.length; i++) {
    if (u.indexOf(noInterceptHosts[i]) !== -1) return;
  }
  if (u.endsWith('.wasm') || u.endsWith('.data') || u.endsWith('.unityweb')) {
    return;
  }

  /* For our own first-party HTML/JS/CSS we explicitly bypass the browser's
   * HTTP cache (`cache: 'reload'`). Without this, GitHub Pages' default
   * `Cache-Control: max-age=600` lets the browser serve a stale copy out of
   * memory/disk cache before the SW even re-validates it — which made hot
   * fixes for `jqrg-particles.js`, `jqrg-aichat.js`, and the auth-message UI
   * stick on users for 10+ minutes after a deploy. We restrict this to
   * navigations + same-origin .html/.js/.css/.json so we don't tank
   * third-party CDNs (fonts, font-awesome) that genuinely benefit from the
   * browser's HTTP cache layer. Large media (images) also still ride the
   * regular cache since they're content-addressed by filename. */
  let fetchInit;
  try {
    const url = new URL(event.request.url);
    const sameOrigin = url.origin === self.location.origin;
    const isHotAsset =
      event.request.mode === 'navigate' ||
      /\.(?:html|js|mjs|css|json|map)$/i.test(url.pathname);
    if (sameOrigin && isHotAsset) {
      fetchInit = { cache: 'reload' };
    }
  } catch (_) { /* malformed URL — fall through to default fetch */ }

  event.respondWith(
    fetch(event.request, fetchInit)
      .then(response => {
        /* Cap stored response size — cloning very large responses just to
         * cache them is what was breaking the streaming runtime above, and
         * Cache Storage on many browsers refuses to store responses past
         * ~50 MiB anyway. */
        if (response && response.status === 200) {
          const len = parseInt(response.headers.get('content-length') || '0', 10);
          const tooBig = len > 8 * 1024 * 1024;
          if (!tooBig) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone).catch(() => {});
            });
          }
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            const dest = new URL(event.request.url);
            if (dest.pathname === '/' || dest.pathname === '/index.html') {
              return caches.match('/index.html');
            }
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});

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
