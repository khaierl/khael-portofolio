const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("mobile-open");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after selecting a section
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Close the menu when returning to desktop width
    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            navLinks.classList.remove("mobile-open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".about-photo, .about-content, .interest-item, " +
    ".skill-card, .certificate-card, .project-card, .maze"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}

/* =========================
   IMAGE FALLBACK
========================= */

document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
        console.warn("Image not found:", img.getAttribute("src"));

        // For the main hero photo, show a clear placeholder
        if (img.closest(".hero-photo")) {
            const fallback = document.querySelector(".photo-fallback");

            if (fallback) {
                fallback.style.display = "flex";
                fallback.style.flexDirection = "column";
                fallback.style.alignItems = "center";
                fallback.style.justifyContent = "center";
                fallback.style.gap = "8px";
                fallback.style.minHeight = "250px";
                fallback.style.background = "#e6e2d8";
                fallback.style.fontFamily = '"DM Mono", monospace';
            }
        }
    });
});

/* =========================
   FOOTER YEAR
========================= */

const footerYear = document.querySelector(".footer-year");

if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()}`;
}