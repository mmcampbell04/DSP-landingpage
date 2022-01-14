const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.getElementById("nav");
const topBtn = document.querySelector(".top-btn");

// fixed NAVBAR
export function setFixedNav() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // show the back to top button when scrolling past a certain point
  if (scrollHeight > 500) {
    topBtn.classList.add("show-btn");
  } else {
    topBtn.classList.remove("show-btn");
  }
}

// MOBILE NAV TOGGLE
export function activateMobileMenu() {
  hamburgerMenu.classList.toggle("animate");
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
}

// smooth scolling
export function getScrollHeight(e) {
  // prevent default behaviour
  e.preventDefault();
  // scroll to specific spot based on the href and removing the #
  const id = e.currentTarget.getAttribute("href").slice(1);
  console.log(id);
  const domElement = document.getElementById(id);

  // get the height of the navbar
  const navHeight = navbar.getBoundingClientRect().height;
  let position = domElement.offsetTop - navHeight;

  // if (!fixedNav) {
  //   position = position - navHeight;
  // }
  window.scrollTo({
    left: 0,
    top: position,
  });

  nav.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);
  hamburgerMenu.classList.remove("animate");
}
