document.addEventListener("DOMContentLoaded", () => {
    // 1. Navbar Scroll Effect
    const header = document.querySelector("header") || document.querySelector("nav");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("shadow-[0_4px_20px_rgba(6,182,212,0.15)]");
                if (header.classList.contains("bg-slate-950/80")) {
                    header.classList.replace("bg-slate-950/80", "bg-slate-950/95");
                }
            } else {
                header.classList.remove("shadow-[0_4px_20px_rgba(6,182,212,0.15)]");
                if (header.classList.contains("bg-slate-950/95")) {
                    header.classList.replace("bg-slate-950/95", "bg-slate-950/80");
                }
            }
        });
    }

    // 2. Scroll Reveal Animations (Fade Up & Stagger)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                entry.target.classList.remove("reveal");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal animation to visible sections and cards
    const revealElements = document.querySelectorAll(".glass-card, section h1, section h2, section p");
    revealElements.forEach((el, index) => {
        el.classList.add("reveal");
        if (el.classList.contains("glass-card")) {
            el.style.transitionDelay = `${Math.min(index, 8) * 80}ms`;
        } else {
            el.style.transitionDelay = "0ms";
        }
        observer.observe(el);
    });

    // // 3. Smooth Parallax for Images
    // const heroImages = document.querySelectorAll("section img");
    // window.addEventListener("scroll", () => {
    //     const scrollPosition = window.pageYOffset;
    //     heroImages.forEach(img => {
    //         // Apply slight vertical shift based on scroll to create depth
    //         img.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    //     });
    // });

    // 4. Neon Hover Effects
    // Styles moved to index.css so hover/glow and glass rules keep correct order.
});
