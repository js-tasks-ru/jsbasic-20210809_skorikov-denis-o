function initCarousel() {

  const carouselArrowRight = document.querySelector(".carousel__arrow_right");
  const carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  const carouselInner = document.querySelector(".carousel__inner");


  let slideWidth = 0;
  let clickCarousel = 0;

  checkClickCarouselArrow();
  function checkClickCarouselArrow() {
    if (clickCarousel == 0) {
      carouselArrowLeft.style.display = "none";
    } else if (clickCarousel == carouselInner.childElementCount - 1) {
      carouselArrowRight.style.display = "none";
    } else {
      carouselArrowLeft.style.display = "";
      carouselArrowRight.style.display = "";
    }
  }

  document.addEventListener('click', function (event) {
    let carouselArrow = event.target.closest(".carousel__arrow");
    if (!carouselArrow) {
      return;
    }

    if (carouselArrow.classList.contains("carousel__arrow_right")) {
      clickCarousel += 1;
      checkClickCarouselArrow();
      slideWidth += carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(-${slideWidth}px)`;
    } else {
      clickCarousel -= 1;
      checkClickCarouselArrow();
      slideWidth -= carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(-${slideWidth}px)`;
    }
  })
}
