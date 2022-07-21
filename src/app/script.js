import HeaderNavigation from "./components/header";
import Stack from "./components/stacks";
import Motion from "./components/animation";
import Case from "./components/case";
document.addEventListener("DOMContentLoaded", () => {
  new Motion();
  new HeaderNavigation();
  new Stack();
  new Case();
});
