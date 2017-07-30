var cacheName = 'KarthikPWA';
var filesToCache = [
    '/index.html',
    'css/app.css',
    'js/app.js'
];

self.addEventListener('install', function(e){
   console.log('Service Worker Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('caching');
            return cache.addAll(filesToCache);
        })
    );
});