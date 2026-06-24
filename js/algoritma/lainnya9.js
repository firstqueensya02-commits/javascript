function buatKarakterFantasi() 
{
    const kataDepan = ["Alaric", "Zephyr", "Thorgar", "Elysia", "Valerius", "Morwenna", "Kaelen"];
    const kataBelakang = ["Shadowbane", "Stormweaver", "Ironheart", "Lightbringer", "Frostborn", "Dragonrider"];
    
    const daftarFaksi = ["Klan Serigala Utara", "Penyihir Menara Langit", "Penjaga Hutan Abadi", "Prajurit Kerajaan Emas"];
    const daftarSenjata = ["Pedang Pusaka", "Tongkat Sihir Elemen", "Panah Cahaya", "Tombak Petir"];

    const nama1 = kataDepan[Math.floor(Math.random() * kataDepan.length)];
    const nama2 = kataBelakang[Math.floor(Math.random() * kataBelakang.length)];
    const faksi = daftarFaksi[Math.floor(Math.random() * daftarFaksi.length)];
    const senjata = daftarSenjata[Math.floor(Math.random() * daftarSenjata.length)];

    const poinKekuatan = Math.floor(Math.random() * 51) + 50;

    console.log("=========================================");
    console.log("  FANTASY CHARACTER GENERATOR  ");
    console.log("=========================================");
    console.log(`Nama Karakter : ${nama1} ${nama2}`);
    console.log(`Asal Faksi    : ${faksi}`);
    console.log(`Senjata Utama : ${senjata}`);
    console.log(`Poin Tempur   : ${poinKekuatan} / 100`);
    console.log("=========================================\n");
}

buatKarakterFantasi();
buatKarakterFantasi();