/**
 * Fungsi untuk menentukan indeks nilai mahasiswa
 * @param {number} nilaiUjian
 * @returns {string} 
 */
function tentukanIndeksNilai(nilaiUjian) 
{
  let indeksNilai;

  if (nilaiUjian >= 80) {
    indeksNilai = 'A';
  } else if (nilaiUjian >= 70) {
    indeksNilai = 'B';
  } else if (nilaiUjian >= 55) {
    indeksNilai = 'C';
  } else if (nilaiUjian >= 40) {
    indeksNilai = 'D';
  } else {
    indeksNilai = 'E';
  }

  return indeksNilai;
}

console.log("Nilai 85 -> Indeks:", tentukanIndeksNilai(85));
console.log("Nilai 72 -> Indeks:", tentukanIndeksNilai(72));
console.log("Nilai 60 -> Indeks:", tentukanIndeksNilai(60));
console.log("Nilai 45 -> Indeks:", tentukanIndeksNilai(45));
console.log("Nilai 30 -> Indeks:", tentukanIndeksNilai(30));