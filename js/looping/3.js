const prompt = require('prompt-sync')({sigint: true});
for(let huruf = "A".charCodeAt(0); huruf <= "D".charCodeAt(0); huruf++){
    console.log(String.fromCharCode(huruf) + ". Cerdas");
}