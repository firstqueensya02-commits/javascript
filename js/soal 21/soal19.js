const prompt = require("prompt-sync")({sigint: true});

let x = prompt("masukkan nilai x : ")
let y = prompt("masukkan nilai y : ")
let z = prompt("masukkan nilai z : ")
let total = Number(x) + Number(y) + Number(z)

let max = Math.max(x,y,z)
let min = Math.min(x,y,z)

console.log(`
    nilai terbesar \t: ${max}
    nilai terkecil \t: ${min}
    nilai keseluruhan \t: ${total} `)