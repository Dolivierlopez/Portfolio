// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Breadcrumb responsive
function updateBreadcrumb() {
  const breadcrumb = document.getElementById("breadcrumb");
  const currentSection = document.getElementById("current-section");

  if (window.innerWidth <= 992) {
    breadcrumb.classList.add("show");

    // Detectar sección actual
    const sections = document.querySelectorAll("section[id]");
    let current = "Inicio";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        const sectionNames = {
          home: "Inicio",
          about: "Sobre Mí",
          skills: "Habilidades",
          projects: "Proyectos",
          contact: "Contacto",
        };
        current = sectionNames[section.id] || "Inicio";
      }
    });

    currentSection.textContent = current;
  } else {
    breadcrumb.classList.remove("show");
  }
}

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animaciones al hacer scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

// Event listeners
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("scroll", updateBreadcrumb);
window.addEventListener("resize", updateBreadcrumb);

// Inicializar
animateOnScroll();
updateBreadcrumb();

// Efectos adicionales para mejorar la interactividad
document.querySelectorAll(".card-custom").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
    this.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Paralax effect para elementos flotantes
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".floating-element");
  const speed = 0.5;

  parallax.forEach((element) => {
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
    element.style.transition = "transform 0.5s ease-out";
  });
});