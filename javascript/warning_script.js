// ------------------ YASAL UYARI MODALI ---------------------

const legalModal = document.getElementById("legalModal");
const legalText = document.querySelector(".legal-text");
const legalTrigger = document.getElementById("legalNotice");
const closeLegal = document.querySelector(".close-legal");

// Yasal uyarı dosyasını yükle
async function loadLegal() {
    const filePath = `content/${currentLang}/legal_warning.txt`;
    const response = await fetch(filePath);
    return await response.text();
}

// Tıklayınca aç
legalTrigger.addEventListener("click", async () => {
    let content = await loadLegal();

    // SATIR SONLARINI HTML FORMATINA ÇEVİR
    content = content.replace(/\n/g, "<br><br>");

    legalText.innerHTML = content;
    legalModal.style.display = "block";
});

// Çarpıya basınca kapat
closeLegal.addEventListener("click", () => {
    legalModal.style.display = "none";
});

// Modal dışına tıklayınca kapat
window.addEventListener("click", (e) => {
    if (e.target === legalModal) {
        legalModal.style.display = "none";
    }
});