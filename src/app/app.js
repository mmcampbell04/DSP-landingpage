import { checkSystemPreferences, checkAndSetTheme } from "./colorTheme";
import { activateMobileMenu } from "./mobileMenu";

// COLOR THEME LOGIC
checkAndSetTheme();

// MOBILE MENU LOGIC
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", activateMobileMenu);
