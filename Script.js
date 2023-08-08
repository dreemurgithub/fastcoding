const listNav = document.querySelector("#listNav");
const listNavBlank = document.querySelector("#listNavBlank");
const menu = document.querySelector("#menu")
const homeIcon = document.querySelector("#homeIcon")
function menuOnOff() {

    if (listNav.style.display === "none" || listNav.style.display === "") {
        listNav.style.display = "flex";
        homeIcon.style.visibility = 'hidden'
        listNavBlank.style.display = 'none'

        // homeIcon.style.visibility = 'hidden'
        return;
    }
    listNav.style.display = "none";
    listNavBlank.style.display = 'flex'
    homeIcon.style.visibility = 'visible'
    //   homeIcon.style.visibility = 'visible'
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

window.addEventListener('resize', () => {
    if (listNav.style.display === "none" || listNav.style.display === "") menuOnOff()
})
