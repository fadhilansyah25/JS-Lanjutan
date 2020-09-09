// Jquery Ajax
// $.ajax({
//     url: 'http://www.omdbapi.com/?s=avengers&apikey=964e3858',
//     success: function (response) {
//         console.log(response);
//     },
//     error: function () {

//     }
// });


// Vanilla Javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     }else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?s=avengers&apikey=964e3858');
// xhr.send();


// Modern Javascript
// fetch('http://www.omdbapi.com/?s=avengers&apikey=964e3858')
//     .then(response => response.json()).then(response => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronus di masa yang akan datang
// Janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi ( then / catch)


// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Janji diingkari');
//     }
// });

// janji1
//     .then(response => console.log(response))
//     .catch(response => console.log(response));


// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Janji telah ditepati setelah beberapa saat')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Janji telah diingkari setelah beberapa saat')
//         }, 500);
//     }
// })

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu!'))
//     .then(response => console.log(response))
//     .catch(response => console.log(response));
// console.log('selesai');


// Promise All

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            "Judul": "Avengers",
            "Tahun": 2019,
            "Durasi": '1 Jam'
        }])
    }, 2000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            "Cuaca": "Mendung",
            "Angin": '29 Knot',
        }])
    }, 1000);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca]).then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
})