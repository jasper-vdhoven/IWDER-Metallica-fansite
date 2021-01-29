function toggleSide() {
  let sideItems = document.getElementsByClassName("side-navigation-item");
  for (i = 0; i < sideItems.length; i += 1) {
    sideItems[i].classList.toggle("side-navigation-item-on");
  }
}
