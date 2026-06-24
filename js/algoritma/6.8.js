function cekTahunKabisat(tahun) {
  if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
    return "Tahun kabisat";
  }
  return "Bukan tahun kabisat";
}

console.log(cekTahunKabisat(1996));
console.log(cekTahunKabisat(1900));
console.log(cekTahunKabisat(2000));
console.log(cekTahunKabisat(2002));