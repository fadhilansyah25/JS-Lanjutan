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
// let Mahasiswa = ['Fadil','Fikri','Fakhri'];

// let jumlahHuruf = Mahasiswa.map( nama => ({nama, panjang: nama.length}));
// console.table(jumlahHuruf);



// komsep this pada arrown function

// constructor function
// const Mahasiswa = function () {
//     this.nama =  'Fadil Ardiansyah';
//     this.umur = 23;
//     this.sayHello = function () {
//      return `Halo ${this.nama}, umur anda ${this.umur}`;
//     }
// }

// const fadil = new Mahasiswa();
// console.log(fadil.sayHello());

// Arrow Function
// const Mahasiswa = () => {
//     this.nama =  'Fadil Ardiansyah';
//     this.umur = 23;
//     this.sayHello = function () {
//      return `Halo ${this.nama}, umur anda ${this.umur}`;
//     }
// }

// const fadil = new Mahasiswa();
// console.log(fadil.sayHello());
// output : Error Mahasiswa is not constructor

// constructor function dengan menthod arrow function
// const Mahasiswa = function () {
//     this.nama =  'Fadil Ardiansyah';
//     this.umur = 23;
//     this.sayHello = () => {
//         return `Halo ${this.nama}, umur anda ${this.umur}`;
//     }
// }

// const fadil = new Mahasiswa();
// console.log(fadil.sayHello());

// Object litteral dengan method arrow function
// let mhs1 = {
//     nama: 'Fadil Ardiansyah',
//     umur: 23,
//     sayHello: () => {
//         return `Halo ${this.nama}, umur anda ${this.umur}`;
//     }
// }

// constructor function dengan menthod arrow function
// fungsi masing-masing dari arrow function dan function biasa
// const Mahasiswa = function () {
//     this.nama = 'Fadil Ardiansyah';
//     this.umur = 23;
//     this.sayHello = function () {
//         return `Halo ${this.nama}, umur anda ${this.umur}`;
//     }

//     setInterval(() => console.log(this.umur++), 1000);
// }

// const fadil = new Mahasiswa();

const box = document.querySelector('.box');

box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    };

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});