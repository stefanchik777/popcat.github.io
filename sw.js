// sw.js
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/іконка.png',
                '/додати_на_головний_екран.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

// Коли веб-застосунок активовано, встановлюємо текст "Привіт" на головному екрані
self.addEventListener('activate', function(event) {
    event.waitUntil(
        self.registration.showNotification('Привіт')
    );
});
