function hitungKeuangan(nama, pemasukan, daftarPengeluaran) 
{
    let totalPengeluaran = 0;
    for (let pengeluaran of daftarPengeluaran) {
        totalPengeluaran += pengeluaran;
    }

    let sisaUang = pemasukan - totalPengeluaran;

    let persentaseHemat = (sisaUang / pemasukan) * 100;

    console.log(`=== LAPORAN KEUANGAN: ${nama.toUpperCase()} ===`);
    console.log(`Total Pemasukan  : Rp ${pemasukan.toLocaleString('id-ID')}`);
    console.log(`Total Pengeluaran: Rp ${totalPengeluaran.toLocaleString('id-ID')}`);
    console.log(`-------------------------------------------`);
    console.log(`Sisa Uang/Tabungan: Rp ${sisaUang.toLocaleString('id-ID')}`);
    console.log(`Persentase Hemat : ${persentaseHemat.toFixed(1)}%`);

    console.log(`-------------------------------------------`);
    if (persentaseHemat >= 30) {
        console.log("Status: Hebat! Manajemen keuanganmu sangat sehat.");
    } else if (persentaseHemat > 0 && persentaseHemat < 30) {
        console.log("Status: Cukup baik, tapi coba kurangi pengeluaran yang kurang penting.");
    } else {
        console.log("Status: Bahaya! Pengeluaranmu lebih besar atau sama dengan pemasukan.");
    }
    console.log("===========================================\n");
}


let pengeluaranBudi = [150000, 50000, 100000];
hitungKeuangan("Budi", 500000, pengeluaranBudi);

let pengeluaranSiti = [300000, 250000];
hitungKeuangan("Siti", 500000, pengeluaranSiti);