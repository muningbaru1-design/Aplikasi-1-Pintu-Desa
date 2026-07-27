const CACHE_NAME = "aplikasi-1-pintu-v1";

const FILES_TO_CACHE = [

    "./",

    "./index.html",

    "./manifest.json",

    "./assets/logo-192.png",

    "./assets/logo-512.png"

];

self.addEventListener(

    "install",

    event => {

        event.waitUntil(

            caches.open(

                CACHE_NAME

            ).then(

                cache =>

                    cache.addAll(

                        FILES_TO_CACHE

                    )

            )

        );

    }

);


self.addEventListener(

    "fetch",

    event => {

        event.respondWith(

            caches.match(

                event.request

            ).then(

                response =>

                    response ||

                    fetch(

                        event.request

                    )

            )

        );

    }

);