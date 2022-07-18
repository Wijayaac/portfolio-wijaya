import gsap from "gsap";

class StaggerText {
  constructor() {
    let tl = gsap.timeline();
    tl.from("[data-motion='staggerTitle']", {
      duration: 1.5,
      top: 200,
      opacity: 0,
      delay: 0.5,
      ease: "power4(0.4, 1)",
      stagger: 0.6,
    });
    tl.to("[data-motion='staggerTitle']", {
      duration: 1,
      top: 0,
      opacity: 1,
      delay: 2,
      ease: "power4.in",
      stagger: 0.1,
    });
  }
}

export default StaggerText;
