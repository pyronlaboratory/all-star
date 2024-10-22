const version = "0.6.18";
const cacheName = 'all-star-${version}';
self.addEventListener('install', e => {
  // Installs and populates a cache with webpage resources.
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Adds multiple resources to a cache and then skips waiting.
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
  // Listens for the 'activate' event.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Handles fetch events.
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      // Returns the response if available, otherwise performs a fetch.
      return response || fetch(event.request);
    })
  );
});