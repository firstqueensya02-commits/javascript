const prompt = require('prompt-sync')({sigint: true});
let hasil = "";
for(let i = 1; i <= 4; i++){
    hasil += i + " +" + " ";
}

console.log(hasil + "5" + " = 15")