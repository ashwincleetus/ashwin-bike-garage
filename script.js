// ================================
// Navbar background on scroll
// ================================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ================================
// Mobile Menu Toggle
// ================================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ================================
// Counter Animation
// ================================
const counters = document.querySelectorAll(".stat-number");

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const speed = 50;

    const updateCount = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

let counterStarted = false;

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".hero-stats");

  if (!counterStarted && statsSection) {
    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      animateCounters();
      counterStarted = true;
    }
  }
});

// ================================
// Scroll Reveal Animation
// ================================
const revealElements = document.querySelectorAll(
  ".service-card, .about-text, .about-visual, .gallery-item, .contact-info, .contact-form-wrap"
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("reveal", "visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================================
// WhatsApp Booking Form
// ================================
const sendBtn = document.getElementById("sendWhatsapp");

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const name = document.getElementById("formName").value;
    const phone = document.getElementById("formPhone").value;
    const service = document.getElementById("formService").value;
    const message = document.getElementById("formMsg").value;

    const text =
`Hello Ashwin Bike Garage

Name: ${name}
Phone: ${phone}
Service: ${service}

Message:
${message}`;

    const whatsappURL =
      "https://wa.me/919150590960?text=" +
      encodeURIComponent(text);

    window.open(whatsappURL, "_blank");
  });
}