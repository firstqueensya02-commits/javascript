const prompt = require("prompt-sync")({sigint: true});

let harga = prompt("masukkan harga suatu makanan : ")
let pajak = Number(harga) * 10/100
let fee = Number(harga) * 5/100
let total = Number(harga) + pajak + fee

console.log(
    `Harga makanan \t\t: ${harga}
     Pajak \t\t: ${pajak.toFixed(2)}
     Fee \t\t: ${fee.toFixed(2)}
     Harga Bayar \t: ${total.toFixed(2)}`)