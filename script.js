// Nav dropdown
let nav_dropdown = document.querySelector(".nav-dropdown-content");
let dropdown_is_down = false;

function toggleNavDropdown() {
  if (!dropdown_is_down) {
    nav_dropdown.style.display = "flex";
  } else {
    nav_dropdown.style.display = "none";
  }
  dropdown_is_down = !dropdown_is_down;
}
