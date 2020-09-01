// Destructuring Variable atau Destructuring Assignment
/* Expression pada javascript yang membuat kita dapat 'Membongkar' nilai dari Array atau properti dari object 
ke dalam variabel yang terpisah */

// Destructuring Array 

const perkenalan = ['Halo', 'nama', 'saya', 'Fadil Ardiansyah'];
const [salam, satu, dua, nama] = perkenalan;

console.log(salam);
console.log(satu);
console.log(dua);
console.log(nama);


// Skip Destructuring item Array

const perkenalan = ['Halo', 'nama', 'saya', 'Fadil Ardiansyah'];
const [salam, , ,nama] = perkenalan;

console.log(salam);
console.log(nama);
console.log(satu);


// Swap nilai dua variabel
let a = 10, b = 30;
[a, b] = [b, a];

console.log(a);
console.log(b);


// return value pada function
function coba() {
    return [1, 2]
}

const [a, b] = coba();
console.log(a);
console.log(b);


// Rest parameter
const Array = [1, 2, 3, 4, 5, 6, 6, 2, 3, 5, 10];

const [a, b, c, ...rest] = Array;
console.log(rest);


// Destructuring Object
const mhs = {
    nama:  'Fadil Ardiansyah',
    umur: 33,
}

// harus sesuai dengan nama propertinya 
const {nama, umur} = mhs;
console.log(nama);


// Assignment tanpa deklarasi object
// harus sesuai dengan nama propertinya 
const {nama, umur} = {
    nama: 'Fadil Ardiansyah',
    umur: 33
};
console.log(nama);


({ nama, umur } = {
    nama: 'Fadil Ardiansyah',
    umur: 33
});
console.log(nama);

// Assignment ke variabel baru
const mhs = {
    nama: 'Fadil Ardiansyah',
    umur: 33,
}

// harus sesuai dengan nama propertinya 
const { nama: n, umur: u } = mhs;
console.log(`${n} ${u}`);


// Memberikan Default value
const mhs = {
    nama: 'Fadil Ardiansyah',
    umur: 33,
    email: 'fadhilansyah25@gmail.com'
}

// harus sesuai dengan nama propertinya 
const { nama, umur, email = 'default@gmail.com'} = mhs;
console.log(`
nama : ${nama} 
umur : ${umur} 
email: ${email}`);

// Memberikan Default value + assign ke variabel baru
const mhs = {
    nama: 'Fadil Ardiansyah',
    umur: 33,
    email: 'fadhilansyah25@gmail.com'
}

// harus sesuai dengan nama propertinya 
const { nama : nm, umur: um, email : em = 'default@gmail.com'} = mhs;
console.log(`
nama : ${nm} 
umur : ${um} 
email: ${em}`);

// Rest Parameter dan mengembalikan ke object
const mhs = {
    nama: 'Fadil Ardiansyah',
    umur: 33,
    email: 'fadhilansyah25@gmail.com'
}

// harus sesuai dengan nama propertinya 
const { nama, ...rest} = mhs;
console.log(rest);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk fucntion
const mhs = {
    id: 123,
    nama: 'Fadil Ardiansyah',
    umur: 33,
    email: 'fadhilansyah25@gmail.com'
}

function getIdMhs({ id }) {
    return id;
}

console.log(getIdMhs(mhs));