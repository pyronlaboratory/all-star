const version = "0.6.18";
const cacheName = 'all-star-${version}';
self.addEventListener('install', e => {
  // Handles the installation of a service worker.
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Adds multiple URLs to a cache and skips waiting.
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
  // Waits for the service worker to claim its scope after activation.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Handles fetch requests.
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      // Returns the response if available, or fetches the request otherwise.
      return response || fetch(event.request);
    })
  );
});