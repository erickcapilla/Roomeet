const btn_menu = document.getElementById("btn_menu");
const arrow = document.getElementById("arrow");
const menu_card = document.getElementById("menu");

btn_menu.addEventListener("click", () => {
  if (!arrow.classList.contains("arrow-down")) {
    arrow.classList.add("arrow-down");
    menu_card.classList.add("menu-active");
  } else {
    arrow.classList.remove("arrow-down");
    menu_card.classList.remove("menu-active");
  }
});

let slider = document.getElementById("slider");
let item = document.querySelectorAll(".items-slider");

function Next() {
  let itemFirst = document.querySelectorAll(".items-slider")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", itemFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

setInterval(() => {
  Next();
}, 3500);

const items_btn = document.querySelectorAll("#item");

items_btn.forEach((item) => {
  item.addEventListener("click", () => {
    if (!window.scroll(0, document.body.scrollHeight)) {
      window.scroll(0, document.body.scrollHeight);
      arrow.classList.remove("arrow-down");
      menu_card.classList.remove("menu-active");
    }
  });
});
