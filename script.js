// Nav dropdown
const navDropdown = document.querySelector(".nav-dropdown-content");
let dropdownIsDown = false;

function toggleNavDropdown() {
  if (!dropdownIsDown) {
    navDropdown.style.display = "flex";
  } else {
    navDropdown.style.display = "none";
  }
  dropdownIsDown = !dropdownIsDown;
}

// Shopping cart
const shoppingCartHtml = document.querySelector(".shopping-cart");
let shoppingCartIsShown = false;

function toggleShoppingCart() {
  if (!shoppingCartIsShown) {
    shoppingCartHtml.style.display = "block";
  } else {
    shoppingCartHtml.style.display = "none";
  }
  shoppingCartIsShown = !shoppingCartIsShown;
}

let totalPrice = 0;
let shoppingCart = [];
//   [
//     {
//       name: string,
//       price: number,
//       amount: number,
//     },
//   ]

function addProduct(name, price) {
  totalPrice += price;

  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].name === name) {
      shoppingCart[i].amount += 1;
      updateShoppingCartHtml();
      updateLocalStorage();
      return;
    }
  }

  const newProduct = {
    name: name,
    price: price,
    amount: 1,
  };
  shoppingCart.push(newProduct);
  updateShoppingCartHtml();
  updateLocalStorage();
}

function removeProduct(name) {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].name == name) {
      shoppingCart[i].amount -= 1;
      totalPrice -= shoppingCart[i].price;

      if (shoppingCart[i].amount == 0) {
        shoppingCart.splice(i, 1);
      }

      updateShoppingCartHtml();
      updateLocalStorage();
      return;
    }
  }
}

const products = document.querySelector(".shopping-cart_products");

function updateShoppingCartHtml() {
  products.innerHTML = "";

  if (shoppingCart.length == 0) {
    const info = document.createElement("p");
    info.innerHTML = "Du har inga varor i kundvagnen";
    info.classList.add("shopping-cart_info");

    products.appendChild(info);
    return;
  }

  const info = document.createElement("p");
  info.innerHTML = "Din kundvagn";
  info.classList.add("shopping-cart_info");

  products.appendChild(info);

  for (let i = 0; i < shoppingCart.length; i++) {
    const product = shoppingCart[i];

    const amount = document.createElement("p");
    amount.innerHTML = "(" + product.amount + ")";
    amount.classList.add("shopping-cart_amount");

    const name = document.createElement("p");
    name.innerHTML = product.name;
    name.classList.add("shopping-cart_name");

    const price = document.createElement("p");
    price.innerHTML = product.price * product.amount + " kr";
    price.classList.add("shopping-cart_price");

    const removeImg = document.createElement("img");
    removeImg.setAttribute("src", "bilder/minus.svg");
    removeImg.setAttribute("alt", "ta bort produkt");
    const remove = document.createElement("button");
    remove.appendChild(removeImg);
    remove.classList.add("shopping-cart_remove");
    remove.setAttribute("onclick", `removeProduct('${product.name}')`);
    remove.setAttribute("title", "Ta bort från kundvagn");

    const productHtml = document.createElement("div");
    productHtml.appendChild(amount);
    productHtml.appendChild(name);
    productHtml.appendChild(price);
    productHtml.appendChild(remove);

    products.appendChild(productHtml);
  }

  const totalInfo = document.createElement("p");
  totalInfo.innerHTML = "Summa";
  const totalPriceHtml = document.createElement("p");
  totalPriceHtml.innerHTML = `${totalPrice} kr`;

  const total = document.createElement("div");
  total.classList.add("shopping-cart_total-price");
  total.appendChild(totalInfo);
  total.appendChild(totalPriceHtml);

  products.appendChild(total);
}

function updateLocalStorage() {
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  localStorage.setItem("total-price", totalPrice);
}

if (localStorage.getItem("shopping-cart") != null) {
  shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
}
if (localStorage.getItem("total-price") != null) {
  totalPrice = parseInt(localStorage.getItem("total-price"));
}
updateShoppingCartHtml();
