/*==========================================================
    APLIKASI 1 PINTU DESA MUNING BARU
==========================================================*/

/*==========================================================
    DATA KATEGORI
==========================================================*/

const KATEGORI = {

penduduk:{
judul:"Kasi Pemerintahan",
subjudul:"Administrasi Penduduk",
rak:"📚 Rak Buku Administrasi Penduduk"
},

pembangunan:{
judul:"Kasi Kesejahteraan & Pembangunan",
subjudul:"Administrasi Pembangunan",
rak:"📚 Rak Buku Administrasi Pembangunan"
},

sekretariat:{
judul:"Sekretaris Desa",
subjudul:"Administrasi Sekretariat",
rak:"📚 Rak Buku Sekretariat"
},

umum:{
judul:"Kaur Tata Usaha & Umum",
subjudul:"Administrasi Umum",
rak:"📚 Rak Buku Administrasi Umum"
},

keuangan:{
judul:"Kaur Keuangan",
subjudul:"Administrasi Keuangan",
rak:"📚 Rak Buku Administrasi Keuangan"
},

kades:{
judul:"Kepala Desa",
subjudul:"Administrasi Kepala Desa",
rak:"📚 Rak Buku Kepala Desa"
},

produkhukum:{
    judul:"Produk Hukum Desa",
    subjudul:"Peraturan dan Keputusan Desa",
    rak:"⚖️ Rak Produk Hukum Desa"
},

};


/*==========================================================
    DATA MENU BUKU
==========================================================*/

const MENU = {

/*==========================================================
    KASI PEMERINTAHAN
==========================================================*/

penduduk:[

{
kode:"B1",
nama:"Buku Induk Penduduk",
cover:"../assets/cover/MODEL-B1.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/11T-xm8oUMnGIbnv-FM2hags1S9WLGHqJ/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"B2",
nama:"Buku Mutasi Penduduk",
cover:"../assets/cover/MODEL-B2.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10a5pGayUSR44w80V169nHrRDP5mTDobY/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"B3",
nama:"Rekapitulasi Penduduk",
cover:"../assets/cover/MODEL-B3.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/1bFNgZcXoG7B-g9PVzfZnHQa-wMF8SCAj/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"B4",
nama:"Penduduk Sementara",
cover:"../assets/cover/MODEL-B4.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10QIgO9nb36SP5C72UbDMAGuvYXi-Aw_6/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"B5",
nama:"Data KTP dan KK",
cover:"../assets/cover/MODEL-B5.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/12Fm2bqU_wZ3VEDO957eTYeoT4dyg69XG/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"+",
nama:"Arsip Prodeskel",
cover:"../assets/cover/cover-buku.jpg",
tipe:"folder",
link:"https://drive.google.com/drive/folders/1KVnCQTrpYuds0BbEuo6soDZWrnwg9Hqt?usp=sharing"
},

{
kode:"+",
nama:"Arsip IDM",
cover:"../assets/cover/cover-buku.jpg",
tipe:"folder",
link:"https://drive.google.com/drive/folders/1sOVt5gTmfNUM5USyrfAPE3be053t3R0k?usp=drive_link"
},

{
kode:"+",
nama:"Data Bantu Mutasi",
cover:"../assets/cover/cover-buku.jpg",
tipe:"folder",
link:"https://drive.google.com/drive/folders/1qa9sDvnDR9hn-F7_PVU6v9juUAtBA8p9?usp=drive_link"
},

{
kode:"+",
nama:"Berkas Tapal Batas",
cover:"../assets/cover/cover-buku.jpg",
tipe:"folder",
link:"https://drive.google.com/drive/folders/1JI483J5EqGTNiH3Ml6v1Lp-3UQVzhkhZ?usp=drive_link"
}

],



/*==========================================================
    KASI KESEJAHTERAAN & PEMBANGUNAN
==========================================================*/

pembangunan:[

{
kode:"D1",
nama:"Buku Rencana Kerja Pembangunan",
cover:"../assets/cover/MODEL-D1.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10KoPdMPDWYgLl6o-z4YCvNkB0ngxwRvf/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"D2",
nama:"Buku Kegiatan Pembangunan",
cover:"../assets/cover/D2.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/11MYI0LcYcr6uQN6Yq1e_M5NrSnuSKn-T/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"D3",
nama:"Buku Inventaris Hasil Pembangunan",
cover:"../assets/cover/D3.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10JTenyrVrQDOOxzBY7qtTK5_zkPXaTt_/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"D4",
nama:"Buku Kader Pendamping dan Pemberdayaan Masyarakat",
cover:"../assets/cover/D4.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10IXauBC-bHfpesPpnwkI4wq04bgwWib-/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"+",
nama:"Daftar Rekap usulan Puskesos Muning Baru",
cover:"../assets/cover/cover-buku.jpg",
tipe:"folder",
link:"https://docs.google.com/spreadsheets/d/1XqvXCb9jtXKxvHFCvcIWk2-hEfc0Qd6ufUNtH1WrAks/edit"
},

{
kode:"+",
nama:"Data Penerima Bansos",
cover:"../assets/cover/cover-buku.jpg",
tipe:"folder",
link:"https://docs.google.com/spreadsheets/d/1SvbdpvKH9RzGoMbNyoP25wYRkY1m8keK/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
}

],



/*==========================================================
    SEKRETARIS DESA
==========================================================*/

sekretariat:[
{
kode:"S1",
nama:"DOKUMEN MUSRENBABGDES",
cover:"../assets/cover/musrenbang.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1UVZvcw-gbt-eeuFSh0_jJsECCZn_rpVU?usp=sharing"
},

],



/*==========================================================
    KAUR TATA USAHA & UMUM
==========================================================*/

umum:[
{
kode:"A1a",
nama:"BUKU PERATURAN DESA",
cover:"../assets/cover/MODEL-A1a.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/1BzS8Gcy_9gpGrow7P05bKM63bSE7M5o7/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A1b",
nama:"BUKU PERATURAN KEPALA DESA",
cover:"../assets/cover/MODEL-A1b.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/1wmtJXU-QAkUkb_OOUZu-oMxjg6iFt5EL/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A1c",
nama:"BUKU PERATURAN DI DESA",
cover:"../assets/cover/MODEL-A1c.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/116NgDOvaruZ245KyzPmJnW_Xc2EQbema/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A1d",
nama:"BUKU PERATURAN KEPALA DESA",
cover:"../assets/cover/MODEL-A1d.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/1xQg-8tf2Qu2jHptFsjcdYr98wE5rFPBA/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A2",
nama:"BUKU KEPUTUSAN KEPALA DESA",
cover:"../assets/cover/MODEL-A2.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/12_0R7Wqf98kS5e2SYCzN0YO121ImlWFJ/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A3",
nama:"BUKU INVENTARIS DESA",
cover:"../assets/cover/MODEL-A3.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/1GNGnkTEtfhx33c5zO6n6-KL1sYVq5Nl-/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A4",
nama:"BUKU APARAT PEMERINTAH DESA",
cover:"../assets/cover/MODEL-A4.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10sgzX4wHp9nGjfsCC1qeLcobzoDuL3G3/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A5",
nama:"BUKU TANAH KAS DESA",
cover:"../assets/cover/MODEL-A5.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10rEWWnwwvwUoanuq_F01yflWRwjUckME/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A6",
nama:"BUKU TANAH DI DESA",
cover:"../assets/cover/MODEL-A6.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10mjtKEEccLtbJ0jaxVa2G1g92YrWB_Pr/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A7",
nama:"BUKU AGENDA",
cover:"../assets/cover/MODEL-A7.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10mAYdccxNI3llAyX5WlYNnFzqzO1g07a/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A8",
nama:"BUKU EXSPEDESI",
cover:"../assets/cover/MODEL-A8.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10lKbPpmYehoII3PR4bKeDJVMPIVnwjGU/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
},

{
kode:"A9",
nama:"BUKU LEMBARAN DESA DAN BERITA DESA",
cover:"../assets/cover/MODEL-A9.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/1a_8diVWADY8MzGRuglK1PmV-Zn7BZ-oF/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
}
],


/*==========================================================
    KAUR KEUANGAN
==========================================================*/

keuangan:[
{
kode:"C1",
nama:"BUKU APBDes",
cover:"../assets/cover/C1.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1U0wiAAUwjs3ZjQor4QAWv-nkaIa3t9bO?usp=drive_link"
},

{
kode:"C2",
nama:"BUKU RENCANA ANGGARAN BIAYA",
cover:"../assets/cover/C2.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1U2rPVp_M7F25z1Iuq2k4ADbUC5JtThmZ?usp=drive_link"
},

{
kode:"C3",
nama:"BUKU KAS PEMBANTU KEGIATAN",
cover:"../assets/cover/C3.jpg",
tipe:"Folder",
link:"belum  tersedia"
},

{
kode:"C4",
nama:"BUKU KAS UMUM",
cover:"../assets/cover/C4.jpg",
tipe:"Folder",
link:"belum  tersedia"
},

{
kode:"C5",
nama:"BUKU KAS PEMBANTU",
cover:"../assets/cover/C5.jpg",
tipe:"Folder",
link:"belum  tersedia"
},

{
kode:"C5a",
nama:"BUKU KAS PEMBANTU PAJAK",
cover:"../assets/cover/C5.jpg",
tipe:"Folder",
link:"belum  tersedia"
},

{
kode:"C5b",
nama:"BUKU KAS PEMBANTU TUNAI",
cover:"../assets/cover/C5b.jpg",
tipe:"Folder",
link:"belum  tersedia"
},

{
kode:"C5c",
nama:"BUKU PEMBANTU BANK",
cover:"../assets/cover/C5c.jpg",
tipe:"Folder",
link:"belum  tersedia"
},

{
kode:"C6",
nama:"BUKU BANK DESA",
cover:"../assets/cover/C6.jpg",
tipe:"Folder",
link:"belum  tersedia"
}

],



/*==========================================================
    KEPALA DESA
==========================================================*/

kades:[

{
kode:"WEB1",
nama:"e-LHKPN KPK",
cover:"../assets/cover/lhkpn.jpg",
tipe:"Website",
link:"https://elhkpn.kpk.go.id/"
},

{
kode:"DOKUMNEN",
nama:"DOKUMEN e-LHKPN KADES",
cover:"../assets/cover/lhkpn-kdes.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1Nysa1dvxXrJOkKdJurgX4I_vWhPNG8tn"
},

{
kode:"WEB2",
nama:"JDIH Kabupaten HSS",
cover:"../assets/cover/jdihhss.jpg",
tipe:"Website",
link:"https://jdih.hulusungaiselatankab.go.id/"
},

{
kode:"WEB3",
nama:"JDIH Kemendagri",
cover:"../assets/cover/jdihkalsel.jpg",
tipe:"Website",
link:"https://jdih.kemendagri.go.id/"
},

{
kode:"WEB4",
nama:"JDIH Nasional",
cover:"../assets/cover/jdihpusatt.jpg",
tipe:"Website",
link:"https://jdihn.go.id/"
}

],

/*==========================================================
    PRODUK HUKUM DESA
==========================================================*/

produkhukum:[
{
kode:"RPJMDes",
nama:"DOKUMEN RPJMDes",
cover:"../assets/cover/rpjmdes.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1U-nd87KyUGaHq9iCjZXgp-jtOel-HxwL?usp=drive_link"
},

{
kode:"RKPDes",
nama:"DOKUMEN RKPDes",
cover:"../assets/cover/rkpdes.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1U01M4o3q-EM3J_nI_Z9VRTWfThgM-3t2?usp=drive_link"
},

{
kode:"APBDes",
nama:"DOKUMEN APBDes",
cover:"../assets/cover/apbdes.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1U0wiAAUwjs3ZjQor4QAWv-nkaIa3t9bO?usp=drive_link"
},

{
kode:"LAPORAN AKHIR TAHUN",
nama:"DOKUMEN LKPJ,LPPD,LKPPD,ILPD",
cover:"../assets/cover/lkpj.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1VhmKty9iL030i3m_ZqgvySPh_kGSsg2y?usp=drive_link"
},

{
kode:"REALIASASI",
nama:"PERDES REALIASASI APBDes",
cover:"../assets/cover/perdes-realisasi.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1W5oxzpgj9dCJFyQlv7FYoln0L2SAXicg?usp=drive_link"
},

{
kode:"REALIASASI",
nama:"LAPORAN REALIASASI APBDes",
cover:"../assets/cover/laporan-realisasi.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1U6x14Z1peRI_zZwfJP3ajyqPoCoFDdTK?usp=drive_link"
},

{
kode:"Perkades",
nama:"PERKADES APBDes",
cover:"../assets/cover/perkades-apbdes.jpg",
tipe:"Folder",
link:"https://drive.google.com/drive/folders/1U2rPVp_M7F25z1Iuq2k4ADbUC5JtThmZ?usp=sharing"
},

{
kode:"PUNGUTAN",
nama:"PERDES PUNGUTAN DESA",
cover:"../assets/cover/perdes-pungutan.jpg",
tipe:"Folder",
link:"https://drive.google.com/file/d/1m8L_WGdS0PLZ0tk4vezEkernSk68CngO/view?usp=sharing"
}

]

};


/*==========================================================
    PORTAL APLIKASI
==========================================================*/

const PORTAL = {

penduduk:[

{
nama:"Prodeskel",
icon:"bi-people-fill",
link:"https://prodeskel.binapemdes.kemendagri.go.id/mpublik/"
},

{
nama:"Silanting",
icon:"bi-people-fill",
link:"https://silanting.hulusungaiselatankab.go.id/login"
},

{
nama:"Jaga Desa",
icon:"bi-house",
link:"https://jagadesa.kejaksaan.go.id/login"
},

{
nama:"IDM",
icon:"bi-house",
link:"https://idm.kemendesa.go.id/login"
},

{
nama:"SID",
icon:"bi-house",
link:"https://sid.kemendesa.go.id/profile"
},

{
nama:"SDGs",
icon:"bi-house",
link:"https://dashboard-sdgs.kemendesa.go.id/login"
},

{
nama:"EDABU BPJS KESEHATAN",
icon:"bi-house",
link:"https://edabu.bpjs-kesehatan.go.id/Edabu/Home/Login"
},

{
nama:"DAFTAR BPJS SEMESTA",
icon:"bi-house",
link:"https://docs.google.com/forms/d/e/1FAIpQLSeC5CH97VErHZQiwBWqSQq7dFIDh4Q73-z3-DWwVxp59VyI2A/viewform"
},

],

pembangunan:[

{
nama:"Pendaftaran Puskesos",
icon:"bi-building",
link:"https://docs.google.com/forms/d/e/1FAIpQLSfUwsKc4zKw9w_fuB5LQWpTySfxfKGQp1If9U6mZm1ZUYSVLw/viewform"
},

{
nama:"Hasil Rekap Puskesos",
icon:"bi-hammer",
link:"https://docs.google.com/spreadsheets/d/1XqvXCb9jtXKxvHFCvcIWk2-hEfc0Qd6ufUNtH1WrAks/edit"
}

],


sekretariat:[

{
nama:"SICANTIK MUSRENBANG",
icon:"bi-book",
link:"https://sicantik.hulusungaiselatankab.go.id/loginform"
},

{
nama:"LHKP KADES",
icon:"bi-book",
link:"https://elhkpn.kpk.go.id/portal/user/login"
},

{
nama:"SDGs ADMIN",
icon:"bi-book",
link:"https://dashboard-sdgs.kemendesa.go.id/login"
}

],


umum:[

{
nama:"No Surat Masuk dan Keluar",
icon:"bi-folder",
link:"https://www.appsheet.com/newshortcut/bc770d49-35ee-475b-990b-2b3b8741d236"
},

{
nama:"Sicantik Bumilku",
icon:"bi-folder",
link:"https://sicantikbumilku.hulusungaiselatankab.go.id/"
},

{
nama:"SIPADes",
icon:"bi-folder",
link:","
}

],

keuangan:[

{
nama:"Siskeudes",
icon:"bi-bank",
link:"https://siskeudes.kemendagri.go.id"
},

{
nama:"CMS Bank Kalsel",
icon:"bi-credit-card",
link:"https://cmsp.bankkalsel.co.id/cmsp"
},

{
nama:"Coretax DJP",
icon:"bi-receipt",
link:"https://coretaxdjp.pajak.go.id/identityproviderportal/account/login"
},

{
nama:"OM-SPAN",
icon:"bi-cash-stack",
link:"https://spanint.kemenkeu.go.id"
}

],

kades:[

{
nama:"LHKPN",
icon:"bi-shield-check",
link:"https://elhkpn.kpk.go.id/"
},

{
nama:"SIPD RI",
icon:"bi-bar-chart",
link:"https://sipd-ri.kemendagri.go.id"
}

],
};
/*==========================================================
    KUMPULAN SEMUA PORTAL DESA
==========================================================*/

const PORTAL_DESA = [

    {
        nama:"Siputra Desa",
        kategori:"Sistem Informasi Pelayanan Surat Terpadu Desa",
        logo:"../assets/logo/siputra-desa.jpg",
        link:"https://prodeskel.binapemdes.kemendagri.go.id/mpublik/"
    },

    {
        nama:"Sip bumilnya",
        kategori:"Sistem Persiapan Ibu Hamil dan Bayinya",
        logo:"../assets/logo/sipbumilnya.jpg",
        link:"https://muningbaru1-design.github.io/sipbumil-muningbaru/"
    },

    {
        nama:"Apphseet",
        kategori:"Nomor Surat Masuk dan Keluar",
        logo:"../assets/logo/apsheet.jpg",
        link:"https://www.appsheet.com/newshortcut/bc770d49-35ee-475b-990b-2b3b8741d236"
    },

    {
        nama:"SIMUNBAR",
        kategori:"Buku Tamu, Permintaan surat, Aduan Masyarakat",
        logo:"../assets/logo/logo-simunbar.jpg",
        link:"https://muningbaru1-design.github.io/pelayanan-desa/"
    },

    {
        nama:"Siskeudes",
        kategori:"Keuangan",
        logo:"../assets/logo/siskeudes.jpg",
        link:"https://siskeudes.kemendagri.go.id"
    },

    {
        nama:"Puskesos Muning Baru",
        kategori:"Pendataan Kesejahteraan Sosial",
        logo:"../assets/logo/puskesos.jpg",
        link:"https://docs.google.com/forms/d/e/1FAIpQLSfUwsKc4zKw9w_fuB5LQWpTySfxfKGQp1If9U6mZm1ZUYSVLw/viewform"
    },

    {
        nama:"CMS Bank Kalsel",
        kategori:"Keuangan",
        logo:"../assets/logo/cmsp-kades.jpg",
        link:"https://cmsp.bankkalsel.co.id/cmsp"
    },


    {
        nama:"Coretax DJP",
        kategori:"Keuangan",
        logo:"../assets/logo/coretax.jpg",
        link:"https://coretaxdjp.pajak.go.id"
    },

    {
        nama:"OM-SPAN",
        kategori:"Keuangan",
        logo:"../assets/logo/om-span.jpg",
        link:"https://spanint.kemenkeu.go.id"
    },

    {
        nama:"e-LHKPN",
        kategori:"Kepala Desa",
        logo:"../assets/logo/lhkpn.jpg",
        link:"https://elhkpn.kpk.go.id/portal/user/login"
    },

    {
        nama:"Prodeskel",
        kategori:"Kependudukan",
        logo:"../assets/logo/prodeskel.jpg",
        link:"https://prodeskel.binapemdes.kemendagri.go.id/mpublik/"
    },

    {
        nama:"Sicantik Musrenbang",
        kategori:"Pembangunan",
        logo:"../assets/logo/sicantik-musrenbang.jpg",
        link:"https://sicantik.hulusungaiselatankab.go.id/loginform"
    },

    {
        nama:"Edabu BPJS Kesehatan",
        kategori:"Cek Data Peserta BPJS Kesehatan",
        logo:"../assets/logo/edabu.jpg",
        link:"https://edabu.bpjs-kesehatan.go.id/Edabu/Home/Login"
    },

    {
        nama:"UHC BPJS Semesta",
        kategori:"Pendaftaran Peserta BPJS Kesehatan",
        logo:"../assets/logo/BPJS.jpg",
        link:"https://docs.google.com/forms/d/e/1FAIpQLSeC5CH97VErHZQiwBWqSQq7dFIDh4Q73-z3-DWwVxp59VyI2A/viewform"
    },

    {
        nama:"JAGA DESA",
        kategori:"Pengawasan",
        logo:"../assets/logo/jaga-desa.jpg",
        link:"https://jagadesa.kejaksaan.go.id/login"
    },

    {
        nama:"SILANTING",
        kategori:"pelayanan Dinas Dukcapil HSS",
        logo:"../assets/logo/silanting.jpg",
        link:"https://silanting.hulusungaiselatankab.go.id/login"
    },

    {
        nama:"EHDW",
        kategori:"Pendataan Kesejahteraan Sosial",
        logo:"../assets/logo/EHDW.jpg",
        link:"https://ehdw.kemendesa.go.id/"
    },

    {
        nama:"IDM",
        kategori:"Indeks Desa Membangun",
        logo:"../assets/logo/idm.jpg",
        link:"https://idm.kemendesa.go.id/login"
    },

    {
        nama:"SDGs",
        kategori:"Program dan sasaran SDGs Desa",
        logo:"../assets/logo/SDGS.jpg",
        link:"https://dashboard-sdgs.kemendesa.go.id/login"
    },

    {
        nama:"Sicantik Bumilku",
        kategori:"Kesehatan",
        logo:"../assets/logo/sicantikbumilku.jpg",
        link:"https://sicantikbumilku.hulusungaiselatankab.go.id/"
    },


];
