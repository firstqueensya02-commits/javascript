function mainkanSuit(pilihanPemain) 
{
    const pilihanGame = ["GUNTING", "BATU", "KERTAS"];
    
    pilihanPemain = pilihanPemain.toUpperCase();

    if (!pilihanGame.includes(pilihanPemain)) {
        console.log("Pilihan tidak valid! Pilih antara: Gunting, Batu, atau Kertas.");
        return;
    }

    const indeksAcak = Math.floor(Math.random() * pilihanGame.length);
    const pilihanKomputer = pilihanGame[indeksAcak];

    console.log(`=== GAME GUNTING BATU KERTAS ===`);
    console.log(`Kamu memilih     : ${pilihanPemain}`);
    console.log(`Komputer memilih : ${pilihanKomputer}`);
    console.log(`--------------------------------`);

    if (pilihanPemain === pilihanKomputer) {
        console.log("Hasil: SERI! Wah, tarikannya sama.");
    } else if (
        (pilihanPemain === "BATU" && pilihanKomputer === "GUNTING") ||
        (pilihanPemain === "GUNTING" && pilihanKomputer === "KERTAS") ||
        (pilihanPemain === "KERTAS" && pilihanKomputer === "BATU")
    ) {
        console.log("Hasil: KAMU MENANG! Selamat!");
    } else {
        console.log("Hasil: KOMPUTER MENANG! Coba lagi ya.");
    }
    console.log(`================================\n`);
}


mainkanSuit("batu");
mainkanSuit("gunting");