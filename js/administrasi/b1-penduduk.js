/************************************************
 * B1 BUKU INDUK PENDUDUK
 * Aplikasi 1 Pintu Desa Muning Baru
 ************************************************/

/*=========================================
  KONFIGURASI
=========================================*/

const API_URL =
"https://script.google.com/macros/s/AKfycbzD2NNjWH6eMD6IhDtBrqBguvh_WZm17UKBZ1ANPtP9__xDU98zWt6ZOSnGXxTNvWUo9g/exec";

const LIMIT = 50;

/*=========================================
  GLOBAL
=========================================*/

let currentPage = 1;
let totalPage = 1;

/*=========================================
  LOAD
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    loadDashboard();

    loadData(1);

});

/*=========================================
  AMBIL DATA
=========================================*/

async function loadData(page){

    try{

        const tableBody = document.getElementById("tableBody");

        tableBody.innerHTML = `
        <tr>
            <td colspan="22" style="text-align:center;padding:20px;">
                ⏳ Memuat data...
            </td>
        </tr>
        `;

        const response = await fetch(
            `${API_URL}?action=getB1&page=${page}&limit=${LIMIT}`
        );

        const result = await response.json();

        currentPage = result.page;
        totalPage = result.totalPage;

        tampilkanData(result.data);

        document.getElementById("jumlahData").innerHTML =
            `Total Penduduk : ${result.total}`;

        buatPagination();

    }catch(err){

        console.error(err);

        alert("Gagal mengambil data.");

    }

}
/*=========================================
  TAMPILKAN DATA
=========================================*/

function tampilkanData(data){

    const tableBody = document.getElementById("tableBody");

    let html = "";

    data.forEach((row,index)=>{

        html += `

<tr>

<td>${((currentPage-1)*LIMIT)+(index+1)}</td>

<td>${row["RW"]||""}</td>

<td>${row["RT"]||""}</td>

<td>${row["Dusun"]||""}</td>

<td>${row["Alamat"]||""}</td>

<td>${row["Kode Keluarga"]||""}</td>

<td>${row["Nama Kepala Keluarga"]||""}</td>

<td>${row["No."]||""}</td>

<td>${row["N I K"]||row["NIK"]||""}</td>

<td>${row["Nama Anggota Keluarga"]||""}</td>

<td>${row["Jenis Kelamin"]||""}</td>

<td>${row["Hubungan"]||""}</td>

<td>${row["Tempat Lahir"]||""}</td>

<td>${row["Tanggal Lahir"]||""}</td>

<td>${row["Usia"]||""}</td>

<td>${row["Status"]||""}</td>

<td>${row["Agama"]||""}</td>

<td>${row["GDarah"]||""}</td>

<td>${row["Kewarganegaraan"]||""}</td>

<td>${row["Etnis / Suku"]||""}</td>

<td>${row["Pendidikan"]||""}</td>

<td>${row["Pekerjaan"]||""}</td>

</tr>

`;

    });

    tableBody.innerHTML = html;

}
/*=========================================
  PAGINATION
=========================================*/

function buatPagination(){

    const div = document.getElementById("pagination");

    let html = "";

    html += `
    <button
        onclick="prevPage()"
        ${currentPage==1?"disabled":""}>
        ◀ Sebelumnya
    </button>
    `;

    html += `
    <span class="page-info">
        Halaman
        <b>${currentPage}</b>
        dari
        <b>${totalPage}</b>
    </span>
    `;

    html += `
    <button
        onclick="nextPage()"
        ${currentPage==totalPage?"disabled":""}>
        Berikutnya ▶
    </button>
    `;

    div.innerHTML = html;

}
function prevPage(){

    if(currentPage > 1){

        loadData(currentPage - 1);

    }

}

function nextPage(){

    if(currentPage < totalPage){

        loadData(currentPage + 1);

    }

}
//==============================
// REFRESH
//==============================

document.getElementById("btnRefresh").onclick = () => {

    loadData(currentPage);

};
//==============================
// EXPORT
//==============================

document.getElementById("btnExport").onclick=()=>{

    alert("Export Excel segera dibuat.");

}

//==============================
// CETAK
//==============================

document.getElementById("btnCetak").onclick=()=>{

    window.print();

}
/****************************************
 * PENCARIAN DATA
 ****************************************/

async function cariData(){

    const keyword = document
        .getElementById("txtCari")
        .value
        .trim();

    // Kalau kosong kembali ke halaman pertama
    if(keyword==""){

        loadData(1);

        return;

    }

    try{

        const response = await fetch(

            API_URL +

            "?action=searchB1&keyword=" +

            encodeURIComponent(keyword)

        );

        const data = await response.json();

        tampilkanData(data);

        document.getElementById("jumlahData").innerHTML =

            "Hasil Pencarian : " + data.length + " data";

        document.getElementById("pagination").innerHTML="";

    }

    catch(err){

        console.log(err);

        alert("Pencarian gagal");

    }

}
document
.getElementById("btnCari")
.onclick = cariData;
document
.getElementById("txtCari")
.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        cariData();

    }

});
document
.getElementById("btnRefresh")
.onclick=function(){

    document.getElementById("txtCari").value="";

    loadData(1);

}
/****************************************
 * MODAL TAMBAH DATA
 ****************************************/

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modalPenduduk");

    const btnTambah = document.getElementById("btnTambah");

    const btnClose = document.getElementById("closeModal");

    const btnBatal = document.getElementById("btnBatal");

    if(btnTambah){

        btnTambah.onclick = function(){

            modal.style.display = "flex";

        };

    }

    if(btnClose){

        btnClose.onclick = function(){

            modal.style.display = "none";

        };

    }

    if(btnBatal){

        btnBatal.onclick = function(){

            modal.style.display = "none";

        };

    }

    window.onclick = function(e){

        if(e.target==modal){

            modal.style.display="none";

        }

    };

});
const tabs=document.querySelectorAll(".tabBtn");

tabs.forEach(btn=>{

btn.onclick=function(){

document.querySelectorAll(".tabBtn").forEach(b=>b.classList.remove("active"));

document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active"));

this.classList.add("active");

document.getElementById(this.dataset.tab).classList.add("active");

}

});
async function simpanPenduduk(){

    const data={

        rw:document.getElementById("rw").value,

        rt:document.getElementById("rt").value,

        dusun:document.getElementById("dusun").value,

        alamat:document.getElementById("alamat").value,

        kk:document.getElementById("kk").value,

        kepala:document.getElementById("kepala").value,

        nik:document.getElementById("nik").value,

        nama:document.getElementById("nama").value,

        jk:document.getElementById("jk").value,

        hubungan:document.getElementById("hubungan").value,

        tempat:document.getElementById("tempat").value,

        tgl:document.getElementById("tgl").value,

        usia:document.getElementById("usia").value,

        status:document.getElementById("status").value,

        agama:document.getElementById("agama").value,

        darah:document.getElementById("darah").value,

        wn:document.getElementById("wn").value,

        suku:document.getElementById("suku").value,

        pendidikan:document.getElementById("pendidikan").value,

        pekerjaan:document.getElementById("pekerjaan").value

    };
    if(data.nik.length!=16){

    alert("NIK harus 16 digit");

    return;

}

if(data.kk.length!=16){

    alert("No KK harus 16 digit");

    return;

}

if(data.nama==""){

    alert("Nama belum diisi");

    return;

}

    try{

        const response=await fetch(API_URL+"?action=addB1",{

            method:"POST",

            body:JSON.stringify(data)

        });

        const result=await response.json();

        if(result.status){

            alert("Data berhasil disimpan.");

            document.getElementById("modalPenduduk").style.display="none";

            loadData(currentPage);

        }else{

            alert(result.message);

        }

    }catch(err){

        console.log(err);

        alert("Gagal menyimpan data.");

    }

}
document
.getElementById("btnSimpan")
.onclick=simpanPenduduk;
/****************************************
 * DASHBOARD
 ****************************************/

async function loadDashboard(){

    try{

        const response = await fetch(API_URL + "?action=dashboard");

        const data = await response.json();

        document.getElementById("totalPenduduk").textContent = data.total;

        document.getElementById("totalKK").textContent = data.kk;

        document.getElementById("laki").textContent = data.laki;

        document.getElementById("perempuan").textContent = data.perempuan;

    }catch(err){

        console.error("Dashboard :", err);

    }

}