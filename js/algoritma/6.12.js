function hitungGajiMingguan(nama, golongan, jamKerja) 
{
    let upahPerJam = 0;
    switch (golongan.toUpperCase()) {
        case 'A':
            upahPerJam = 4000;
            break;
        case 'B':
            upahPerJam = 5000;
            break;
        case 'C':
            upahPerJam = 6000;
            break;
        case 'D':
            upahPerJam = 7500;
            break;
        default:
            console.log("Golongan tidak valid!");
            return;
    }

    const JAM_NORMAL = 48;
    const UPAH_LEMBUR_PER_JAM = 3000;

    let jamNormal = 0;
    let jamLembur = 0;

    if (jamKerja > JAM_NORMAL) {
        jamNormal = JAM_NORMAL;
        jamLembur = jamKerja - JAM_NORMAL;
    } else {
        jamNormal = jamKerja;
        jamLembur = 0;
    }

    let gajiPokok = jamNormal * upahPerJam;
    let gajiLembur = jamLembur * UPAH_LEMBUR_PER_JAM;
    let totalGaji = gajiPokok + gajiLembur;

    console.log(`=== Rincian Gaji Mingguan ===`);
    console.log(`Nama Karyawan : ${nama}`);
    console.log(`Golongan      : ${golongan.toUpperCase()}`);
    console.log(`Total Jam Kerja: ${jamKerja} jam`);
    console.log(`Gaji Pokok    : Rp ${gajiPokok.toLocaleString('id-ID')}`);
    console.log(`Gaji Lembur   : Rp ${gajiLembur.toLocaleString('id-ID')}`);
    console.log(`-----------------------------`);
    console.log(`TOTAL GAJI    : Rp ${totalGaji.toLocaleString('id-ID')}\n`);
}

hitungGajiMingguan("Budi", "A", 52);

hitungGajiMingguan("Siti", "C", 40);