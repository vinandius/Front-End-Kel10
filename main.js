const butpph = document.getElementById('butpph');
const butpbb = document.getElementById('butpbb');
let boxpph = document.getElementById('boxpph');
let boxpbb = document.getElementById('boxpbb');

let slider = document.getElementById('slider');
let showingSlider = false;

function showSlider(i) {
    if(!showingSlider) {
        slider.style.transition = 'none';
        slider.style.transform = `translateX(${i}px)`;
        slider.offsetHeight;
        slider.style.transition = 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.7s ease';
        slider.style.opacity = '1';
        showingSlider = true;
    }
    else {
        slider.style.transform = `translateX(${i}px)`;
    }
}

boxpbb.style.visibility = 'hidden';
boxpbb.style.opacity = '0';
boxpph.style.visibility = 'visible';
boxpph.style.opacity = '1';
slider.style.borderRadius = '10px 0 0 10px';
butpph.style.color = '#ffffff';
butpbb.style.color = '#475569';
showSlider(0);

butpph.addEventListener('click', function() {
    boxpbb.style.visibility = 'hidden';
    boxpbb.style.opacity = '0';

    boxpph.style.visibility = 'visible';
    boxpph.style.opacity = '1';

    slider.style.borderRadius ='10px 0 0 10px';
    butpph.style.color = '#ffffff';
    butpbb.style.color = '#475569';
    showSlider(0);
})

butpbb.addEventListener('click', function() {
    boxpph.style.visibility = 'hidden';
    boxpph.style.opacity = '0';
    boxpbb.style.visibility = 'visible';
    boxpbb.style.opacity = '1';
    slider.style.borderRadius = '0 10px 10px 0';
    butpbb.style.color = '#ffffff';
    butpph.style.color = '#475569';
    showSlider(300);
})

function calculatePPh(){
    const ptkp = document.getElementById('ptkp').value;
    const income = parseFloat(document.getElementById('income').value);
    const tunjangan = parseFloat(document.getElementById('tunjangan').value);
    const bonus = parseFloat(document.getElementById('bonus').value);

    // Skenario jika error input terjadi, misalnya 
    // Jika pengguna tidak memasukkan nilai atau memasukkan nilai yang tidak valid.
    if (ptkp === "") {
        alert("Gagal: Silakan pilih status PTKP Anda terlebih dahulu!");
        return;
    }

    if (isNaN(income) || income < 0 || isNaN(tunjangan) || tunjangan < 0 || isNaN(bonus) || bonus < 0) {
        document.getElementById('result').innerText = "Silakan masukkan dengan nilai angka yang valid.";
        return;
    }

    // Baru mulai menghitung pajak berdasarkan input pengguna, jika semua input memenuhi syarat.

    const bruto = (income + tunjangan) * 12 + bonus;
    const iuran = bruto * 0.02;


    let biayaJabatan = bruto * 0.05;
    if (biayaJabatan > 6000000) {
        biayaJabatan = 6000000;
    }

    const neto = bruto - (biayaJabatan + iuran);
    const nilaiPTKP = {
        "TK/0": 54000000, "TK/1": 58500000, "TK/2": 63000000, "TK/3": 67500000,
        "K/0": 58500000,  "K/1": 63000000,  "K/2": 67500000,  "K/3": 72000000,
        "K/I/0": 112500000, "K/I/1": 117000000, "K/I/2": 121500000, "K/I/3": 126000000
    };

    let pkp = neto - nilaiPTKP[ptkp];
    if (pkp < 0) pkp = 0;
    
    let sisaPKP = pkp;
    let pph = 0;

    if (sisaPKP > 5000000000) {
        pph += (sisaPKP - 5000000000) * 0.35;
        sisaPKP = 5000000000;
    }
    // Lapisan 4 (30%)
    if (sisaPKP > 500000000) {
        pph += (sisaPKP - 500000000) * 0.30;
        sisaPKP = 500000000;
    }
    // Lapisan 3 (25%)
    if (sisaPKP > 250000000) {
        pph += (sisaPKP - 250000000) * 0.25;
        sisaPKP = 250000000;
    }
    // Lapisan 2 (15%)
    if (sisaPKP > 60000000) {
        pph += (sisaPKP - 60000000) * 0.15;
        sisaPKP = 60000000;
    }
    // Lapisan 1 (5%)
    if (sisaPKP > 0) {
        pph += sisaPKP * 0.05;
    }
    // Menampilkan hasil perhitungan pajak penghasilan (PPh) dalam format mata uang Indonesia
    let formangka = new Intl.NumberFormat('id-ID');
    document.getElementById('result').innerText = "Pajak yang harus dibayar: Rp " + formangka.format(pph) + " dalam setahun";
}

function calculatePBB() {
    
}