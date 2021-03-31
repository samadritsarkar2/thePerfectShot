// var CACHE_NAME = 'thePerfectShot_v1';



// const self = this;

// Install SW
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => {
//                 console.log('Opened cache');

//                 return cache.addAll(urlsToCache);
//             })
//     )
// });

// // Listen for requests
// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(() => {
//                 return fetch(event.request) 
//                     .catch(() => caches.match('offline.html'))
//             })
//     )
// });

// // Activate the SW
// self.addEventListener('activate', (event) => {
//     const cacheWhitelist = [];
//     cacheWhitelist.push(CACHE_NAME);

//     event.waitUntil(
//         caches.keys().then((cacheNames) => Promise.all(
//             cacheNames.map((cacheName) => {
//                 if(!cacheWhitelist.includes(cacheName)) {
//                     return caches.delete(cacheName);
//                 }
//             })
//         ))
            
//     )
// });

console.warn("public sw");

let cacheData = "thePerfectShotv1";

const urlsToCache = [
    '/static/js/2.11f2d4a6.chunk.js',
    '/static/js/main.262f3b3e.chunk.js',
    '/static/js/bundle.js',
    '/manifest.json',
    '/static/css/main.a5d7234d.chunk.css',
    '/bootstrap.min.css',
    '/android/android-launchericon-144-144.png',
    '/Unsplash_Symbol.png',
    '/index.html',
    '/',
]

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache).catch((err)=> {
                    console.log(err)
                })
            })
    )
});


this.addEventListener("fetch", (event) => {


    // console.warn("url",event.request.url)


    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    } else {
        console.log('Fetch failed; returning offline page instead.', error);

        const cache =  caches.open(CACHE_NAME);
        const cachedResponse =  cache.match("/");
        return cachedResponse;
    }
}) 