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
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // show the back to top button when scrolling past a certain point
  if (scrollHeight > 600) {
    btnUp.classList.add("show-btn");
  } else {
    btnUp.classList.remove("show-btn");
  }
}

// // scroll to specific section on link click
// export function getScrollHeight(e) {
//   // prevent default behaviour
//   e.preventDefault();
//   // scroll to specific spot based on the href and removing the #
//   const id = e.currentTarget.getAttribute("href").slice(1);
//   console.log(id);
//   const domElement = document.getElementById(id);
//   console.log(domElement);

//   const navHeight = navbar.getBoundingClientRect().height;
//   console.log(navHeight);
//   const fixedNav = navbar.classList.contains("fixed-nav");
//   //   if the navbar IS fixed, subtract the navheight as its fixed, so its taken out of the normal flow & height of the document
//   let position = domElement.offsetTop - navHeight;

//   // if the nav is NOT fixed (i.e. user at the veryt op of the page)
//   if (!fixedNav) {
//     position = position - navHeight;
//   }

//   window.scrollTo({
//     left: 0,
//     top: position,
//   });

//   //   close mobile menu
//   closeMobileNav();
// }

export function closeMobileNav() {
  navLinks.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);
  hamburgerMenu.classList.remove("animate");
}
