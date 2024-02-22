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

// Shopping cart
let total_price = 0;
let shopping_cart = [];

function addProduct(name, price) {
  total_price += price;

  for (let i = 0; i < shopping_cart.length; i++) {
    if (shopping_cart[i].name === name) {
      shopping_cart[i].amount += 1;
      alert(JSON.stringify(shopping_cart));
      return;
    }
  }

  let newProduct = {
    name: name,
    price: price,
    amount: 1,
  };
  shopping_cart.push(newProduct);
  alert(JSON.stringify(shopping_cart));
}
