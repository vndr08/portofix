// Service Worker for Ivander Portfolio PWA
const CACHE_NAME = 'ivander-portfolio-v3';
const STATIC_ASSETS = [
  '/',
  '/offline',
  '/manifest.json',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip API requests and Formspree
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/api') || url.hostname.includes('formspree')) {
    return;
  }

	// Pages must be network-first so a new deployment never remains hidden
	// behind an old cached portfolio. The cached page is only an offline fallback.
	if (event.request.mode === 'navigate') {
		event.respondWith(
			fetch(event.request)
				.then((networkResponse) => {
					if (networkResponse.ok) {
						const responseClone = networkResponse.clone();
						event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone)));
					}
					return networkResponse;
				})
				.catch(async () => (await caches.match(event.request)) || caches.match('/offline'))
		);
		return;
	}

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached response and update cache in background
        event.waitUntil(
          fetch(event.request).then((networkResponse) => {
            if (networkResponse.ok) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          }).catch(() => {})
        );
        return cachedResponse;
      }

      // Not in cache - fetch from network
      return fetch(event.request)
        .then((networkResponse) => {
          // Cache successful responses
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return new Response('Offline', { status: 503 });
        });
    })
  );
});

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body,
		icon: '/icon.svg',
		badge: '/icon.svg',
    });
  }
});
