import navbarOnScroll from "./navbar";
import { checkAndSetTheme, setColorScheme } from "./colorTheme";
import { activateMobileMenu } from "./mobileMenu";

// COLOR THEME LOGIC
const checkSystemPreferences = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

checkSystemPreferences.addEventListener("change", setColorScheme);
checkAndSetTheme();

// fixed navbar changes color on scroll
navbarOnScroll();

// MOBILE MENU LOGIC
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", activateMobileMenu);
