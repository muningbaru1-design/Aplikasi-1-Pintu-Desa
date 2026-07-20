/* =========================================
   DATA AKUN PENGGUNA
========================================= */

const USERS = [

    {
        username: "admin",
        password: "123456",
        nama: "Administrator Desa"
    },

    {
        username: "sekdes",
        password: "123456",
        nama: "Sekretaris Desa"
    }

];


/* =========================================
   FUNGSI LOGIN
========================================= */

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();


    if (username === "" || password === "") {

        alert("Silakan isi username dan password!");

        return;

    }


    const user = USERS.find(

        akun =>

        akun.username === username &&

        akun.password === password

    );


    if (user) {

        // Simpan sesi login

        sessionStorage.setItem(

            "userLogin",

            JSON.stringify(user)

        );


        // Masuk ke dashboard

        window.location.href = "dashboard.html";


    } else {

        alert("Username atau password salah!");

    }

}


/* =========================================
   MASUK SEBAGAI TAMU
========================================= */

function masukSebagaiTamu() {

    sessionStorage.setItem(

        "userLogin",

        JSON.stringify({

            username: "tamu",

            nama: "Tamu"

        })

    );


    window.location.href = "dashboard.html";

}