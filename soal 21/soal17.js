const prompt = require("prompt-sync")({sigint: true});

let barang = prompt("masukkan harga barang : ")
let diskon;
let total;
if (barang >= 200000) {
    diskon = barang * (7.5/100)
    total = Number(barang) - diskon
    console.log(`Harga Barang \t: ${barang}
        Diskon \t: ${diskon}
        Total \t: ${total}`)
}else {
    console.log(barang)
}