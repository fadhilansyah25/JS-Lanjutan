// Spread Operator
/* Memecah (expand/unpack) iterables menjadi single element */

// const mhs = ['Fadil', 'Amel', "Fakhri"];
// console.log(...mhs[0]);

// Memngabungkan 2 Array
// const mhs = ['Fadil', 'Amel', "Fakhri"];
// const dosen = ['Bambang', 'Sri', 'Fikhri'];

// const gabungan = [mhs, dosen];
// console.log(gabungan);

// const gabungan = mhs.concat(dosen);
// console.log(gabungan);

// const gabungan = [...mhs, 'Ronaldo', ...dosen];
// console.log(gabungan);


// meng-copy Array
// const mhs = ['Fadil', 'Amel', "Fakhri"];

// mengcopy reference bukan mengcopy array
// const mhs1 = mhs;
// mhs1[0] = 'Rudi'; // array mhs akan ikut berubah
// console.log(mhs); 
// console.log(mhs); 

// const mhs1 = [...mhs];
// mhs1[0] = 'Ronaldo';
// console.log(mhs);
// console.log(mhs1);


// Node list
// const liMhs =  document.querySelectorAll('li');

// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     list.push(mhs[i].textContent);
// }

// const mhs = [...liMhs].map(m => m.textContent);

// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(element => `<span>${element}</span>`);
console.log(huruf);

nama.innerHTML = huruf.reduce((a,i) => a + i);
