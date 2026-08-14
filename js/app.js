function bukaMenu(id){

    switch(id){

        case "administrasi":
            window.location.href = "pages/buku-administrasi.html";
            break;

        default:
            alert(id);

    }

}
/* ===========================================
   SIDEBAR APLIKASI 1 PINTU
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const sidebar =
        document.getElementById("appSidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    const closeButton =
        document.getElementById("sidebarClose");

    const menuButton =
        document.querySelector(".menu-btn");


    /* =========================
       BUKA SIDEBAR
    ========================= */

    function bukaSidebar() {

        if (!sidebar) return;

        sidebar.classList.add("active");

        if (overlay) {

            overlay.classList.add("active");

        }

    }


    /* =========================
       TUTUP SIDEBAR
    ========================= */

    function tutupSidebar() {

        if (!sidebar) return;

        sidebar.classList.remove("active");

        if (overlay) {

            overlay.classList.remove("active");

        }

    }


    /* =========================
       TOMBOL MENU
    ========================= */

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            bukaSidebar
        );

    }


    /* =========================
       TOMBOL CLOSE
    ========================= */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            tutupSidebar
        );

    }


    /* =========================
       KLIK LUAR SIDEBAR
    ========================= */

    if (overlay) {

        overlay.addEventListener(
            "click",
            tutupSidebar
        );

    }


    /* =========================
       ESC UNTUK MENUTUP
    ========================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                tutupSidebar();

            }

        }
    );


    /* =========================
       KELOMPOK MENU
    ========================= */

    const kelompok = {

        sidebarAdministrasi: [
            "administrasi",
            "undangan",
            "rapat",
            "rapat v2",
            "produkhukum"
        ],

        sidebarKeuangan: [
            "pades",
            "bumdes",
            "gaji"
        ],

        sidebarSPJ: [
            "spj",
            "rapat v2",
            "laporan-kader"
        ],

        sidebarPerencanaan: [
            "rpjmdes",
            "rpjmdes-v2"
        ],

        sidebarData: [
            "rumah",
            "peta",
            "lembaga"
        ],

        sidebarPortal: [
            "portal"
        ],

        sidebarSetting: [
            "setting"
        ]

    };


    /* =========================
       BUAT ITEM SIDEBAR
    ========================= */

    function buatItemSidebar(menu) {

        const link =
            document.createElement("a");

        link.className =
            "sidebar-item";

        link.href =
            menu.link;

        link.innerHTML = `

            <i
                class="bi ${menu.icon}"
                style="color:${menu.warna};">
            </i>

            <span>
                ${menu.nama}
            </span>

        `;

        link.addEventListener(
            "click",
            tutupSidebar
        );

        return link;

    }


    /* =========================
       MASUKKAN MENU
    ========================= */

    Object.keys(kelompok).forEach(
        function (containerID) {

            const container =
                document.getElementById(
                    containerID
                );

            if (!container) return;


            const daftarID =
                kelompok[containerID];


            daftarID.forEach(
                function (id) {

                    const menu =
                        gridMenu.find(
                            function (item) {

                                return item.id === id;

                            }
                        );


                    if (!menu) return;


                    /*
                     * Hindari duplikasi
                     */

                    const sudahAda =
                        Array.from(
                            container.children
                        ).some(
                            function (element) {

                                return element.dataset.menuId === id;

                            }
                        );


                    if (sudahAda) return;


                    const item =
                        buatItemSidebar(menu);


                    item.dataset.menuId =
                        id;


                    container.appendChild(item);

                }
            );

        }
    );


    /* =========================
       DASHBOARD
    ========================= */

    window.scrollToDashboard =
        function () {

            tutupSidebar();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        };

});