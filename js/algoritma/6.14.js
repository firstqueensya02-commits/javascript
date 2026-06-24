/**
 * Fungsi untuk mengubah angka bulat menjadi teks tulisan kata
 * @param {number} angka
 * @returns {string}
 */
function konversiAngkaKeTeks(angka) {
  switch (angka) {
    case 1:
      return "satu";
    case 2:
      return "dua";
    case 3:
      return "tiga";
    case 4:
      return "empat";
    default:
      return "Angka yang dimasukkan salah";
  }
}