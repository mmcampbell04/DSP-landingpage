import { checkAndSetTheme } from "./colorTheme";
import { setFixedNav, getScrollHeight, activateMobileMenu } from "./navbar";

// COLOR THEME LOGIC
checkAndSetTheme();

// SET FIXED NAVBAR
window.addEventListener("scroll", setFixedNav);

// MOBILE MENU TOGGLE
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", activateMobileMenu);

// ADDING SMOOTH SCROLLING DOWN TO DIFFERENT SECTIONS
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", getScrollHeight);
});

// testimonials slides
const slider = document.getElementById("range");
slider.addEventListener("change", getSliderRange);

function getSliderRange(e) {
  slideValue = parseFloat(e.target.value);
  getActiveSlide(slideValue);
}

function getActiveSlide(slideValue) {
  const slides = document.querySelectorAll(".slide");
  //   loop through EVERY slide and check if there's already an active slide
  for (let slide of slides) {
    if (slide.classList.contains("active")) {
      //   if there is, remove the active class
      slide.classList.remove("active");
    }
    //   then asign the new slide value
    let newSlide = slides.item(slideValue);
    newSlide.classList.add("active");
  }
}

// scroll to about section on scroll btn click
const scrollBtn = document.querySelector(".arrow-btn");
scrollBtn.addEventListener("click", getScrollHeight);
