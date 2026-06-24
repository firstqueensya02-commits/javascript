function hitungJumlahHari(bulan, tahun) {
    let jumlahHari;

    switch (bulan) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            jumlahHari = 31;
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            jumlahHari = 30;
            break;

        case 2:
            jumlahHari = ((tahun % 400 === 0) || (tahun % 4 === 0 && tahun % 100 !== 0)) ? 29 : 28;
            break;

        default:
            console.log("Bulan tidak valid");
            return;
    }

    console.log(jumlahHari);
}

hitungJumlahHari(8, 2026);
hitungJumlahHari(6, 2026);
hitungJumlahHari(2, 2024);
hitungJumlahHari(2, 2026);