const lawModal = document.getElementById("lawModal");
const lawModalText = document.querySelector(".law-text");
const lawCloseBtn = document.querySelector(".close-law");

let activeTxtFile = null;
let activeTitle = null;

// Kart tıklama
document.querySelectorAll(".block").forEach(card => {
    card.addEventListener("click", () => {
        activeTxtFile = card.getAttribute("data-file");

        // Kart başlığını al (TR / EN fark etmez)
        activeTitle = card.querySelector("h1").innerText;

        openLawModal();
    });
});

function openLawModal() {
    if (!activeTxtFile) return;

    const filePath = `/content/${currentLang}/${activeTxtFile}`;

    fetch(filePath)
        .then(res => res.text())
        .then(text => {

            // TXT satırlarını paragraf yap
            const formattedText = text
                .split(/\n\s*\n/)
                .map(p => `<p>${p.trim()}</p>`)
                .join("");

            // Modal içeriğini TEK SEFERDE bas
            lawModalText.innerHTML = `
                <h2 class="law-title">${activeTitle}</h2>
                <div class="law-content">
                    ${formattedText}
                </div>
            `;

            lawModal.style.display = "flex";
        })
        .catch(err => {
            lawModalText.innerHTML = "<p>İçerik yüklenemedi.</p>";
            console.error(err);
        });
}

// Modal kapama
lawCloseBtn.addEventListener("click", () => {
    lawModal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === lawModal) {
        lawModal.style.display = "none";
    }
});