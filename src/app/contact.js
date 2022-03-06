import { checkAndSetTheme } from "./colorTheme";
import { activateMobileMenu, closeMobileNav } from "./navbar";
import { getWeekDay } from "./weekday";

const navLinks = document.getElementById("nav-links-container");
const hamburgerMenu = document.getElementById("hamburger-menu");

window.addEventListener("DOMContentLoaded", checkAndSetTheme);

// MOBILE MENU TOGGLE
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", activateMobileMenu);

const scrollLinks = document.querySelectorAll("[data-link]");
scrollLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

getWeekDay();
