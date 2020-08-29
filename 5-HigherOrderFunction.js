/* Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value*/
// dalam javascript sebuah function disebut dengan First Class Function
// karena inti dari javascript adalah function
// Javascript memperlakukan function sebagai object


// contoh 1 high order function
// function kerjakanTugas(matakuliah, selesai) {
//     console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
//     selesai();
// }

// function selesai(){
//     alert(`Selesai mnegerjakan tugas!`);
// }

// kerjakanTugas('Pemograman Web', selesai)

// function yang memiliki sebuah argumen dengan nilai function disebut higher order function & function yang menjadi argumen sebuah function disebut callback

// contoh 2 high order function
// setTimeout(() => {
//     console.log('Hello World');
// }, 1000);

// contoh 3 high order function
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         return `Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan`;
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatPagi('fadil'));

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }

// repeat(10, console.log);

// Contoh Higher order Function
// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//        newAngka.push(angka[i])
//     }
// }

// console.log(newAngka);

// filter
// const newAngka = angka.filter(value => value >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan dua
// const newAngka = angka.map(value => value * 2);
// console.log(newAngka);

// reduce
// menjumlahkan seluruh array
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(newAngka);

// Method Chaining
// Cari angka > 5
// kalika 3
// jumlahkan
const hasil = angka
.filter(value => value > 5)
.map(value => value * 3)
.reduce((acc, cur) => acc + cur, 0);
console.log(hasil);