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

export function getSliderRange(e) {
  slideValue = parseFloat(e.target.value);
  getActiveSlide(slideValue);
}
