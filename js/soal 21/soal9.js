const prompt = require ("prompt-sync") ({sigint : true});

let p = prompt ("masukkan panjang : ")
let l = prompt ("masukkan lebar : ")
let luas = p * l
let keliling = 2 * (p+l)

console.log(`
    Luas = ${luas.toFixed(2)}
    Keliling = ${keliling.toFixed(2)}`)