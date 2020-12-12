const version = "0.6.18";
const cacheName = 'all-star-${version}';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
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
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
