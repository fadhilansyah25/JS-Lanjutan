// let tampilPesan = function (nama) {
//     alert(`Halo ${nama}`);
// }
// tampilPesan('Fadil');

// let tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Fadil Ardiansyah'));

// let tampilNama = (nama, waktu) => {
//     return `Halo ${nama}, Selanat ${waktu} `;
// }
// console.log(tampilNama('Fadil Ardiansyah','Malam'));

// implicit return
// let tampilNama = nama =>  `Halo ${nama}`;
// console.log(tampilNama('Fadil Ardiansyah'));

// const helo = () => `Hello, World`;
// console.log(helo());

// let Mahasiswa = ['Fadil','Fikri','Fakhri'];

// let jumlahHuruf = Mahasiswa.map(value => value.length);
// console.log(jumlahHuruf);

// mengembalikan object
let Mahasiswa = ['Fadil','Fikri','Fakhri'];

let jumlahHuruf = Mahasiswa.map( nama => ({nama, panjang: nama.length}));
console.table(jumlahHuruf);