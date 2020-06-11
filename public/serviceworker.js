const CACHE_NAME = "version-1";
const urlToCache = ['index.html', 'offline.html'];
const self = this;
// Install SW
self.addEventListener('install', event => {
  const fullFillCache = async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log('Opened cache');

    return cache.addAll(urlToCache);
  }

  event.waitUntil(fullFillCache());
});
// Listen for requests

self.addEventListener('fetch', event => {
  const fetchForecast = async () => {
    const validRequest = await caches.match(event.request);
    if(validRequest) return fetch(event.request);

    return caches.match('offline.html')
  }
  event.respondWith(fetchForecast());
});
// Activate the SW

self.addEventListener('activate', event => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  const validateCache = async () => {
    const cacheNames = await caches.keys();
    Promise.all(
      cacheNames.map((cacheName) => {
        console.log('Validating');
        if(!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    )
  }
  event.waitUntil(validateCache());
});


