const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const carousel = document.querySelector(".testimonials-inner");

let actualSlide = 0;
const slideSize = carousel.clientWidth;
const maxSlide = Math.floor(carousel.scrollWidth / slideSize);

leftArrow.addEventListener("click", () => slide("left"));
rightArrow.addEventListener("click", () => slide("right"));

function slide(where) {
  if (where == "left" && actualSlide > 0) actualSlide--;
  if (where == "right" && actualSlide < maxSlide) actualSlide++;

  adjustSlider();
}

function adjustSlider() {
  carousel.style.left = `${-(slideSize * actualSlide)}px`;
}
