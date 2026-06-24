function dapatkanMotivasiHarian() 
{

    const daftarQuotes = [
        "Jangan takut salah, kesalahan adalah bukti bahwa kamu sedang mencoba.",
        "Mulai dari mana kamu berada. Gunakan apa yang kamu punya. Lakukan apa yang kamu bisa.",
        "Masa depanmu dibentuk oleh apa yang kamu lakukan hari ini, bukan besok.",
        "Fokus pada prosesnya, hasil terbaik akan mengikuti kerja kerasmu.",
        "Setiap pencapaian besar selalu dimulai dari keputusan untuk mencoba.",
        "Gagal itu urusan nanti. Yang terpenting, kita berani untuk melangkah dulu."
    ];

    const indeksAcak = Math.floor(Math.random() * daftarQuotes.length);

    const quoteHariIni = daftarQuotes[indeksAcak];

    console.log("=========================================");
    console.log("        MOTIVASI UNTUK HARI INI       ");
    console.log("=========================================");
    console.log(`"${quoteHariIni}"`);
    console.log("=========================================\n");
}

dapatkanMotivasiHarian();