/*


*/
const
    CACHE_APP_PWA = 'CACHE_APP_PWA',
    urlToCache = [
        '/',
        './',
        '/public/bundle.css',
        '/public/bundle.js',
        '/bundle.css',
        '/bundle.js',
        '/?utm=homescreen',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css',
        'https://use.fontawesome.com/releases/v5.7.0/css/all.css',
        'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js',
        '/public/assets/scss/normalize.css',
    ];
self.addEventListener('install', e => {
    console.log('SW install');
    e.waitUntil(
        caches.open(CACHE_APP_PWA)
            .then(cache => {
                console.log('FILES IN CACHE');
                return cache.addAll(urlToCache)
            })
            .catch(error => console.log('*** Error_CACHE_REGISTER',error))
    )
});

self.addEventListener('activate', e => {
    console.log('SW activate');
    const cacheList = [CACHE_APP_PWA]
    e.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheList.indexOf(cacheName) === -1){
                            return caches.delete(cacheName)
                        }
                    })
                )
            })
            .then(() => {
                console.log('REFRES CACHE OK')
                return self.clients.claim()
            })
            .catch(error => console.log('*** Error_CACHE',error))
    );
});

self.addEventListener('fetch', e => {
    console.log('SW fetch')
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if(res){
                    return res
                }
                return  fetch(request)
                    .then(res => {
                        let resToCache = res.clone()
                        caches.open(cacheName)
                            .then(res => {
                                cache
                                    .put(request,resToCache)
                                    .catch(error => console.log('*** Error_URL_CHACHE',`${request.url} : ${error.message}`))
                            })
                        return res;
                    })
            })
    )
});

self.addEventListener('push', e => {
    console.log('PUSH SW');
    const
        title = 'push notification demo',
        options = {
            body:'Regresar a la app',
            icon: '/public/assets/img_app/js192x192.png',
            vibrate:[100,50,100],
            data:{dato:'someData'},
            actions:[
                { 'action': 'Yes', 'title': 'to accept', icon: '/public/assets/img_app/js192x192.png'},
                { 'action': 'Not', 'title': 'Not accept', icon: '/public/assets/img_app/js192x192.png' }
            ]
        }
    e.waitUntil(self.registration.showNotification(title,options));
});

self.addEventListener('notificationclick', e => {
    console.log('e',e);
    if(e.action === 'Yes'){
        console.log('YES CLICK NOTIFICATION');
        clients.openWindow('/new_user');
    }else if(e.action === 'Not'){
        console.log('NOT CLICK NOTIFICATION',);
    }
    e.notification.close();
});

