import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

class Motion {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.staggerTitle();
    this.fadeIn();
  }
  staggerTitle() {
    let scrollTexts = gsap.utils.toArray('[data-motion="staggerTitle"]');
    scrollTexts.forEach((elm) => {
      let stagger = elm.querySelectorAll("span");

      gsap.set(stagger, { top: 200, opacity: 0 });

      ScrollTrigger.create({
        trigger: elm,
        start: "top 60%",
        end: "bottom 50%",
        onEnter: () => {
          gsap.to(stagger, {
            duration: 1.5,
            top: 0,
            opacity: 1,
            ease: "power4(0.4, 1)",
            stagger: 0.3,
          });
        },
      });
    });
  }
  fadeIn() {
    let scrollFade = gsap.utils.toArray('[data-motion="fadeIn"]');

    scrollFade.forEach((elm) => {
      gsap.set(elm, { opacity: 0 });

      ScrollTrigger.create({
        trigger: elm,
        onEnter: () => {
          gsap.to(elm, {
            duration: 1.7,
            opacity: 1,
            delay: 1,
            ease: "power4(0.4, 1)",
            stagger: 0.4,
          });
        },
      });
    });
  }
}

export default Motion;
