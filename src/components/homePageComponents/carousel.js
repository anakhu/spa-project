/* eslint-disable class-methods-use-this */
const carouselWrapper = document.getElementById('js-carousel-wrapper');
const carousel = document.getElementById('js-carousel');
const carouselImages = document.getElementsByClassName('carousel__photo');
const carouselBtnNext = document.getElementById('js-carousel-btn-next');
const carouselBtnPrev = document.getElementById('js-carousel-btn-prev');

class Carousel {
  constructor() {
    this.init();
  }

  init() {
    const carouselImagesList = Array.from(carouselImages);

    carouselImagesList.forEach((image, index) => {
      image.setAttribute('id', index);
    });


    carousel.addEventListener('click', (e) => {
      const activeImage = this.getCarouselActiveImage();
      const activeImageId = Number(activeImage.id);

      if (e.target === carouselBtnNext) {
        const nextImageActive = carouselImagesList
          .find((img) => img.id === `${activeImageId + 1}`);

        if (nextImageActive) {
          activeImage.classList.remove('active');
          nextImageActive.classList.add('active');
          this.toggleClassesOnCarouselMove(nextImageActive.id);
        }
      }

      if (e.target === carouselBtnPrev) {
        const prevImageActive = carouselImagesList
          .find((img) => img.id === `${activeImageId - 1}`);

        if (prevImageActive) {
          activeImage.classList.remove('active');
          prevImageActive.classList.add('active');
          this.toggleClassesOnCarouselMove(prevImageActive.id);
        }
      }
    });
  }

  getCarouselActiveImage() {
    const activeImage = document.querySelector('.carousel__photo.active');

    return activeImage;
  }

  clearSupplClasses(img) {
    img.classList.remove('prev', 'next');
  }

  toggleClassesOnCarouselMove(activeImageId) {
    const carouselImagesList = Array.from(carouselImages);

    carouselImagesList.forEach((img) => {
      this.clearSupplClasses(img);

      if (Number(img.id) > activeImageId) {
        img.classList.add('next');
      } else if (Number(img.id) < activeImageId) {
        img.classList.add('prev');
      }
    });
  }
}

export default Carousel;
