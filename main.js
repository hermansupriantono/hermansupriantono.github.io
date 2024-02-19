let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Menetapkan event listener pada peristiwa scroll
window.onscroll = () => {
    // Iterasi melalui setiap elemen 'section'
    sections.forEach(sec => {
        // Menghitung posisi scroll dan parameter lainnya untuk setiap 'section'
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Memeriksa apakah 'section' saat ini terlihat
        if (top >= offset && top < offset + height) {
            // Iterasi melalui setiap tautan navigasi
            navLinks.forEach(link => {
                // Menghapus kelas 'active' dari semua tautan
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
