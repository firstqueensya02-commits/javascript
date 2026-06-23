const prompt = require("prompt-sync") ({sigint: true})

let buku = prompt("masukkan judul buku : ")
let penerbit = prompt("masukkan penerbit : ")
let jumlahBuku = prompt("masukkan jumlah buku : ")
let tanggal = prompt("masukkan tanggal pembelian : ")

console.log(`
    Judul Buku \t\t: ${buku}
    Penerbit \t\t: ${penerbit}
    Jumlah Buku \t: ${jumlahBuku}
    Tanggal Pembelian \t: ${tanggal}`)
