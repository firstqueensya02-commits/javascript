const prompt = require ("prompt-sync")({sigint: true});

let rpl1 = prompt("Masukkan jumlah siswa X RPL 1 : ")
let rpl2 = prompt("Masukkan jumlah siswa X RPL 2 : ")
let tjkt1 = prompt("Masukkan jumlah siswa X TJKT 1 : ")
let tjkt2 = prompt("Masukkan jumlah siswa X TJKT 2 : ")
let total = Number(rpl1) + Number(rpl2) + Number(tjkt1) + Number(tjkt2)

console.log("Keseluruhan Siswa nya adalah : " + total)