const CACHE_NAME = "aplikasi-1-pintu-v1";

self.addEventListener(
    "install",
    function (event) {

        console.log(
            "Service Worker sedang di-install"
        );

        self.skipWaiting();

    }
);


self.addEventListener(
    "activate",
    function (event) {

        console.log(
            "Service Worker aktif"
        );

        event.waitUntil(
            self.clients.claim()
        );

    }
);


self.addEventListener(
    "fetch",
    function (event) {

        event.respondWith(

            fetch(event.request)

                .catch(function () {

                    return caches.match(
                        event.request
                    );

                })

        );

    }
);