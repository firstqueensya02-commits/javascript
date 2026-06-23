const prompt = require('prompt-sync')({sigint: true});
let hasil = "";
for(let i = 2; i <= 8; i += 2){
    hasil += i + " +" + " ";
}

console.log(hasil + "10" + " = 30");