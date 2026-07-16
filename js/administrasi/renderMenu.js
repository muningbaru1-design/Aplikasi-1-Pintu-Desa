function renderMenu(kategori, containerId){

const container=document.getElementById(containerId);

container.innerHTML="";

MENU[kategori].forEach(item=>{

const card=document.createElement("div");

card.className="buku";

card.innerHTML=`

<div class="cover">

<img src="${item.cover}" alt="${item.nama}">

<div class="overlay">

<button>

<i class="bi bi-box-arrow-up-right"></i>

Buka Buku

</button>

</div>

</div>

<h3>${item.kode}</h3>

<p>${item.nama}</p>

`;

card.onclick=()=>{

window.open(item.link,"_blank");

}

container.appendChild(card);

});

}