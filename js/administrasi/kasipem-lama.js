const menuKasipem = [

{
nama:"B1\nData Induk Penduduk",
icon:"bi-people-fill",
warna:"#16A34A",
link:"administrasi/b1-penduduk.html"
},

{
nama:"B2\nMutasi Penduduk",
icon:"bi-arrow-left-right",
warna:"#2563EB",
link:"administrasi/b2-mutasi.html"
},

{
nama:"B3\nRekapitulasi Penduduk",
icon:"bi-bar-chart-fill",
warna:"#F59E0B",
link:"administrasi/b3-rekap.html"
},

{
nama:"B4\nPenduduk Sementara",
icon:"bi-house-door-fill",
warna:"#8B5CF6",
link:"administrasi/b4-sementara.html"
},

{
nama:"B5\nData KTP & KK",
icon:"bi-person-vcard-fill",
warna:"#DC2626",
link:"administrasi/b5-ktpkk.html"
}

];

const grid=document.getElementById("gridMenu");

menuKasipem.forEach(menu=>{

grid.innerHTML+=`

<div class="grid-item" onclick="window.location.href='${menu.link}'">

<i class="bi ${menu.icon}"
style="color:${menu.warna};"></i>

<h6 style="white-space:pre-line">${menu.nama}</h6>

</div>

`;

});