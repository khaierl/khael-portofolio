/* =========================
   SMOOTH NAVIGATION
========================= */

const links = document.querySelectorAll(
    'a[href^="#"]'
);

links.forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealItems = document.querySelectorAll(
    ".intro-text, .about-photo, .interest-item, .skills-list div, .project-card, .maze, .music-layout, .contact-heading"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealItems.forEach(item => {
    item.classList.add("reveal");
    observer.observe(item);
});


/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


/* =========================
   IMAGE FALLBACK
========================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.style.background = "#ddd";

    });

});