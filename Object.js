// cara untuk membuat object pada javascript
// 1. Object Litteral
// PROBLEM : tidak efektif untuk object yang banyak
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

// 1 membuat object method terpisah 
// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     },
//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Energi berkurang`);
//     },
//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Energi bertambah`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa); // menggunakan object.create untuk mengotomatisasi pendaftaran method jika dibuat method yang baru
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     // 2 menginstansiasi object dengan method terpisah agar efisien dalam manajemen memori
//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;
//     return mahasiswa;
// }

// let fadil = Mahasiswa('Muhammad Fadil', 10);
// let doddy = Mahasiswa('Doddy', 20);

// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Energi berkurang`);
//     }
// }

// let fadil = new Mahasiswa('fadil',10);

// 4. Object Create


// 5. Protoypes
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan`);
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Energi berkurang`);
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Energi bertambah`);
// }

// let fadil = new Mahasiswa("Fadil", 10); 

// versi Class

// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }

//     main (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Energi berkurang`);
//     }

//     tidur (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Energi bertambah`);
//     }
// }

// let fadil = new Mahasiswa("Fadil", 10); 

let angka = [10,2,7,1,5];
let hasil = angka.map((e) => e*2);
