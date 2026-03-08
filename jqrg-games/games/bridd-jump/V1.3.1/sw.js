// Service Worker for Bridd Jump V1.3.1 (offline-first)
const CACHE_NAME = 'bridd-jump-v1.3.1';
const BASE = new URL('.', self.location.href).pathname;
const ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'game.js',
  BASE + 'settings.html',
  BASE + 'infinite-campus.ico',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'manifest.json',
  '/game-images/games/bridd-jump.png',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'images/healer.png',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'images/extremeHealer.png',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'images/healthIncreaser.png',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'images/shield.png',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'images/minus.png',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'images/speed%20up.png',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'images/jumper.png',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/first-jump.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/second-jump.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/trigger-drop.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/land.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/die.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/collect-gem.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/start-chooseversion.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/apply-save.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/menu-click.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/background.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/heal-ultra-heal.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/healthIncreaser.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/minus.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/speed-up.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/boost.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/speed-up-music.mp3',
  BASE.replace(/\/V[0-9.]+\/$/, '') + 'sounds/speed-up-music-loop.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone).catch(() => {});
        });
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match(BASE + 'index.html');
        }
        return cached;
      });
    })
  );
});
