// Template Literals / Template String
// Template Literal adalah String Literal yang memungkinkan adanya expression di dalamnya
// String Literal adalah : 
// let nama = 'Fadil Ardiansyah'; // kutip datu
// let NIM = "181011400596"; // kutip dua
// let email = `fadhilansyah25@gmail.com`; // back tick

// kegunaan backtick 
// 1. Multi-line String
// console.log(`Nama Saya : Fadil
// umur saya : 23`);

// 2. Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('Halo')}`);
// const x = 10;
// console.log(`${x % 2 == 0 ? 'Genap' : 'Ganjil'}`);

// 3. HTML Fragments
// const mhs = {
//     nama: 'Fadil Ardiansyah',
//     umur: 23,
//     NIM: 181011400596,
//     email: 'fadhilansyah25@gmail.com'
// };
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="NIM">${mhs.NIM}<br></span>
// <span class="umur">${mhs.umur}<br></span>
// <span class="email">${mhs.email}<br></span>
// </div>`;

// const body = document.querySelector('body').innerHTML = el;


// 4. Expression Interpolation
// let a = 10;
// let b = 15;
// console.log(`jika a = 10 dan b = 15, maka hasil penjumlahannya adalah:
// ${a + b}, bukan ${2 * a + b}`);

// 5. Tag Template


// 1. Template Literals / Template String
// const nama = 'Fadil Ardiansyah';
// const umur = 33;
// console.log(`halo nama saya adalah ${nama}, umur saya ${umur}`);

