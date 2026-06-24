function tambahSatuDetik(waktuStr) {
    let [jam, menit, detik] = waktuStr.split(':').map(Number);

    detik++;

    if (detik === 60) {
        detik = 0;
        menit++;
    }

    if (menit === 60) {
        menit = 0;
        jam++;
    }

    if (jam === 24) {
        jam = 0;
    }

    jam = String(jam).padStart(2, '0');
    menit = String(menit).padStart(2, '0');
    detik = String(detik).padStart(2, '0');

    console.log(`${jam}:${menit}:${detik}`);
}

tambahSatuDetik("14:27:31");
tambahSatuDetik("15:36:59");
tambahSatuDetik("10:59:59");
tambahSatuDetik("23:59:59");
