// ===== 1. TAMPILKAN TANGGAL HARI INI =====
const elemenTanggal = document.getElementById('tanggal');
if (elemenTanggal) {
    const hariIni = new Date();
    const opsi = { day: 'numeric', month: 'long', year: 'numeric' };
    elemenTanggal.textContent = hariIni.toLocaleDateString('id-ID', opsi);
}

// ===== 2. TOMBOL GANTI WARNA =====
const tombolWarna = document.getElementById('tombolWarna');

const tema = [
    { nama: 'Pink',   utama: '#ff6b9d', kedua: '#c44569', bg: '#fff5f7' },
    { nama: 'Biru',   utama: '#4a90e2', kedua: '#2c5aa0', bg: '#f0f6ff' },
    { nama: 'Hijau',  utama: '#4caf50', kedua: '#2e7d32', bg: '#f1f8f4' },
    { nama: 'Ungu',   utama: '#9c27b0', kedua: '#6a1b9a', bg: '#faf0ff' },
    { nama: 'Oranye', utama: '#ff9800', kedua: '#e65100', bg: '#fff8f0' },
];

let indeksSekarang = 0;

if (tombolWarna) {
    tombolWarna.addEventListener('click', function() {
        indeksSekarang = (indeksSekarang + 1) % tema.length;
        const t = tema[indeksSekarang];

        document.documentElement.style.setProperty('--warna-utama', t.utama);
        document.documentElement.style.setProperty('--warna-kedua', t.kedua);
        document.documentElement.style.setProperty('--warna-bg', t.bg);

        tombolWarna.textContent = `Tema: ${t.nama} ✨`;
    });
}

// ===== 3. SAPAAN BERDASARKAN JAM =====
const jam = new Date().getHours();
let sapaan;
if (jam < 12) {
    sapaan = 'Selamat pagi';
} else if (jam < 15) {
    sapaan = 'Selamat siang';
} else if (jam < 18) {
    sapaan = 'Selamat sore';
} else {
    sapaan = 'Selamat malam';
}
console.log(`${sapaan}! Terima kasih sudah berkunjung ke rumah kecilku ✦`);

// ===== 4. DARK MODE TOGGLE =====
const tombolTema = document.getElementById('tombolTema');
const body = document.body;

const temaTersimpan = localStorage.getItem('tema');
if (temaTersimpan === 'dark') {
    body.classList.add('dark-mode');
    if (tombolTema) tombolTema.textContent = '☀️';
}

if (tombolTema) {
    tombolTema.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        const isDark = body.classList.contains('dark-mode');
        tombolTema.textContent = isDark ? '☀️' : '🌙';

        localStorage.setItem('tema', isDark ? 'dark' : 'light');
    });
}