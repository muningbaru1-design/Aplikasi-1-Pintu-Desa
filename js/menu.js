/* ===========================================
   MEMBUAT MENU APLIKASI 1 PINTU
   Agenda dibuat sebagai kartu khusus
=========================================== */

const grid = document.getElementById("gridMenu");


/* ===========================================
   AGENDA & KALENDER DESA
=========================================== */

const agendaMenu =
    gridMenu.find(
        menu => menu.id === "agenda"
    );


if (agendaMenu) {

    grid.insertAdjacentHTML(
        "beforebegin",

        `

        <section class="agenda-home">

            <div class="agenda-home-icon">

                <i class="bi bi-calendar-event-fill"></i>

            </div>


            <div class="agenda-home-content">

                <h3>
                    Agenda & Kalender Desa
                </h3>

                <p>
                    Jadwal rapat, Musdes, Posyandu,
                    dan kegiatan Desa
                </p>


                <div
                    id="agendaTerdekat">
                    Memuat agenda...
                </div>

            </div>


            <button
                class="agenda-home-btn"
                onclick="window.location.href='pages/agenda.html'">

                Lihat Agenda

                <i class="bi bi-arrow-right"></i>

            </button>

        </section>

        `

    );

}


/* ===========================================
   MEMBUAT GRID MENU
=========================================== */

gridMenu.forEach(menu => {


    /* -----------------------------------------
       AGENDA TIDAK DIBUAT SEBAGAI KOTAK MENU
    ----------------------------------------- */

    if (
        menu.id === "agenda"
    ) {

        return;

    }


    /* -----------------------------------------
       MENU LAIN TETAP SEPERTI SEMULA
    ----------------------------------------- */

    grid.innerHTML += `

        <div
            class="grid-item"
            onclick="window.location.href='${menu.link}'">

            <i
                class="bi ${menu.icon}"
                style="color:${menu.warna};">
            </i>

            <h6>
                ${menu.nama}
            </h6>

        </div>

    `;

});

/* ===========================================
   AGENDA & KALENDER DESA
   AMBIL 3 AGENDA TERDEKAT
=========================================== */

const AGENDA_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzHN1pIBCuDsy8Ic14fkNBQeau7R1EXaetZ45PKJTp-qqjawYLDJKJT6SvTknfWWEh0nA/exec";


/* ===========================================
   KONVERSI TANGGAL AGENDA
=========================================== */

function tanggalAgenda(item) {

    if (!item || !item.tanggal) {
        return null;
    }

    const tanggal =
        String(item.tanggal).trim();

    const bagian =
        tanggal.split("-");

    if (bagian.length !== 3) {
        return null;
    }

    const tahun =
        parseInt(bagian[0], 10);

    const bulan =
        parseInt(bagian[1], 10) - 1;

    const hari =
        parseInt(bagian[2], 10);


    if (
        isNaN(tahun) ||
        isNaN(bulan) ||
        isNaN(hari)
    ) {
        return null;
    }


    /* ---------------------------------------
       Ambil jam dari Google Sheets
    --------------------------------------- */

    let jam = 0;
    let menit = 0;


    if (item.jam) {

        const jamText =
            String(item.jam);

        const cocok =
            jamText.match(
                /(\d{1,2}):(\d{2})/
            );


        if (cocok) {

            jam =
                parseInt(cocok[1], 10);

            menit =
                parseInt(cocok[2], 10);

        }

    }


    return new Date(
        tahun,
        bulan,
        hari,
        jam,
        menit,
        0
    );

}


/* ===========================================
   FORMAT JAM
=========================================== */

function formatJamAgenda(item) {

    if (!item || !item.jam) {
        return "";
    }

    const cocok =
        String(item.jam).match(
            /(\d{1,2}):(\d{2})/
        );


    if (!cocok) {
        return "";
    }


    return (
        cocok[1].padStart(2, "0")
        +
        ":"
        +
        cocok[2]
    );

}


/* ===========================================
   TAMPILKAN 3 AGENDA TERDEKAT
=========================================== */

async function tampilkanAgendaTerdekat() {

    const el =
        document.getElementById(
            "agendaTerdekat"
        );


    if (!el) {
        return;
    }


    try {

        const response =
            await fetch(
                AGENDA_SCRIPT_URL +
                "?action=get&_=" +
                Date.now()
            );


        if (!response.ok) {

            throw new Error(
                "HTTP " +
                response.status
            );

        }


        const text =
            await response.text();


        console.log(
            "DATA AGENDA DASHBOARD:",
            text
        );


        const result =
            JSON.parse(text);


        console.log(
            "HASIL AGENDA:",
            result
        );


        if (
            !result ||
            !Array.isArray(result.data)
        ) {

            throw new Error(
                "Format data agenda tidak sesuai"
            );

        }


        /* -----------------------------------
           Waktu sekarang
        ----------------------------------- */

        const sekarang =
            new Date();


        /* -----------------------------------
           Ambil agenda yang belum lewat
        ----------------------------------- */

        const agendaMendatang =
            result.data

            .map(function(item) {

                return {

                    data: item,

                    waktu:
                        tanggalAgenda(item)

                };

            })

            .filter(function(item) {

                if (!item.waktu) {
                    return false;
                }


                /*
                   Jangan tampilkan agenda
                   yang statusnya Selesai
                */

                const status =
                    String(
                        item.data.status || ""
                    )
                    .trim()
                    .toLowerCase();


                if (
                    status === "selesai"
                ) {

                    return false;

                }


                /*
                   Hanya agenda yang
                   belum lewat
                */

                return (
                    item.waktu >=
                    sekarang
                );

            })

            .sort(function(a, b) {

                return (
                    a.waktu -
                    b.waktu
                );

            });


        console.log(
            "AGENDA MENDATANG:",
            agendaMendatang
        );


        /* -----------------------------------
           Tidak ada agenda
        ----------------------------------- */

        if (
            agendaMendatang.length === 0
        ) {

            el.innerHTML =
                "Tidak ada agenda mendatang.";

            return;

        }


        /* -----------------------------------
           Ambil maksimal 3 agenda
        ----------------------------------- */

        const tigaAgenda =
            agendaMendatang.slice(
                0,
                3
            );


        /* -----------------------------------
           Tampilkan
        ----------------------------------- */

        el.innerHTML =
            tigaAgenda.map(
                function(item) {

                    const agenda =
                        item.data;


                    const jam =
                        formatJamAgenda(
                            agenda
                        );


                    return `

                        <div
                            class="agenda-home-item">

                            <i
                                class="bi bi-calendar-event">
                            </i>

                            <span>

                                <strong>
                                    ${
                                        agenda.judul ||
                                        "Agenda Desa"
                                    }
                                </strong>

                                <br>

                                ${
                                    agenda.tanggal
                                }

                                ${
                                    jam
                                    ? " • " + jam
                                    : ""
                                }

                            </span>

                        </div>

                    `;

                }
            ).join("");


    } catch (error) {

        console.error(
            "ERROR AGENDA DASHBOARD:",
            error
        );


        el.innerHTML =
            "Agenda belum dapat dimuat.";

    }

}


/* ===========================================
   JALANKAN
=========================================== */

tampilkanAgendaTerdekat();