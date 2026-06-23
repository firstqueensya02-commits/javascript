const prompt = require("prompt-sync")({sigint: true});

let lagi;
do {
let angka = prompt("masukkan nilai rapor kamu : ")
if (angka >= 100 ){
    console.log("Nilai kamu sempurna!")
}else {
    console.log("belajar lagi ya...")
} lagi = prompt("mau coba isi lagi ga? (ya/tidak) ")
}while (lagi === "ya")