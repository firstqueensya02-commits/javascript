function mainkanTebakAngka() 
{
    const angkaRahasia = Math.floor(Math.random() * 100) + 1;

    const daftarTebakanPemain = [50, 75, 62, 65]; 
    
    console.log("=== GAME TEBAK ANGKA (1 - 100) ===");
    console.log("Program sudah memilih satu angka rahasia...\n");

    for (let i = 0; i < daftarTebakanPemain.length; i++) {
        let tebakan = daftarTebakanPemain[i];
        console.log(`Tebakan ke-${i + 1}: ${tebakan}`);

        if (tebakan === angkaRahasia) {
            console.log(`SELAMAT! Tebakanmu BENAR. Angka rahasianya adalah ${angkaRahasia}.`);
            return;
        } else if (tebakan < angkaRahasia) {
            console.log("Terlalu RENDAH! Coba angka yang lebih besar.");
        } else {
            console.log("Terlalu TINGGI! Coba angka yang lebih kecil.");
        }
        console.log("-----------------------------------------");
    }

    console.log(`\nGame Over! Kesempatan habis. Angka yang benar adalah: ${angkaRahasia}`);
}

mainkanTebakAngka();