// Sayfa başka bir sayfadan #id ile açıldığında otomatik scroll yapan kod
document.addEventListener("DOMContentLoaded", () => {

    // URL'deki hash (#about-section gibi)
    const hash = window.location.hash;

    if (hash) {
        const target = document.querySelector(hash);

        if (target) {
            const navbar = document.querySelector('.n-bar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            // Sayfa tamamen oturduktan sonra kaydırma yapılması için gecikme
            setTimeout(() => {
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 300);
        }
    }

});