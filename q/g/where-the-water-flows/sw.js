// Service worker to add Cross-Origin Isolation headers required by Godot web (threads/SharedArrayBuffer).
// GitHub Pages does not send these headers; the SW serves the document with them so the game can run.
const COOP = 'Cross-Origin-Opener-Policy';
const COEP = 'Cross-Origin-Embedder-Policy';
const CORP = 'Cross-Origin-Resource-Policy';

// Scope: directory containing this SW (e.g. .../where-the-water-flows/)
const SW_PATH = new URL(self.location.href).pathname.replace(/\/[^/]*$/, '/');

function isInScope(url) {
  const path = new URL(url).pathname;
  return path === SW_PATH || path === SW_PATH.replace(/\/$/, '') || path.startsWith(SW_PATH);
}

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (e) {
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin || !isInScope(url)) return;

  const isDoc = e.request.mode === 'navigate' || e.request.destination === 'document';
  const path = url.pathname;
  const isIndex = path.endsWith('/') || path.endsWith('/index.html') || path === SW_PATH.replace(/\/$/, '') || path === SW_PATH.replace(/\/$/, '') + '/index.html';

  if (isDoc || isIndex) {
    e.respondWith(
      fetch(e.request, { cache: 'reload' }).then(async function (r) {
        if (!r.ok) return r;
        const headers = new Headers(r.headers);
        headers.set(COOP, 'same-origin');
        headers.set(COEP, 'require-corp');
        headers.set(CORP, 'same-origin');
        return new Response(await r.arrayBuffer(), {
          status: r.status,
          statusText: r.statusText,
          headers: headers
        });
      }).catch(function () {
        return fetch(e.request);
      })
    );
    return;
  }

  // With COEP require-corp, ALL subresources (scripts, wasm, pck, etc.) need CORP or they are blocked.
  // Add CORP to every in-scope resource so workers and main thread can load everything.
  const needsCORP = path.endsWith('.js') || path.endsWith('.wasm') || path.endsWith('.pck') ||
    path.endsWith('.png') || path.endsWith('.ico') ||
    e.request.destination === 'script' || e.request.destination === 'worker' || e.request.destination === 'embed';
  if (needsCORP) {
    e.respondWith(
      fetch(e.request, { cache: 'reload' }).then(async function (r) {
        if (!r.ok) return r;
        const headers = new Headers(r.headers);
        headers.set(CORP, 'same-origin');
        return new Response(await r.arrayBuffer(), {
          status: r.status,
          statusText: r.statusText,
          headers: headers
        });
      }).catch(function () {
        return fetch(e.request);
      })
    );
  }
});
