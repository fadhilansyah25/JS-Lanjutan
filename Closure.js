// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = "Fadil";

// creation phase pada global scope
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello());

// var nama = "Fadil";
// var umur = 23;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments 
// hoisting

// var nama = 'Fadil Ardiansyah';
// var username = '@fadhilansyah25';

// function cetakURL() {
//     var instagramlURL = 'http://instagram/';
//     return instagramlURL + username;
// }

// console.log(cetakURL('@alifamel', '@fikrisyahrozie'));


// function a() {
//     console.log(`ini a`);

//     function b() {
//         console.log(`ini b`);

//         function c() {
//             console.log(`ini c`);
//         }

//         c();
//     }

//     b();
// }

// a();

// latihan hoisting dan scope
// function satu() {
//     var nama = 'Fadil';
//     console.log(nama);  
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'amel';
// satu();
// dua('fikri');
// console.log(nama);

// 2.1 Clousures
// function init() {
//     // let nama = 'Fadilansyah25';
//     return function tampilNama(nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Fadil');
// panggilNama('Fikri');

// alasan menggunakan closures
// 1. untuk membuat function factories
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatPagi);

// 2. untuk membuat seolah-olah private method
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

// kata kunci : lexical scopes, clousures, immediately invoked function expression