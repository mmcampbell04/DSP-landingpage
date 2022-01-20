import { checkAndSetTheme } from "./colorTheme";
import { setFixedNav, getScrollHeight, activateMobileMenu } from "./navbar";
import { getSliderRange } from "./slider";

// COLOR THEME LOGIC
checkAndSetTheme();

// SET FIXED NAVBAR
window.addEventListener("scroll", setFixedNav);

// MOBILE MENU TOGGLE
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", activateMobileMenu);

// ADDING SMOOTH SCROLLING DOWN TO DIFFERENT SECTIONS
const scrollLinks = document.querySelectorAll(["data-link"]);
scrollLinks.forEach((link) => {
  link.addEventListener("click", getScrollHeight);
});

// testimonials slides
const slider = document.getElementById("range");
slider.addEventListener("change", getSliderRange);
