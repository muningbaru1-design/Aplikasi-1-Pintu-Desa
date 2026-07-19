const list = document.getElementById("listPortal");

PORTAL_DESA.forEach(item => {

    list.innerHTML += `

    <div class="portal-card"
         onclick="window.open('${item.link}', '_blank')">

        <img src="${item.logo}" class="portal-logo">

        <div>

            <h4>${item.nama}</h4>

            <p>${item.kategori}</p>

        </div>

    </div>

    `;

});