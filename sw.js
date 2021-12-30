const CACHE_ELEMENTS = [
    "./",
    "./ASSETS",
    "./CSS/normalize.css",
    "./CSS/style.css",
    "./JS/app.bundle.js",
]

const CACHE_NAME = "v1_cache_clock"

self.addEventListener("install", (e)=>{e.waitUntil(caches.open(CACHE_NAME).then(cache =>{
    cache.addAll(CACHE_ELEMENTS).then(()=>{
        self.skipWaiting()
        }).catch(console.log)
    })
)})

self.addEventListener("activate", (e)=>{
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntil(
        caches.keys().then(cacheNames =>{
            console.log(cacheNames)
        })
    )
})

self.addEventListener("fetch", (e)=>{
    e.respondWith(
        caches.match(e.request).then((res)=>{
            if(res){
                return res
            }
            return fetch(e.request)
        })
    )
})