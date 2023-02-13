import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Splitting from "splitting";

class Motion {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.staggerTitle();
    this.fadeIn();
  }
  staggerTitle() {
    let scrollTexts = gsap.utils.toArray('[data-motion="staggerTitle"]');
    if (!scrollTexts[0]) {
      return;
    }
    scrollTexts.forEach((elm) => {
      Splitting({
        /* target: String selector, Element, Array of Elements, or NodeList */
        target: elm,
        /* by: String of the plugin name */
        by: "chars",
        /* key: Optional String to prefix the CSS variables */
        key: null,
      });

      let stagger = elm.querySelectorAll("span");

      gsap.set(stagger, { top: 200, opacity: 0 });

      ScrollTrigger.create({
        trigger: elm,
        onEnter: () => {
          gsap.to(stagger, {
            duration: 0.6,
            top: 0,
            opacity: 1,
            ease: "power4(0.4, 1)",
            stagger: 0.025,
          });
        },
      });
    });
  }
  fadeIn() {
    let scrollFade = gsap.utils.toArray('[data-motion="fadeIn"]');
    if (!scrollFade[0]) {
      return;
    }
    scrollFade.forEach((elm) => {
      gsap.set(elm, { opacity: 0 });

      ScrollTrigger.create({
        trigger: elm,
        onEnter: () => {
          gsap.to(elm, {
            duration: 1.7,
            opacity: 1,
            delay: 0.5,
            ease: "power4(0.4, 1)",
            stagger: 0.4,
          });
        },
      });
    });
  }
}

export default Motion;
