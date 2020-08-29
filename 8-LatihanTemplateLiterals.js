// 1. HTML Fragments
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


// 2. Looping
// const mhs = [
//     {
//         nama: 'Fadil Ardiansyah',
//         email: 'fadhilansyah25@gmail.com',
//     },
//     {
//         nama: 'Rudi Hartono',
//         email: 'RudiHartono@gmail.com',
//     }
// ]

// const el = `<div class="mhs">
// ${mhs.map(value => `
// <span class="nama">${value.nama}<br></span>
// <span class="email">${value.email}<br></span>
// `).join('')}
// </div>`;
// document.body.innerHTML = el; 

// 3. Conditonal
// Ternary
// const lagu = {
//     judul: 'London Calling',
//     artist: 'The Clash',
//     feat: 'Fadil'
// }
// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.artist}</li>
//     ${lagu.feat ? `<li>${lagu.feat}</li>` : ` `}
// </ul>
// </div>`
// document.body.innerHTML = el; 

// 4. Nested
const mhs = {
    nama: 'Fadil Ardiansyah',
    semester: 5,
    matakuliah:  [
        'Pemograman 2', 
        'Analisis dan Perancangan Sistem', 
        'Pemograman Web'
    ]
}

function cetakMatakuliah(matakuliah) {
    return `${matakuliah.map(value => `<li>${value}</li>`).join('')}`
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester"> Semester : ${mhs.semester}</span>
<ol>${cetakMatakuliah(mhs.matakuliah)}</ol>
</div>`;
document.body.innerHTML = el; 