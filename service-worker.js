/* ============================================
   Service Worker — Ghanashyam Portfolio
   V1.3.0
   - Cache First for static assets
   - Network First for HTML (falls back to cache, then offline page)
   - Versioned cache names; old caches purged on activate
   ============================================ */

const VERSION = 'v1.3.0';
const STATIC_CACHE  = `portfolio-static-${VERSION}`;
const HTML_CACHE    = `portfolio-html-${VERSION}`;
const RUNTIME_CACHE = `portfolio-runtime-${VERSION}`;

const STATIC_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',
  './css/style.css',
  './js/main.js',
  './assets/logo.svg',
  './assets/logo-dark.svg',
  './assets/logo-light.svg',
  './assets/logo-icon.svg',
  './assets/favicon.svg',
  './assets/images/project-pocketpilot.svg',
  './assets/images/project1.svg',
  './assets/images/project2.svg',
  './assets/images/project3.svg',
  './assets/images/project4.svg',
  './assets/images/project5.svg',
  './assets/images/project6.svg'
];

/* ---------------------------
   Install — pre-cache essentials
   --------------------------- */
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            // addAll fails the whole install if any asset 404s.
            // Use add() with individual fallbacks so a single missing
            // asset doesn't break installation.
            return Promise.all(
                STATIC_ASSETS.map((url) =>
                    cache.add(url).catch((err) => {
                        console.warn('[SW] Skipped caching (failed):', url, err);
                    })
                )
            );
        })
    );
});

/* ---------------------------
   Activate — purge old caches
   --------------------------- */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) =>
                        key !== STATIC_CACHE &&
                        key !== HTML_CACHE &&
                        key !== RUNTIME_CACHE
                    )
                    .map((key) => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

/* ---------------------------
   Fetch — routing strategy
   --------------------------- */
self.addEventListener('fetch', (event) => {
    const req = event.request;

    // Only handle GET
    if (req.method !== 'GET') return;

    const url = new URL(req.url);

    // Bypass cross-origin (CDN fonts, FontAwesome, etc.)
    if (url.origin !== self.location.origin) return;

    // HTML navigations → Network First, cache fallback, offline fallback
    if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
        event.respondWith(networkFirst(req));
        return;
    }

    // Static assets (CSS, JS, SVG, images) → Cache First
    event.respondWith(cacheFirst(req));
});

/* ---------------------------
   Strategies
   --------------------------- */
async function cacheFirst(req) {
    const cached = await caches.match(req);
    if (cached) return cached;

    try {
        const response = await fetch(req);
        if (response && response.status === 200 && response.type === 'basic') {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(req, response.clone());
        }
        return response;
    } catch (err) {
        // Last-resort fallback for images: tiny transparent SVG
        if (req.destination === 'image') {
            return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
            );
        }
        throw err;
    }
}

async function networkFirst(req) {
    try {
        const response = await fetch(req);
        if (response && response.status === 200) {
            const cache = await caches.open(HTML_CACHE);
            cache.put(req, response.clone());
        }
        return response;
    } catch (err) {
        const cached = await caches.match(req);
        if (cached) return cached;
        const offline = await caches.match('./offline.html');
        if (offline) return offline;
        return new Response('Offline', { status: 503, statusText: 'Offline' });
    }
}

/* ---------------------------
   Messages — allow page to trigger skipWaiting
   --------------------------- */
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
