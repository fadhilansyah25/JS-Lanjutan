// Tagged Template Literals
/* Bentuk yang lebih kompleks dari template literals, memungkinkan kita untuk membaca
template literals melalui sebuah function*/

// const nama = 'Fadil Ardiansyah';
// const umur = 23;

// // function coba(strings, ...keys) {
// //     let result = [strings[0]];
// //     keys.forEach(function (key, i) {
// //         i++;
// //         result.push(key, strings[i])
// //     })
// //     return result.join('');
// // }

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result;

//     return strings.reduce((acc, cur, index) => `${acc}${cur}${values[index] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Fadil Ardiansyah';
const umur = 23;
const email = 'fadhilansyah25@gmail.com'

function highlight(strings, ...values) {
    return strings.reduce((acc, cur, index) => `${acc}${cur}<span class="hl">${values[index] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. email : ${email}`;
document.body.innerHTML = str;

// Penggunaan Tagged Template 
// 1. Escaping HTML Tags
// 2. Translation & Internationalization
// 3. Styled components