const prompt = require ('prompt-sync')({sigint: true});

const angka = Number(prompt("Masukkan angka: "));
for(let i = 1; i <= 5; i++){
    console.log(i + " x " + angka + " = " + i * angka);
}