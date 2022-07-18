import gsap from "gsap";

class StaggerText {
  constructor() {
    let words = gsap.utils.toArray("span.words");
    words.forEach((elm) => {
      let tl = gsap.timeline();
      tl.from(elm, {
        duration: 2,
        top: -200,
        opacity: 0,
        delay: 0.5,
        ease: "power4(0.4, 1)",
        stagger: 1.5,
      });
      tl.to(elm, {
        duration: 1,
        top: 0,
        opacity: 1,
        delay: 2,
        ease: "power4.in",
        stagger: 1,
      });
    });
  }
}

export default StaggerText;
