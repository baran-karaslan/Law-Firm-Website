// URL'den parametreleri al
const params = new URLSearchParams(window.location.search);
const file = params.get("file");
const title = params.get("title");

// Sayfa başlığı ayarla
document.getElementById("blogTitle").innerText = title;

// TXT dosyasını çek
fetch(file)
    .then(res => res.text())
    .then(data => {
        document.getElementById("blogText").innerHTML = data;
    })
    .catch(() => {
        document.getElementById("blogText").innerHTML = "Blog bulunamadı.";
    });

fetch(file)
    .then(res => res.text())
    .then(data => {
        // Satır boşluklarını <p> etiketi yap
        const paragraphs = data
            .split(/\n\s*\n/)   // boş satıra göre böl
            .map(p => `<p>${p.trim()}</p>`)
            .join("");

        document.getElementById("blogText").innerHTML = paragraphs;
    });

fetch(file)
    .then(res => res.text())
    .then(data => {

        // Çift yıldız (**...**) yapısını <strong>...</strong>'e çevir
        const boldConverted = data.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        // Paragraf dönüştürücü
        const paragraphs = boldConverted
            .split(/\n\s*\n/)
            .map(p => `<p>${p.trim()}</p>`)
            .join("");

        document.getElementById("blogText").innerHTML = paragraphs;
    });