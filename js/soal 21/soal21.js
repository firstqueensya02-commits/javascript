const prompt = require("prompt-sync")({sigint: true});

let nilai = prompt("masukkan nilai rentang (0-100) : ")

if (nilai >= 90) {
    console.log("Grade A")

}else if (nilai >=80) {
    console.log("Grade B")

}else if (nilai >=70 ) {
    console.log("Grade C") 

}else if (nilai >=60 ) {
    console.log("Grade D")
    
}else {
    console.log("Grade E")
}