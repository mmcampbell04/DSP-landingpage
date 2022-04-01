import { checkAndSetTheme } from "./colorTheme";
import { setFixedNav, activateMobileMenu, closeMobileNav } from "./navbar";
import { getSliderRange } from "./slider";
import { getWeekDay } from "./weekday";

getWeekDay();
// COLOR THEME LOGIC
window.addEventListener("DOMContentLoaded", checkAndSetTheme);

// SET FIXED NAVBAR
window.addEventListener("scroll", setFixedNav);

// MOBILE MENU TOGGLE
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", activateMobileMenu);

// CLOSE MOBILE NAV WHEN LINK IS CLICKED
const scrollLinks = document.querySelectorAll("[data-link]");
scrollLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

// testimonials slides
const slider = document.getElementById("toggle-quotes");
slider.addEventListener("change", getSliderRange);
