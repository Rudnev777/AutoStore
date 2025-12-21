import * as Utils from "./function.js"
Utils.create_footer();
Utils.create_button_back();
Utils.create_header();

 const url_params = new URLSearchParams(window.location.search).get('id');
 let product;
for(const el of Utils.catalogProducts){
    if(el.id == url_params){
        product = el;
        break;
    }
}
const container = document.querySelector("main");
 const product_html = product.window_product()
container.append(product_html);
