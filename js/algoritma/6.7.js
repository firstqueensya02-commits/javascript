function hitungUpahMingguan(jumlahJamKerja) {
  const upahNormal = 2000;
  const upahLembur = 3000;
  const batasJam = 48;

  if (jumlahJamKerja > batasJam) {
    return (batasJam * upahNormal) +
           ((jumlahJamKerja - batasJam) * upahLembur);
  }

  return jumlahJamKerja * upahNormal;
}

console.log(hitungUpahMingguan(40));
console.log(hitungUpahMingguan(48));
console.log(hitungUpahMingguan(50));