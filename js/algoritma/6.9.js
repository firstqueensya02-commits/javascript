function cekJenisBilangan(bilangan) {
  if (bilangan > 0) {
    return "POSITIF";
  } else if (bilangan < 0) {
    return "NEGATIF";
  }
  return "NOL";
}

console.log(cekJenisBilangan(25));
console.log(cekJenisBilangan(-10));
console.log(cekJenisBilangan(0));