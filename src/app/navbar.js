const navLinks = document.getElementById("nav-links-container");
const navToggle = document.getElementById("mobile-nav-toggle");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbar = document.getElementById("nav");
const btnUp = document.getElementById("btn-up");

// MOBILE NAV TOGGLE
export function activateMobileMenu() {
  hamburgerMenu.classList.toggle("animate");
  const visibility = navLinks.getAttribute("data-visible");
  if (visibility === "false") {
    navLinks.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    btnUp.classList.remove("show-btn");
  } else {
    navLinks.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    btnUp.classList.add("show-btn");
  }
}

// set fixed navbar on scroll
export function setFixedNav() {
  const scrollHeight = window.pageYOffset;
  // show the back to top button when scrolling past a certain point
  if (scrollHeight > 600) {
    btnUp.classList.add("show-btn");
  } else {
    btnUp.classList.remove("show-btn");
  }
}

export function closeMobileNav() {
  navLinks.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);
  hamburgerMenu.classList.remove("animate");
}
