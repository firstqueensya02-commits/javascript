let a = 8.3
let c = parseFloat("3.2")
let tambah = a + c
let kurang = a - c
let kali = a * c 
let bagi = a / c
let persen = 8 % 3

console.log
(`8.3 + 3.2 = ${tambah} 
  8.3 - 3.2 = ${kurang.toFixed(1)}
  8.3 x 3.2 = ${kali.toFixed(2)}
  8.3 / 3.2 = ${bagi} 
  8 % 3 = ${persen}` )

document.write
(`8.3 + 3.2 = ${tambah} ${("<br>")}
  8.3 - 3.2 = ${kurang.toFixed(1)} ${("<br>")}
  8.3 x 3.2 = ${kali.toFixed(2)} ${("<br>")}
  8.3 / 3.2 = ${bagi} ${("<br>")}
  8 % 3 = ${persen} ${("<br>")}` )