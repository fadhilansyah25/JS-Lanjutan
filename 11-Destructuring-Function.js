// Destrcuturing Function

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// let [jumlah, kali] = penjumlahanPerkalian(2, 7);
// console.log(jumlah);
// console.log(kali);


// Jika return valuenya nambah
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// let [jumlah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 8);
// console.log(jumlah);
// console.log(kali);
// console.log(kurang);
// console.log(bagi);


// jika Destructuringnya tidak mau berurutan maka opsinya dengan object Destructuring
// function kalkulasi(a, b) {
//     return { tambah: a + b, kurang: a - b, kali: a * b, bagi: a / b }
// }

// const {kurang} = kalkulasi(10,10);
// console.log(kurang);


// Destructur function argumnents
const mhs1 = {
    nama: 'Fadil Ardiansyah',
    umur: 23,
    email: 'fadhilansyah25@gmail.com',
    nilai: {
        tugas : 80,
        uts : 90,
        uas : 85
    }
}

function cetakMhs({nama, umur, email, nilai : {tugas, uts, uas}}){
    return `Halo nama saya ${nama}, berumur ${umur}, email : ${email} dan nilai uas saya adalah ${uas}`
}

function cetakNilai({nilai}) {
    return nilai;
}

let mahasiswa = cetakMhs(mhs1);
console.log(mahasiswa);
