function calculateTax(){
    const ptkp = document.getElementById('ptkp').value;
    const income = document.getElementById('income').value;
    const tunjangan = document.getElementById('tunjangan').value;
    const bonus = document.getElementById('bonus').value;
    const bruto = (parseFloat(income) + parseFloat(tunjangan) + parseFloat(bonus)) * 12;
    const iuran = bruto * 0.02;
    const bpjs = bruto * 0.02;
    let biayaJabatan = bruto * 0.05;
    if (biayaJabatan > 6000000) {
        biayaJabatan = 500000;
    }
    const neto = bruto - biayaJabatan;
    let pkp = 0;
        if (ptkp == "TK/0"){
            pkp = neto - 54000000;
        } else if (ptkp == "TK/1"){
            pkp = neto - 58500000;
        } else if (ptkp == "TK/2"){
            pkp = neto - 63000000;
        } else if (ptkp == "TK/3"){
            pkp = neto - 67500000;
        } else if (ptkp == "K/0"){
            pkp = neto - 58500000;
        } else if (ptkp == "K/1"){
            pkp = neto - 63000000;
        } else if (ptkp == "K/2"){
            pkp = neto - 67500000;
        } else if (ptkp == "K/3"){
            pkp = neto - 72000000;
        } else if (ptkp == "K/I/0"){
            pkp = neto - 112500000;
        } else if (ptkp == "K/I/1"){
            pkp = neto - 117000000;
        } else if (ptkp == "K/I/2"){
            pkp = neto - 121500000;
        } else if (ptkp == "K/I/3"){
            pkp = neto - 126000000;
        }
    
    let tarif = 0;
    if (pkp <= 60000000){
        tarif = 0.05;
    }
    else if (pkp > 60000000 <= 250000000){
        tarif = 0.15;
    }
    else if (pkp > 250000000 <= 500000000){
        tarif = 0.25;
    }
    else if (pkp > 500000000 <= 5000000000){
        tarif = 0.30;
    }
    else if (pkp > 5000000000){
        tarif = 0.35;
    }
    let pph = pkp * tarif;

    let formangka = new Intl.NumberFormat('id-ID');

    console.log("income: " + income);
    console.log("tunjangan: " + tunjangan);
    console.log("bonus: " + bonus);
    console.log("bruto: " + bruto);
    console.log("biaya jabatan: " + biayaJabatan);
    console.log("neto: " + neto);
    console.log("pkp: " + pkp);
    console.log("tarif: " + tarif);

    document.getElementById('result').innerText = "Pajak yang harus dibayar: Rp " + formangka.format(pph) + " dalam setahun";
}