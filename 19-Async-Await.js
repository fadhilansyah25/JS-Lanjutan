/* Asynchronus function adalah sebuah function yang bekerja secara 
asynchronus (melalui event loop), yang menghasilkan (implisit) promise sebagai 
return value-nya, tapi cara penulisan code-nya menggunakan penulisan yang
synchronus (Standard)*/

/* Asynchronus Function
1. Fungsi yang berjalan secara asynchronus
2. Menghasilkan (implisit) promise
3. Cara penulisannya sama seperti synchronus function (function biasa)
*/

/* Sebuag async function dapat memiliki keyword await di dalamnya
untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai
*/

// const coba = new Promise ((resolve) => resolve('selesai'));
// console.log(coba);
// Promise {<fulfilled>: "selesai"}

// const coba = new Promise ((resolve) => {
//     setTimeout(function () {
//         resolve('selesai')
//     }, 2000);
// });
// console.log(coba);
// Promise {<pending>}

// const coba = new Promise ((resolve) => {
//     setTimeout(function () {
//         resolve('selesai')
//     }, 2000);
// });
// coba.then(() => console.log(coba));
// Promise {<fulfilled>: "selesai"} *tampil setelah dua detik

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 2000;
        setTimeout(function () {
            resolve('selesai')
        }, waktu);
    });
};

// const coba  = cobaPromise();
// coba.then(() => console.log(coba));
// Promise {<fulfilled>: "selesai"}

async function cobaAsync() {
    const coba = await cobaPromise();
    console.log(coba);
}
cobaAsync();
// tampil: selesai


// function cobaPromise() {
//     return new Promise((resolve, reject) => {
//         const waktu = 5000;
//         if (waktu < 5000) {
//             setTimeout(function () {
//                 resolve('selesai')
//             }, waktu);
//         }else {
//             console.log('kelamaan');
//         }
//     });
// };

// async function cobaAsync() {
//     try {
//         const coba = await cobaPromise();
//         console.log(coba);
//     } catch (error) {
//         console.log(error);
//     }
// }

// cobaAsync();