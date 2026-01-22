console.log("Buba's Cloud TechZone loaded 🌸");

/* ============================
   BUTTON HOVER MICRO-ANIMATION
============================ */
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

/* ============================
   CARD HOVER EFFECT
============================ */
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 20px 40px rgba(255,182,217,0.4)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});

/* ============================
   SCROLL REVEAL ANIMATION
============================ */
const revealElements = document.querySelectorAll(
  ".hero-text, .hero-image, .card, .page h2, .page p, .services-list li"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("reveal-active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ============================
   NAV LINK HOVER UNDERLINE
============================ */
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#ffb6d9";
  });

  link.addEventListener("mouseleave", () => {
    if (!link.classList.contains("active")) {
      link.style.color = "#666";
    }
  });
});
