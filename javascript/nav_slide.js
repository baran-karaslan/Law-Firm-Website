document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector('.n-bar');

    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {

            const href = this.getAttribute('href');

            // Sadece # ile başlayan linklerde çalışsın
            if (href.startsWith('#')) {
                e.preventDefault();

                const target = document.querySelector(href);
                const navbarHeight = navbar.offsetHeight;

                // Hedefin ekrandaki pozisyonu
                const elementPosition = target.getBoundingClientRect().top;

                // Navbar yüksekliği kadar yukarı kaydırma düzeltmesi
                const offsetPosition = elementPosition - navbarHeight;

                // Smooth scroll
                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }

        });
    });

});