const prompt = require('prompt-sync')({sigint: true});

let jumlah = 0;
for (let i = 1; i <= 5; i++){
    jumlah += Number(prompt("Masukkan angka: "))
}
console.log("Jumlah: " + jumlah);
console.log("Rata-rata: " + jumlah/5);