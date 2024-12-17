// pindah halaman ==========
document.querySelectorAll('.icon-container').forEach((element, index) => {
    element.addEventListener('click', () => {
        // Tentukan URL halaman berdasarkan index atau kondisi tertentu
        let urls = [
            '../../index.html',       // Untuk ikon pertama
            'favorite.html',   // Untuk ikon kedua
            'histori.html',    // Untuk ikon ketiga
            'akun.html'     // Untuk ikon keempat
        ];

        // Navigasikan ke halaman yang sesuai
        if (urls[index]) {
            window.location.href = urls[index];
        }
    });
});
// pindah halaman ==========