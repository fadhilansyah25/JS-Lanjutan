// Rest Parameter
 
// function myFunction(a, b, ...Rest) {
//     // return `a = ${a}, b = ${b}, Rest = ${Rest}`;
//     // return Rest;
//     // return Array.from(arguments);
// }

// console.log(myFunction(1, 2, 3, 4, 5));



// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const e of angka) {
//     //     total += e;
//     // }
//     // return total;

//     // return total
//     // return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// array destructuring
// const kelompok1 = ['Fadil', 'Rudi', 'Coki', 'Jamal', 'Muslim'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(`ketua = ${ketua}, Wakil = ${wakil}, Anggota ${anggota.join(" ")}`);



// Object destructuring
// const team = {
//     pm: 'Fadil',
//     frontend: 'Fikhri',
//     backend: 'Fachri',
//     UxUi: 'Fikhri',
//     devOps: 'Rangga',
// }

// const {pm,  ...myTeam} = team;
// console.log(pm);


// filtering 
function filterBy(type, ...bagian) {
    return bagian.filter(value => typeof value === type && isFinite(value))
}

console.log(filterBy('number', 1, 2, 3, 'Fadil', false, 10, true, 'Doddy'));