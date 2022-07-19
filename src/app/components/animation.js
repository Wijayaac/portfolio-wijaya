import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

class StaggerText {
  constructor() {
    let scrollTexts = gsap.utils.toArray('[data-motion="staggerTitle"]');
    gsap.registerPlugin(ScrollTrigger);
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
}

export default StaggerText;
