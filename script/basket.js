import * as Utils from "./function.js";
import { catalogProducts } from "./container.js";
Utils.create_footer();
Utils.create_header();
Utils.create_button_back();

const savedBasket = localStorage.getItem("basketItems");
const catalogProductsBasket = JSON.parse(savedBasket);
console.log(catalogProductsBasket);
const container = document.querySelector("main");
let section = document.getElementById("section-product_card-id");
if (!section) {
  section = document.createElement("section");
  section.id = "section-product_card-id";
}
container?.append(section);
section.classList.add("section-product_card");
for (const el of catalogProducts) {
  for (const el_basket of catalogProductsBasket) {
    if (el.id == el_basket) {
      const product_htmp = el.html_catalog_card_basket();
      section.append(product_htmp);
    }
  }
}
