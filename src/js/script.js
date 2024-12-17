// pindah halaman ==========
document.querySelectorAll('.icon-container').forEach((element, index) => {
    element.addEventListener('click', () => {
        // Tentukan URL halaman berdasarkan index atau kondisi tertentu
        let urls = [
            'index.html',       // Untuk ikon pertama
            'src/html/favorite.html',   // Untuk ikon kedua
            'src/html/histori.html',    // Untuk ikon ketiga
            'src/html/akun.html'     // Untuk ikon keempat
        ];

        // Navigasikan ke halaman yang sesuai
        if (urls[index]) {
            window.location.href = urls[index];
        }
    });
});
// pindah halaman ==========

// konten tren ==========
const contents = document.querySelectorAll('.content');

contents.forEach((content) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  content.addEventListener('mousedown', (e) => {
    isDown = true;
    content.classList.add('active');
    startX = e.pageX - content.offsetLeft;
    scrollLeft = content.scrollLeft;
  });

  content.addEventListener('mouseleave', () => {
    isDown = false;
    content.classList.remove('active');
  });

  content.addEventListener('mouseup', () => {
    isDown = false;
    content.classList.remove('active');
  });

  content.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - content.offsetLeft;
    const walk = (x - startX) * 1; // Kontrol kecepatan scrolling
    content.scrollLeft = scrollLeft - walk;
  });
});

// const aSroll = document.querySelector('content');
// let direction = 1; // 1 untuk kanan, -1 untuk kiri
// let scrollAmount = 10; // Jumlah scroll per frame
// let scrollSpeed = 0.5; // Kecepatan scroll dalam detik

// function autoScroll() {
//   const maxScrollLeft = aSroll.scrollWidth - aSroll.clientWidth;
//   let start = null;

//   function step(timestamp) {
//     if (!start) start = timestamp;
//     const progress = timestamp - start;

//     // Mengatur scroll dengan kecepatan yang ditentukan
//     if (progress < scrollSpeed * 1000) {
//       aSroll.scrollLeft += direction * (scrollAmount * (progress / (scrollSpeed * 1000)));
//       requestAnimationFrame(step);
//     } else {
//       aSroll.scrollLeft += direction * scrollAmount;
//       start = null;

//       // Mengubah arah scroll saat mencapai batas
//       if (aSroll.scrollLeft >= maxScrollLeft) {
//         direction = -1; // Balik ke kiri
//       } else if (aSroll.scrollLeft <= 0) {
//         direction = 1; // Balik ke kanan
//       }

//       // Restart scroll
//       setTimeout(() => requestAnimationFrame(step), 1000); // Jeda sebelum scroll berikutnya
//     }
//   }

//   requestAnimationFrame(step);
// }
// // Memulai auto-scroll saat halaman dimuat
// autoScroll();
// konten tren ==========

// popup menu ==========
document.getElementById('infinity_war').onclick = function() {
    document.getElementById('popup').style.display = 'block';
}

document.querySelector('.close-btn').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}

// Tutup pop-up jika mengklik di luar pop-up
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}
// popup menu ==========

// ganti bahasa footer ==========
document.addEventListener("DOMContentLoaded", () => {
    // Pilih elemen select untuk memilih bahasa
    const languageSelector = document.querySelector(".language-selector select");

    // Ambil elemen-elemen yang perlu diterjemahkan
    const elementsToTranslate = Array.from(document.querySelectorAll("footer a, .footer-up p, .footer-bottom .call"));

    // Simpan teks asli (Bahasa Indonesia)
    const originalTexts = elementsToTranslate.map(element => element.textContent.trim());

    // Objek translasi ke Bahasa Inggris
    const translations = {
        "Ada Pertanyaan? Hubungi": "Have Questions? Contact",
        "Tanya Jawab": "FAQ",
        "Hubungan Investor": "Investor Relations",
        "Cara Menonton": "How to Watch",
        "Informasi Perusahaan": "Corporate Information",
        "Pusat Bantuan": "Help Center",
        "Lowongan Kerja": "Careers",
        "Ketentuan Pengguna": "Terms of Use",
        "Hubungi Kami": "Contact Us",
        "Akun": "Account",
        "Tukar Kartu Hadiah": "Redeem Gift Cards",
        "Privasi": "Privacy",
        "Tes Jaringan": "Network Test",
    };

    // Fungsi untuk mengganti bahasa
    const changeLanguage = (language) => {
        elementsToTranslate.forEach((element, index) => {
            if (language === "English") {
                // Ubah teks ke Bahasa Inggris
                const translatedText = translations[originalTexts[index]];
                if (translatedText) {
                    element.textContent = translatedText;
                }
            } else if (language === "Bahasa Indonesia") {
                // Kembalikan ke teks asli
                element.textContent = originalTexts[index];
            }
        });
    };

    // Event listener untuk perubahan pilihan bahasa
    languageSelector.addEventListener("change", () => {
        const selectedLanguage = languageSelector.value;
        changeLanguage(selectedLanguage);
    });
});
// ganti bahasa footer ==========

// back to top ==========
const backToTopButton = document.getElementById('backToTop');
// Tampilkan tombol saat scroll ke bawah
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
// Fungsi untuk kembali ke atas
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// back to top ==========