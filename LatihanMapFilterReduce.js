// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]')) ;

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
const jsLanjut = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
.map(item => item.dataset.duration)

// ubah durasi menjadi integer, ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(":")
    .map(value => parseFloat(value, 10));
    return (parts[0] * 60 + parts[1]);
})

// jumlahkan semua detiknya
.reduce((acc, cur) => acc + cur);

// ubah formatnya menjadi jam menit detik
let jam = Math.floor(jsLanjut / 3600);
let menit = Math.floor((jsLanjut % 3600)/60)
let detik = (jsLanjut % 3600) % 60;
// simpan total durasi di DOM
const durasi = document.querySelector('.total-durasi').innerHTML = jam+":"+menit+":"+detik;


// jumlah video 
const jumlahvid = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'));
const jumlahVideo = document.querySelector('.jumlah-video').innerHTML = jumlahvid.length;