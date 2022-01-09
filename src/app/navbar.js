export default function navbarOnScroll() {
  const navbar = document.querySelector(".nav-wrapper");
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
    }
  };
}
