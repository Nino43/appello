const accordion = () => {
  const items = document.querySelectorAll(".faq-accordion__item");

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      item.classList.toggle("faq-accordion__item--active");
    });
  });
};

const tabs = () => {
  const tabs = document.querySelectorAll(".where-tabs .where-items");
  const btns = document.querySelectorAll(".where-navigation__btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = document.querySelector(
        `.where-tabs .where-items[data-item="${btn.dataset.btn}"]`
      );

      btns.forEach((item) =>
        item.classList.remove("where-navigation__btn--active")
      );

      tabs.forEach((item) => item.classList.remove("where-items--active"));

      btn.classList.add("where-navigation__btn--active");
      tab.classList.add("where-items--active");
    });
  });

  btns[0].click();
};

accordion();
tabs();
