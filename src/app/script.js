import SweetScroll from "sweet-scroll";

import HeaderNavigation from "./components/header";
import Motion from "./components/animation";
import CurrentYear from "./components/year";
// import Stack from "./components/stacks";
// import Case from "./components/case";
document.addEventListener("DOMContentLoaded", () => {
  const sweetScroll = new SweetScroll({
    header: "header.header",
    easing: "linear",
    duration: 500,
  });
  new Motion();
  new HeaderNavigation();
  // new Stack();
  new CurrentYear();
  console.clear();
});
