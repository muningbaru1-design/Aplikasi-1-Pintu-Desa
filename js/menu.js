/* ===========================================
   MEMBUAT GRID MENU OTOMATIS
=========================================== */

const grid = document.getElementById("gridMenu");

gridMenu.forEach(menu => {

grid.innerHTML += `

<div class="grid-item" onclick="window.location.href='${menu.link}'">

<i class="bi ${menu.icon}"
style="color:${menu.warna};"></i>

<h6>${menu.nama}</h6>

</div>

`;

});