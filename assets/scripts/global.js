(function () {
  const currentLocation = location.href;
  const menuItem = document.getElementsByClassName("nav-item");
  const menuLength = menuItem.length;
  for (i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className += " active";
    }
  }
})();
