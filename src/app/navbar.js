const mobileNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.getElementById("nav");
const body = document.querySelector("body");
const btnUp = document.getElementById("btn-up");

console.log(mobileNav);

// MOBILE NAV TOGGLE
export function activateMobileMenu() {
  hamburgerMenu.classList.toggle("animate");
  body.classList.toggle("no-scroll");
  const visibility = mobileNav.getAttribute("data-visible");
  if (visibility === "false") {
    mobileNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    mobileNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
}

// set fixed navbar on scroll
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
    btnUp.classList.add("show-btn");
  } else {
    btnUp.classList.remove("show-btn");
  }
}

// scroll to specific section on link click
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
  console.log(`domelement offset: ${position}`);
  console.log(`nav height: ${navHeight}`);

  // if the navbar isn't fixed (i.e. at the top of the page) do this
  const fixedNav = nav.classList.contains("fixed-nav");
  if (!fixedNav) {
    position = position - navHeight;
    console.log(`no nav = ${position}`);
  }
  window.scrollTo({
    left: 0,
    top: position,
  });

  nav.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);
  hamburgerMenu.classList.remove("animate");
}
