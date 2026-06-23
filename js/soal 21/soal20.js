const prompt = require ("prompt-sync")({sigint: true});

let huruf = prompt("masukkan huruf bebas (A-Z) : ")
if ("aiueo".includes(huruf)) {
    console.log("huruf vokal")
}else if ("bcdfghjklmnpqrstvwxyz".includes(huruf)) {
    console.log("huruf konsonan")
}else {
    console.log("ini bukan huruf!")
}