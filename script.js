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
      updateShoppingCartHtml();
      return;
    }
  }

  const newProduct = {
    name: name,
    price: price,
    amount: 1,
  };
  shopping_cart.push(newProduct);
  updateShoppingCartHtml();
}

let products = document.querySelector(".shopping-cart_products");

function updateShoppingCartHtml() {
  products.innerHTML = "";

  for (let i = 0; i < shopping_cart.length; i++) {
    const product = shopping_cart[i];

    const amount_html = document.createElement("p");
    amount_html.innerHTML = "(" + product.amount + ")";
    amount_html.classList.add("shopping-cart_amount");

    const name_html = document.createElement("p");
    name_html.innerHTML = product.name;
    name_html.classList.add("shopping-cart_name");

    const price_html = document.createElement("p");
    price_html.innerHTML = product.price * product.amount + " kr";
    price_html.classList.add("shopping-cart_price");

    const product_html = document.createElement("div");
    product_html.appendChild(amount_html);
    product_html.appendChild(name_html);
    product_html.appendChild(price_html);

    products.appendChild(product_html);
  }
}
