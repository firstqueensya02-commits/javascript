const prompt = require ("prompt-sync")({sigint: true});

let angka = prompt("masukkan angka bebas (1-100) : ")

if (angka % 7 === 0) {
    console.log("Selamat anda beruntung!")
}else {
    console.log("Anda belum beruntung...")
}