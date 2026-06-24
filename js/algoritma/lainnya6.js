class Tugas 
{
    constructor(id, deskripsi) {
        this.id = id;
        this.deskripsi = deskripsi;
        this.selesai = false;
    }
}

class TodoList {
    constructor() {
        this.daftarTugas = [];
    }

    tambahTugas(deskripsi) {
        const idBaru = this.daftarTugas.length + 1;
        const tugasBaru = new Tugas(idBaru, deskripsi);
        this.daftarTugas.push(tugasBaru);
        console.log(`Berhasil menambahkan: "${deskripsi}"`);
    }

    selesaikanTugas(id) {
        const tugas = this.daftarTugas.find(t => t.id === id);
        if (tugas) {
            tugas.selesai = true;
            console.log(`Tugas ID ${id} ditandai sebagai SELESAI.`);
        } else {
            console.log(`Tugas dengan ID ${id} tidak ditemukan.`);
        }
    }

    tampilkanSemua() {
        console.log(`\n=== DAFTAR TUGAS KAMU ===`);
        if (this.daftarTugas.length === 0) {
            console.log("Belum ada tugas hari ini. Santai dulu!");
            return;
        }

        this.daftarTugas.forEach(tugas => {
            const status = tugas.selesai ? "[X]" : "[ ]";
            console.log(`${tugas.id}. ${status} ${tugas.deskripsi}`);
        });
        console.log(`=========================\n`);
    }
}


const listHariIni = new TodoList();

listHariIni.tambahTugas("Belajar JavaScript dasar");
listHariIni.tambahTugas("Mengerjakan tugas matematika sekolah");
listHariIni.tambahTugas("Olahraga sore / sepedaan");

listHariIni.tampilkanSemua();

listHariIni.selesaikanTugas(1);

listHariIni.tampilkanSemua();