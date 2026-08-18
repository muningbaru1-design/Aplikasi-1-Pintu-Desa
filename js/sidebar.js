/* =========================================================
   SIDEBAR APLIKASI 1 PINTU
   DESA MUNING BARU
   ========================================================= */


/* =========================================================
   KONFIGURASI SIDEBAR
   Isi bagian link sesuai halaman yang sudah ada
   ========================================================= */

const SIDEBAR_DATA = [

    {
        id: "administrasi",
        nama: "Buku Administrasi Desa",
        icon: "bi-book-fill",

        submenu: [

            {
                nama: "Kependudukan",
                icon: "bi-people",
                link: "#"
            },

            {
                nama: "Pembangunan",
                icon: "bi-building",
                link: "#"
            },

            {
                nama: "Umum",
                icon: "bi-folder",
                link: "#"
            },

            {
                nama: "Keuangan",
                icon: "bi-cash-stack",
                link: "#"
            }

        ]
    },


    {
        id: "penduduk",
        nama: "Penduduk",
        icon: "bi-people-fill",

        submenu: [

            {
                nama: "Jumlah Penduduk",
                icon: "bi-person-lines-fill",
                link: "#"
            },

            {
                nama: "Prodeskel",
                icon: "bi-bar-chart",
                link: "#"
            }

        ]
    },


    {
        id: "kewilayahan",
        nama: "Kewilayahan",
        icon: "bi-map-fill",

        submenu: [

            {
                nama: "Data Rumah",
                icon: "bi-house-fill",
                link: "#"
            },

            {
                nama: "Peta Desa",
                icon: "bi-geo-alt-fill",
                link: "#"
            }

        ]
    },


    {
        id: "kesehatan",
        nama: "Kesehatan",
        icon: "bi-heart-pulse-fill",

        submenu: [

            {
                nama: "Posyandu",
                icon: "bi-heart-pulse",
                link: "#"
            },

            {
                nama: "SIP Bumilnya",
                icon: "bi-person-heart",
                link: "#"
            }

        ]
    },


    {
        id: "bantuan",
        nama: "Bantuan Sosial",
        icon: "bi-hand-thumbs-up-fill",

        submenu: [

            {
                nama: "Usulan ke Puskesos",
                icon: "bi-file-earmark-plus",
                link: "#"
            },

            {
                nama: "Data Penerima Bansos",
                icon: "bi-person-check-fill",
                link: "#"
            }

        ]
    },


    {
        id: "rapat",
        nama: "Rapat / Musdes",
        icon: "bi-people-fill",

        submenu: [

            {
                nama: "Catat Rapat",
                icon: "bi-pencil-square",
                link: "#"
            },

            {
                nama: "Kumpulan Undangan",
                icon: "bi-envelope-fill",
                link: "#"
            }

        ]
    },


    {
        id: "perencanaan",
        nama: "Perencanaan & Pelaporan",
        icon: "bi-bar-chart-line-fill",

        submenu: [

            {
                nama: "Capaian RPJMDes",
                icon: "bi-bar-chart-line-fill",
                link: "#"
            },

            {
                nama: "Capaian RPJMDes Rinci",
                icon: "bi-bar-chart-line",
                link: "#"
            },

            {
                nama: "Upload SPJ",
                icon: "bi-cloud-arrow-up-fill",
                link: "#"
            }

        ]
    },


    {
        id: "pemerintahan",
        nama: "Pemerintahan Desa",
        icon: "bi-bank2",

        submenu: [

            {
                nama: "Produk Hukum Desa",
                icon: "bi-bank2",
                link: "#"
            },

            {
                nama: "Lembaga dan Kelompok Desa",
                icon: "bi-people-fill",
                link: "#"
            }

        ]
    },


    {
        id: "keuangan",
        nama: "Keuangan Desa",
        icon: "bi-cash-stack",

        submenu: [

            {
                nama: "Catat PADes",
                icon: "bi-cash-coin",
                link: "#"
            },

            {
                nama: "Catat Pendapatan BUMDes",
                icon: "bi-bank",
                link: "#"
            },

            {
                nama: "Tanda Terima Gaji",
                icon: "bi-receipt",
                link: "#"
            }

        ]
    },


    {
        id: "media",
        nama: "Media Sosial",
        icon: "bi-globe2",

        submenu: [

            {
                nama: "Website Desa",
                icon: "bi-globe2",
                link: "#"
            },

            {
                nama: "Instagram Desa",
                icon: "bi-instagram",
                link: "#"
            }

        ]
    }

];


/* =========================================================
   MEMBUAT SIDEBAR
   ========================================================= */

function buatSidebar() {


    /* -----------------------------------------
       CEK APAKAH SIDEBAR SUDAH ADA
    ----------------------------------------- */

    let sidebar =
        document.getElementById(
            "sidebarAplikasi"
        );


    /* -----------------------------------------
       JIKA BELUM ADA, BUAT
    ----------------------------------------- */

    if (!sidebar) {

        sidebar =
            document.createElement(
                "aside"
            );

        sidebar.id =
            "sidebarAplikasi";


        document.body.appendChild(
            sidebar
        );

    }


    /* -----------------------------------------
       ISI SIDEBAR
    ----------------------------------------- */

    sidebar.innerHTML = `

        <div class="sidebar-logo">

            <img
    src="/Aplikasi-1-Pintu-Desa/assets/logo/logo-aplikasi-1-pintu.jpg"
    alt="Logo Aplikasi 1 Pintu"
    class="sidebar-logo-img">

        </div>


        <div class="sidebar-title">

            <h2>
                Aplikasi 1 Pintu
            </h2>

            <p>
                Desa Muning Baru
            </p>

            <small>
                Kecamatan Daha Selatan
            </small>

        </div>


        <div
            class="sidebar-menu"
            id="sidebarMenuList">

        </div>

    `;


    const menuContainer =
        document.getElementById(
            "sidebarMenuList"
        );


    /* -----------------------------------------
       BUAT MENU
    ----------------------------------------- */

    SIDEBAR_DATA.forEach(
        function(kategori) {


            const wrapper =
                document.createElement(
                    "div"
                );


            wrapper.className =
                "sidebar-group";


            /* --------------------------------
               HEADER KATEGORI
            -------------------------------- */

            const header =
                document.createElement(
                    "button"
                );


            header.className =
                "sidebar-group-header";


            header.innerHTML = `

                <span>

                    <i
                        class="bi ${kategori.icon}">
                    </i>

                    ${kategori.nama}

                </span>

                <i
                    class="bi bi-chevron-down sidebar-arrow">
                </i>

            `;


            /* --------------------------------
               SUBMENU
            -------------------------------- */

            const submenu =
                document.createElement(
                    "div"
                );


            submenu.className =
                "sidebar-submenu";


            kategori.submenu.forEach(
                function(item) {


                    const link =
                        document.createElement(
                            "a"
                        );


                    link.className =
                        "sidebar-link";


                    link.href =
                        item.link;


                    link.innerHTML = `

                        <i
                            class="bi ${item.icon}">
                        </i>

                        <span>
                            ${item.nama}
                        </span>

                    `;


                    submenu.appendChild(
                        link
                    );

                }
            );


            /* --------------------------------
               BUKA / TUTUP SUBMENU
            -------------------------------- */

            header.addEventListener(
                "click",
                function() {


                    wrapper.classList.toggle(
                        "open"
                    );


                    submenu.classList.toggle(
                        "show"
                    );

                }
            );


            wrapper.appendChild(
                header
            );


            wrapper.appendChild(
                submenu
            );


            menuContainer.appendChild(
                wrapper
            );

        }
    );

}


/* =========================================================
   JALANKAN SIDEBAR
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        buatSidebar
    );

} else {

    buatSidebar();

}

