// Looping Baru javascript

// for ..of
// Creates a loop iterating over iterable object
// Iterable Object
// 1. String
// 2. Array
// 3. Arguments / Nodelist
// 4. TypedArray
// 5. Map
// 6. Set
// 7. User-defined iterables 


// Looping Array
// const mhs = ['Fadil', 'Amel', 'Doddy'];
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// } 

// mhs.forEach(element => {
//     console.log(element);
// });

// for (const m of mhs) {
//     console.log(m);
// }

// forEach dengan indeks
// mhs.forEach((el, i) => {
//     console.log(`${el} adalah mahasiswa ke ${i+1}`);
// });

// forOf dengan indeks
// for (const [key, value] of mhs.entries()) {
//     console.log(`${value} adalah mahasiswa ke-${key+1}`);
// }

// Looping String
// const nama = 'Fadil Ardiansyah';
// String tidak bisa di looping dengan forEach karena bukan array

// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i]);
// }

// for (const n of nama) {
//     console.log(n);
// }


// NodeList
// const list  = document.querySelectorAll('.nama');
// console.log(list);

// list.forEach(n => console.log(n.textContent));

// for (const [key, value] of list.entries()) {
//     console.log(value.textContent);
// };


// Arguments
function jumlahkanAngka() {
    // return arguments.reduce((a, i) => a + i);
    // arguments.forEach(element => total += element);
    let total = 0;
    for (const n of arguments) {
        total += n;
    }
    return total; 
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// for ..in
// Creates a loop only iterating over enumerable
// enumerable = properti pada object

const mhs = {
    nama : 'Fadil Ardiansyah',
    kelas : '05TPLP005',
    ruang : 3
}

for (const key in mhs) {
    if (mhs.hasOwnProperty(key)) {
        const element = mhs[key];
        console.log(element);
    }
}