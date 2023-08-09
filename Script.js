const listNav = document.querySelector("#listNav");
const listNavBlank = document.querySelector("#listNavBlank");
const menu = document.querySelector("#menu");
const homeIcon = document.querySelector("#homeIcon");
const blankIcon = document.querySelector("#blankIcon");
const state = {
  menu: false,
  screen: window.screen.width,
};
let timeoutId;

function menuOnOff() {
  state.menu = !state.menu;
  state.screen = window.screen.width;
  if (state.screen > 1200) {
    menu.style.display = "none";
    listNav.style.display = "flex";
    listNavBlank.style.display = "none";
    homeIcon.style.display = "block";
    blankIcon.style.display = "none";

    return;
  }
  if (state.screen <= 1200 && !state.menu) {
    menu.style.display = "block";
    listNav.style.display = "flex";
    homeIcon.style.display = "none";
    blankIcon.style.display = "block";
    listNavBlank.style.display = "none";
    return;
  }
  if (state.screen <= 1200 && state.menu) {
    menu.style.display = "block";
    listNav.style.display = "none";
    homeIcon.style.display = "block";
    blankIcon.style.display = "none";
    listNavBlank.style.display = "flex";
    return;
  }

}

function card(count) {
  const parentTab = document.querySelector("#allTab");
  const ListTab = [...Array.from(parentTab.children)];
  const ListTextCard = [...Array.from(document.querySelectorAll(".textCard"))];
  ListTab[0].style.backgroundColor = "black";
  ListTab[1].style.backgroundColor = "black";
  ListTab[2].style.backgroundColor = "black";
  ListTextCard[0].style.display = "none";
  ListTextCard[1].style.display = "none";
  ListTextCard[2].style.display = "none";
  ListTextCard[count].style.display = "block";
  ListTab[parseInt(count)].style.backgroundColor = "#ff8b38";
}

card(0);
// run to change color 1st load

window.addEventListener("resize", ()=>{
    clearTimeout(timeoutId);
    timeoutId = setTimeout(menuOnOff,1000)
});
menuOnOff()
