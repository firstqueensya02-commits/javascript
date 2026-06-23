const prompt = require("prompt-sync")({sigint: true});

let kode = prompt("masukkan input 5 digit : ")
if (kode === "78821") {
    console.log("You are authentication")
}else {
    console.log("you have no access")
}