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
      slidesPerView: 4,
      centeredSlides: true,
      loop: true,
      loopedSlides: 4,
      autoplay: {
        delay: 3000,
      },
      modules: [Autoplay],
    });
  }
}

export default Stack;
