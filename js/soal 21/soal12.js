const prompt = require ("prompt-sync") ({sigint : true});

let r = prompt ("masukkan jari-jari : ")
let volume = (4/3) * 3.14 * r * r * r
let luasPermukaan = 4 * 3.14 * r * r

console.log(`
    Volume = ${volume.toFixed(2)}
    Luas Permukaan = ${luasPermukaan.toFixed(2)}`

)