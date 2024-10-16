const version = "0.6.18";
const cacheName = 'all-star-${version}';
self.addEventListener('install', e => {
  // Handles the browser's installation event.
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Adds cache entries and skips waiting.
      return cache.addAll([
        'https://pyronlaboratory.github.io/all-star/',
        'https://pyronlaboratory.github.io/all-star/index.html',
        'https://pyronlaboratory.github.io/all-star/about.html',
        'https://pyronlaboratory.github.io/all-star/contact.html'
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  // Waits for the service worker to claim its scope.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Handles service worker fetch events.
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      // Returns the response if it exists, otherwise it fetches the request.
      return response || fetch(event.request);
    })
  );
});