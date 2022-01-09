import { checkAndSetTheme, setColorScheme } from "./colorTheme";
import { activateMobileMenu } from "./mobileMenu";

// COLOR THEME LOGIC
const checkSystemPreferences = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

checkSystemPreferences.addEventListener("change", setColorScheme);
checkAndSetTheme();

// MOBILE MENU LOGIC
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", activateMobileMenu);
