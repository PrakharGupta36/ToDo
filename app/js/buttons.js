let infoButtons = document.getElementsByClassName("info-buttons");
completed.style.display = "none";

for (let i = 0; i < infoButtons.length; i++) {
  infoButtons[i].onclick = () => {
    if (infoButtons[0].attributes[1].value === "active info-buttons") {
      completed.style.display = "none";
      todoWrapper.style.display = "grid";
      infoButtons[0].setAttribute("class", "info-buttons");
      infoButtons[i].setAttribute("class", "active info-buttons");
    } else if (infoButtons[1].attributes[1].value === "active info-buttons") {
      infoButtons[1].setAttribute("class", "info-buttons");
      infoButtons[i].setAttribute("class", "active info-buttons");
    } else if (infoButtons[2].attributes[1].value === "active info-buttons") {
      todoWrapper.style.display = "none";
      completed.style.display = "grid";
      infoButtons[2].setAttribute("class", "info-buttons");
      infoButtons[i].setAttribute("class", "active info-buttons");
    }
  };
}
