// cara untuk membuat object pada javascript
// 1. Object Litteral
// let mahasiswa1 = {
//     nama: "Fadil Ardiansyah",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }
// }

// let mahasiswa2 = {
//     nama: "Doddy",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }
// }

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Energi berkurang`);
//     }
//     return mahasiswa;
// }

// let fadil = Mahasiswa('Muhammad Fadil', 10);
// let doddy = Mahasiswa('Doddy', 20);

// 3. Constructor Function
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Energi berkurang`);
    }
}

let fadil = new Mahasiswa('fadil',10);

// 4. Object Create