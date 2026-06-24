function gameMengingatAngka(level) 
{
    let jumlahAngka = 3 + level; 
    let polaRahasia = [];

    for (let i = 0; i < jumlahAngka; i++) {
        let angkaAcak = Math.floor(Math.random() * 9) + 1;
        polaRahasia.push(angkaAcak);
    }

    console.log("=========================================");
    console.log(`GAME MEMORI ANGKA - LEVEL ${level}`);
    console.log("=========================================");
    console.log(`INGAT ANGKA INI: ${polaRahasia.join(" ")}`);
    console.log("-----------------------------------------");
    console.log("(Bayangkan angka di atas menghilang...)\n");

    let tebakanPemain = [...polaRahasia]; 

    console.log(`Tebakan kamu : ${tebakanPemain.join(" ")}`);

    let cocok = true;
    for (let i = 0; i < polaRahasia.length; i++) {
        if (polaRahasia[i] !== tebakanPemain[i]) {
            cocok = false;
            break;
        }
    }

    if (cocok) {
        console.log("LUAR BIASA! Ingatanmu tajam. Kamu BERHASIL lolos!");
    } else {
        console.log("Sayang sekali, tebakanmu salah. Tetap semangat berlatih!");
        console.log(`Pola yang benar adalah: ${polaRahasia.join(" ")}`);
    }
    console.log("=========================================\n");
}

gameMengingatAngka(1);
gameMengingatAngka(3);