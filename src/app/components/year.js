class CurrentYear {
  constructor() {
    this.getCurrentYear();
  }
  getCurrentYear() {
    let year = new Date().getFullYear();
    let yearElms = document.querySelectorAll('[data-dynamic="year"]');

    yearElms.forEach((elm) => {
      elm.innerText = year;
    });
  }
}

export default CurrentYear;
