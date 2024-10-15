const version = "0.6.18";
const cacheName = 'all-star-${version}';
self.addEventListener('install', e => {
  // Installs and pre-populates a cache with static files.
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Adds multiple resources to a cache.
      return cache.addAll([
        '/',
        '/index.html',
        '/about.html',
        '/contact.html'
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  // Handles the 'activate' event of a service worker.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Handles fetch events for a Service Worker.
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      // Returns the response if it exists, otherwise fetches the event request.
      return response || fetch(event.request);
    })
  );
});