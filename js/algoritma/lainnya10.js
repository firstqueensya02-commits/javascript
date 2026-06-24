function putarRodaKeputusan(tema, daftarPilihan) 
{
    if (!daftarPilihan || daftarPilihan.length < 2) {
        console.log("Masukkan minimal 2 pilihan agar seru!");
        return;
    }

    console.log(`=== RODA KEPUTUSAN: ${tema.toUpperCase()} ===`);
    console.log("Pilihan yang tersedia:");
    
    daftarPilihan.forEach((pilihan, indeks) => {
        console.log(`- [${indeks + 1}] ${pilihan}`);
    });
    
    console.log("---------------------------------------");
    console.log("Memutar roda keberuntungan... 🔄");
    
    const indeksAcak = Math.floor(Math.random() * daftarPilihan.length);
    const pilihanTerpilih = daftarPilihan[indeksAcak];

    console.log(`\nKEPUTUSAN TERBENTUK!`);
    console.log(`Kamu harus memilih: **${pilihanTerpilih}**`);
    console.log("=======================================\n");
}


const menuMakanan = ["Nasi Goreng", "Mie Ayam", "Bakso", "Sate Ayam", "Ayam Geprek"];
putarRodaKeputusan("Menu Makan Malam", menuMakanan);

const aktivitasWeekend = ["Belajar Coding", "Main Game", "Nonton Film", "Baca Buku", "Olahraga"];
putarRodaKeputusan("Aktivitas Liburan", aktivitasWeekend);