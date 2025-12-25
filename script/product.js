import * as Utils from "./function.js"
import { ProductCard } from './ProductCard.js';
import { catalogProducts } from "./container.js";
Utils.create_footer();
Utils.create_button_back();
Utils.create_header();

 const url_params = new URLSearchParams(window.location.search).get('id');
 let product;
for(const el of catalogProducts){
    if(el.id == url_params){
        product = el;
        break;
    }
}
const container = document.querySelector("main");
 const product_html = product.window_product()
container.append(product_html);
