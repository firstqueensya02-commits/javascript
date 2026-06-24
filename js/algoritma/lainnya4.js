function konversiSuhu(nilai, satuanAsal) 
{
    let celsius = 0;

    switch (satuanAsal.toUpperCase()) {
        case 'C':
            celsius = nilai;
            break;
        case 'F':
            celsius = (nilai - 32) * 5 / 9;
            break;
        case 'R':
            celsius = nilai * 5 / 4;
            break;
        case 'K':
            celsius = nilai - 273.15;
            break;
        default:
            console.log("Satuan asal tidak valid! Gunakan C, F, R, atau K.");
            return;
    }

    let fahrenheit = (celsius * 9 / 5) + 32;
    let reamur = celsius * 4 / 5;
    let kelvin = celsius + 273.15;

    console.log(`=== HASIL KONVERSI SUHU ===`);
    console.log(`Suhu Awal : ${nilai}°${satuanAsal.toUpperCase()}`);
    console.log(`---------------------------`);
    console.log(`Celsius    : ${celsius.toFixed(2)}°C`);
    console.log(`Fahrenheit : ${fahrenheit.toFixed(2)}°F`);
    console.log(`Reamur     : ${reamur.toFixed(2)}°R`);
    console.log(`Kelvin     : ${kelvin.toFixed(2)} K`);
    console.log(`===========================\n`);
}


konversiSuhu(100, 'C');

konversiSuhu(77, 'F');