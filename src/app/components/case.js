class Case {
  constructor() {
    this.element = document.querySelector(".case__content-step");
    this.elements = this.element.querySelectorAll("li");

    // Register IntersectionObserver
    const inView = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Add 'active' class if observation target is inside viewport
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("active");
        }
        // Remove 'active' class otherwise
        else {
          entry.target.classList.remove("active");
        }
      });
    });

    // Declares what to observe, and observes its properties.

    this.elements.forEach((el) => {
      inView.observe(el);
    });
  }
  init() {}
}

export default Case;
