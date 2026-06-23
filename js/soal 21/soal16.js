const prompt = require("prompt-sync")({sigint: true});

let rank = prompt("masukkan rank berapa kamu (1/2/3) : ")
if (rank === "1") {
    console.log("Selamat Anda Juara Utama")
}else if (rank === "2") {
    console.log("Selamat Anda Runner Up")
}else if (rank === "3") {
    console.log("Selamat Anda Juara ketiga")
}else {
    console.log("Inputan Anda Salah")
}