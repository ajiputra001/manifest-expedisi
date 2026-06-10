const CACHE_NAME = 'resi-center-cache-v1';

// File lokal yang wajib disimpan di cache HP pengguna
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './assets/css/style.css',
    './assets/js/app.js'
];

// Proses Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Bersihkan cache versi lama jika ada update
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Ambil data (Bypass API Supabase/Binderbyte agar selalu Real-time)
self.addEventListener('fetch', event => {
    // Jangan cache request API dan Database
    if (event.request.url.includes('supabase.co') || 
        event.request.url.includes('allorigins.win') || 
        event.request.url.includes('binderbyte.com')) {
        return; // Lanjut tanpa cache
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cache jika ada, jika tidak, fetch dari internet
                return response || fetch(event.request);
            })
    );
});
