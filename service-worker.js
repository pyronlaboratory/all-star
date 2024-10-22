const version = "0.6.18";
const cacheName = 'all-star-${version}';
self.addEventListener('install', e => {
  // Installs the service worker and caches specified web pages.
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Adds multiple files to a cache and then triggers a service worker to skip waiting.
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
  // Handles the activation event of a service worker.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Handles fetch events for the service worker.
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      // Returns the response if it exists, otherwise fetches the request.
      return response || fetch(event.request);
    })
  );
});