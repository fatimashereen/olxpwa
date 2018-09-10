
var dataCacheName ='OLXData';
var cacheName = 'PWA';
var filesToCache = [
    '/',
    '/index.html',
    '/layout/ad.html',
    '/layout/ads.html',
    '/layout/category.html',
    '/layout/edit.html',
    '/layout/fav-detail.html',
    '/layout/fav.html',
    '/layout/inbox.html',
    '/layout/login.html',
    '/layout/message.html',
    '/layout/offlineAd.html',
    '/layout/post.html',
    '/layout/register.html',
    '/layout/search.html',
    '/layout/user.html',
    '/js/index.js',
    '/js/login.js',
    '/js/signup.js',
    '/css/all.css',
    '/css/index.css',
    'images/download.jpg',
    'images/loading.gif',
    'images/offline.png',
    'images/icons/icon-128x128.png'
];


self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(dataCacheName).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
    );
  });

  self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== cacheName && key !== dataCacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
    );
    return self.clients.claim();
  });
  
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
  });
      