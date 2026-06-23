const prompt = require('prompt-sync')({sigint: true});
let hasil = "";
for(let i = 1; i <= 3; i += 2){
    hasil += i + " +" + " ";
}

console.log(hasil + "5" + " = 9");