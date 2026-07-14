const menuB1 = [

{
nama:"Lihat Data",
icon:"bi-table",
warna:"#16A34A",
link:"administrasi/b1-penduduk.html"
},

{
nama:"Tambah Data",
icon:"bi-plus-circle-fill",
warna:"#2563EB",
link:"administrasi/b1-penduduk.html"
},

{
nama:"Cari Penduduk",
icon:"bi-search",
warna:"#F59E0B",
link:"administrasi/b1-penduduk.html"
},

{
nama:"Statistik",
icon:"bi-bar-chart-fill",
warna:"#8B5CF6",
link:"administrasi/b1-penduduk.html"
},

{
nama:"Cetak Buku",
icon:"bi-printer-fill",
warna:"#DC2626",
link:"administrasi/b1-penduduk.html"
},

{
nama:"Pengaturan",
icon:"bi-gear-fill",
warna:"#6B7280",
link:"administrasi/b1-penduduk.html"
}

];

const grid=document.getElementById("gridMenu");

menuB1.forEach(menu=>{

grid.innerHTML+=`

<div class="grid-item" onclick="window.location.href='${menu.link}'">

<i class="bi ${menu.icon}"
style="color:${menu.warna};"></i>

<h6>${menu.nama}</h6>

</div>

`;

});