document.querySelectorAll(".box").forEach(card => {
    card.addEventListener("click", () => {
        const file = card.getAttribute("data-file");
        const title = card.getAttribute("data-title");

        // Yeni sayfaya yönlendirme
        window.location.href = `blog.html?file=${file}&title=${title}`;
    });
});

// ===============================
//   DAHA FAZLASI / DAHA AZ BUTONLARI
// ===============================

const allBoxes = document.querySelectorAll(".box");
const showMoreBtn = document.getElementById("showMoreBtn");
const showLessBtn = document.getElementById("showLessBtn");

// İlk 3 dışındaki box'ları başlangıçta gizle
allBoxes.forEach((box, index) => {
    if (index > 2) {
        box.classList.add("hidden");
    }
});

// Daha Fazlası
showMoreBtn.addEventListener("click", () => {
    allBoxes.forEach(box => box.classList.remove("hidden"));

    // buton değişimi
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "block";
});

// Daha Az Göster
showLessBtn.addEventListener("click", () => {
    allBoxes.forEach((box, index) => {
        if (index > 2) {
            box.classList.add("hidden");
        }
    });

    // buton değişimi
    showMoreBtn.style.display = "block";
    showLessBtn.style.display = "none";

    // en üst konuma kaydır (box'ların olduğu yere)
    document.getElementById("blog-section").scrollIntoView({
        behavior: "smooth"
    });
});