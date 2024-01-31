const navigation = document.getElementsByTagName("nav")[0];
const btnMenu = document.getElementById("btn-menu");
const boxAbout = document.getElementsByClassName("about")[0];

for (
  let i = 0;
  i < document.getElementsByClassName("menu-list__item").length;
  i++
) {
  document
    .getElementsByClassName("menu-list__item")
    [i].addEventListener("click", () => {
      document
        .getElementsByClassName("about__description")
        [i].classList.add("active");
      setTimeout(() => {
        document
          .getElementsByClassName("about__description")
          [i].classList.remove("active");
      }, 2000);
    });
}

setTimeout(() => {
  document.getElementsByClassName("unvisible")[1].classList.remove("unvisible");
  document.getElementsByClassName("unvisible")[0].classList.remove("unvisible");
}, 3010);

btnMenu.addEventListener("click", () => {
  navigation.classList.toggle("visible");
  checkBtnMenuCondition();
});

function checkBtnMenuCondition() {
  if (btnMenu.classList.value === "btn-menu btn-menu_cliked")
    btnMenu.classList.remove("btn-menu_cliked");
  else btnMenu.classList.add("btn-menu_cliked");
}

boxAbout.addEventListener("dragstart", (event) => {
  if (event.target.classList == "about__description")
    event.target.classList.add("move-element");
});
boxAbout.addEventListener("dragend", (event) => {
  event.target.classList.remove("move-element");
});

boxAbout.addEventListener("dragover", (event) => {
  event.preventDefault();
  const moveElement = boxAbout.getElementsByClassName("move-element")[0];
  const eventElement = event.target;
  const checkMove =
    moveElement !== eventElement &&
    eventElement.classList.contains("about__description");

  if (!checkMove) return;
  const nextElement =
    eventElement === moveElement.nextElementSibling
      ? eventElement.nextElementSibling
      : eventElement;
  boxAbout.insertBefore(moveElement, nextElement);
});

navigation.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navigation.classList.remove("visible");
    checkBtnMenuCondition();
  }
});
