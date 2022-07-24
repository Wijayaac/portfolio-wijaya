import Swiper, { Autoplay } from "swiper";

class Stack {
  constructor() {
    this.init();
    this.stackElm = "";
  }
  init() {
    this.stackElm = document.querySelector(".stack__lists");
    if (!this.stackElm) {
      return;
    }

    const stackSwiper = new Swiper(this.stackElm, {
      spaceBetween: 40,

      centeredSlides: true,
      loop: true,
      loopedSlides: 4,
      autoplay: {
        delay: 3000,
      },
      modules: [Autoplay],
      breakpoints: {
        320: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 6,
        },
      },
    });
  }
}

export default Stack;
