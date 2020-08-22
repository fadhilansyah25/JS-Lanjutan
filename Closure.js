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
function satu() {
    var nama = 'Fadil';
    console.log(nama);  
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'amel';
satu();
dua('fikri');
console.log(nama);