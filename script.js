AOS.init({ once: true, offset: 50 });

const text = [
    "AI Engineer"
];

let index = 0;
let char = 0;

function typing() {
    if (index === text.length) {
        index = 0;
    }

    let current = text[index];
    document.querySelector(".typing").textContent = current.slice(0, ++char);

    if (char === current.length) {
        index++;
        char = 0;
        setTimeout(typing, 2000); 
        return;
    }

    setTimeout(typing, 100);
}

typing();

if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".card, .education-item"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
        scale: 1.02
    });

    VanillaTilt.init(document.querySelector(".profile-img"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3
    });
}

// Modal Logic
document.addEventListener("DOMContentLoaded", () => {
    // CV Modal
    const cvModal = document.getElementById("cv-modal");
    const downloadBtn = document.getElementById("download-btn");
    const closeCvBtn = cvModal ? cvModal.querySelector(".close-btn") : null;

    if (downloadBtn && cvModal && closeCvBtn) {
        downloadBtn.addEventListener("click", (e) => {
            e.preventDefault();
            cvModal.classList.add("show");
        });

        closeCvBtn.addEventListener("click", () => {
            cvModal.classList.remove("show");
        });
    }

    // Gallery Modal
    const galleryModal = document.getElementById("gallery-modal");
    const previewBtn1 = document.getElementById("preview-btn-1");
    const closeGalleryBtn = document.getElementById("close-gallery");

    if (previewBtn1 && galleryModal && closeGalleryBtn) {
        previewBtn1.addEventListener("click", (e) => {
            e.preventDefault();
            galleryModal.classList.add("show");
        });

        closeGalleryBtn.addEventListener("click", () => {
            galleryModal.classList.remove("show");
        });
    }

    // Gallery Modal 2
    const galleryModal2 = document.getElementById("gallery-modal-2");
    const previewBtn2 = document.getElementById("preview-btn-2");
    const closeGalleryBtn2 = document.getElementById("close-gallery-2");

    if (previewBtn2 && galleryModal2 && closeGalleryBtn2) {
        previewBtn2.addEventListener("click", (e) => {
            e.preventDefault();
            galleryModal2.classList.add("show");
        });

        closeGalleryBtn2.addEventListener("click", () => {
            galleryModal2.classList.remove("show");
        });
    }

    // Gallery Modal 3
    const galleryModal3 = document.getElementById("gallery-modal-3");
    const previewBtn3 = document.getElementById("preview-btn-3");
    const closeGalleryBtn3 = document.getElementById("close-gallery-3");

    if (previewBtn3 && galleryModal3 && closeGalleryBtn3) {
        previewBtn3.addEventListener("click", (e) => {
            e.preventDefault();
            galleryModal3.classList.add("show");
        });

        closeGalleryBtn3.addEventListener("click", () => {
            galleryModal3.classList.remove("show");
        });
    }

    // Close Modals on outside click
    window.addEventListener("click", (e) => {
        if (cvModal && e.target === cvModal) {
            cvModal.classList.remove("show");
        }
        if (galleryModal && e.target === galleryModal) {
            galleryModal.classList.remove("show");
        }
        if (galleryModal2 && e.target === galleryModal2) {
            galleryModal2.classList.remove("show");
        }
        if (galleryModal3 && e.target === galleryModal3) {
            galleryModal3.classList.remove("show");
        }
    });
});