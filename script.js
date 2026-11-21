// =====================================================
// PHISHING WEBSITE DETECTOR - LANDING PAGE
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    // ----- mobile menu -----
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(link =>
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
        }));

    // ----- Chrome Web Store button (until the extension is published) -----
    const storeButton = document.getElementById("storeButton");
    if (storeButton) {
        storeButton.addEventListener("click", event => {
            if (storeButton.classList.contains("is-disabled")) event.preventDefault();
        });
    }

    // ----- screenshot viewer -----
    const lightbox = document.getElementById("lightbox");
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
    if (!lightbox) return;   // pages without the screenshot viewer (privacy.html)
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("lightboxClose");

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.removeAttribute("src");
    }

    document.querySelectorAll(".gallery img, .wide-shot img").forEach(img =>
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.hidden = false;
            closeBtn.focus();
        }));

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", event => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });

});
