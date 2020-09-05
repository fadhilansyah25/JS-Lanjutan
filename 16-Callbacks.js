// Callback 
// Function yang dirimkan sebagai parameter pada function yang lain

// function halo(nama) {
//     alert(nama);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt(`Masukan Nama : `);
//     callback(nama);
// }

// tampilkanPesan(nama => alert(nama));

// Synchronus Callback
// const mhs = [
//     {
//         "Nama": 'Fadil Ardiansyah',
//         "Kelas": '03P'
//     },
//     {
//         "Nama": 'Rudi',
//         "Kelas": '03P'
//     },
//     {
//         "Nama": 'Martin',
//         "Kelas": '03P'
//     },
//     {
//         "Nama": 'Lukas',
//         "Kelas": '03P'
//     }
// ]

// console.log('mulai');
// mhs.forEach(element => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     };
//     console.log(element.Nama);
// });
// console.log('selesai');


// ASynchronus Callback
// console.log('mulai');
// function getData(url, succes, error) {
//     let xhr = new XMLHttpRequest();
    

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 succes(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// getData('16-Callback.json', result => {
//     const mahasiswa = JSON.parse(result);
//     mahasiswa.forEach(element => console.log(element.Nama));
// }, () => 'Error' );
// console.log('selesai');


// Jquery
console.log('mulai');
$.ajax({
    url: '16-Callback.json',
    success: (result) => {
        result.forEach(element => {
            console.log(element.Nama);
        });
    },
    error: (e) => console.log(e)
})
console.log('selesai');
