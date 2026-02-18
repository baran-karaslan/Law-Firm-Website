let currentLang = "tr";

function loadLanguage(lang) {
    fetch(`/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll("[data-lang]").forEach(el => {
                const key = el.getAttribute("data-lang");
                if (data[key]) {
                    el.innerHTML = data[key];
                }
            });
        });

    // Dil seçimini kaydet
    localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    loadLanguage(currentLang);
});

// Dil butonu
document.querySelector(".l-btn").addEventListener("click", () => {
    currentLang = currentLang === "tr" ? "en" : "tr";
    loadLanguage(currentLang);
});