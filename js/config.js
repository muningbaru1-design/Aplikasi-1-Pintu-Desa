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
}

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
}

],



/*==========================================================
    SEKRETARIS DESA
==========================================================*/

sekretariat:[

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
}
],



/*==========================================================
    KAUR KEUANGAN
cover:"../assets/cover/D4.jpg",
tipe:"Spreadsheet",
link:"https://docs.google.com/spreadsheets/d/10IXauBC-bHfpesPpnwkI4wq04bgwWib-/edit?usp=drive_link&ouid=117950247010387838158&rtpof=true&sd=true"
}
],



/*==========================================================
    KAUR KEUANGAN
==========================================================*/

keuangan:[

],



/*==========================================================
    KEPALA DESA
==========================================================*/

kades:[

]

};