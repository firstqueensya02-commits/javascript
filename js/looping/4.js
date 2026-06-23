const prompt = require('prompt-sync')({sigint: true});
let hasil = "";
for(let i = 1; i <= 5; i++){
    hasil += i + " ";
}

console.log(hasil + "= 15");