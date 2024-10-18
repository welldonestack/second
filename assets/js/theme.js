document.addEventListener("DOMContentLoaded", function() {
  const slider = new IdealImageSlider.Slider({
    selector: '#slider3',
    effect: 'slide',
    interval: 3000,
    transitionDuration: 700,
    height: "16:9"
  });
  slider.start();

  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.setAttribute("loading", "lazy");
    img.onload = function() {
      img.classList.add("dissolve");
    };
    if (img.complete) {
      img.classList.add("dissolve");
    }
  });

  const pageUpButton = document.getElementById("pageUp");
  if (pageUpButton) {
    pageUpButton.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  } else {
    console.error("Page Up button not found!");
  }
});
