// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";

// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { store, setupStore } from "./src/store.js";
// import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

const init = async () => {
  const products = await fetchProducts();
  console.log(products);
  if (products) {
    // add products to the store
    setupStore(products);
    // console.log(store);
  }
};

window.addEventListener("DOMContentLoaded", init);
