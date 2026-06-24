function bagiKelompok(daftarNama, jumlahKelompok) 
{
    if (!daftarNama || daftarNama.length === 0 || jumlahKelompok <= 0) {
        console.log("Masukkan daftar nama dan jumlah kelompok yang valid!");
        return;
    }

        let namaAcak = [...daftarNama];
    for (let i = namaAcak.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [namaAcak[i], namaAcak[j]] = [namaAcak[j], namaAcak[i]]; // Tukar posisi
    }

    let hasilKelompok = [];
    for (let i = 0; i < jumlahKelompok; i++) {
        hasilKelompok.push([]);
    }

    for (let i = 0; i < namaAcak.length; i++) {
        let indeksKelompok = i % jumlahKelompok;
        hasilKelompok[indeksKelompok].push(namaAcak[i]);
    }

    console.log("========================================");
    console.log(`🎉 HASIL PEMBAGIAN ${jumlahKelompok} KELOMPOK ACAK 🎉`);
    console.log("========================================");
    
    hasilKelompok.forEach((kelompok, indeks) => {
        console.log(`Kelompok ${indeks + 1}: ${kelompok.join(", ")}`);
    });
    
    console.log("========================================\n");
}


const temanKelas = ["Andi", "Budi", "Chandra", "Dewa", "Eka", "Fani", "Gita", "Hana", "Indra", "Jaka"];

bagiKelompok(temanKelas, 3);