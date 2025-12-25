export class ProductCard {
  static lastId = 0;
  constructor(price, name, image, description, catalog) {
    this.id = ProductCard.lastId++;
    this.price = price;
    this.name = name;
    this.image = image;
    this.catalog = catalog;
    this.description = description;
  }
  window_product() {
    const section = document.createElement("div");
    section.classList.add("window-product");
    const photo_product = document.createElement("img");
    photo_product.classList.add("window-product-photo");
    const price_product = document.createElement("span");
    price_product.classList.add("window-product-span");
    const name_product = document.createElement("span");
    name_product.classList.add("window-product-span");
    const description_product = document.createElement("span");
    description_product.classList.add("window-product-span");
    const btn_buy_product = document.createElement("buttton");
    btn_buy_product.classList.add("product-pard-button-buy");
    btn_buy_product.textContent = "Купить";
    photo_product.src = this.image[0];
    price_product.textContent = "Цена товара: " + this.price + "₽";
    name_product.textContent = "Имя товара: " + this.name;
    description_product.textContent = "Описание: " + this.description;

    section.append(
      name_product,
      photo_product,
      price_product,
      btn_buy_product,
      description_product
    );
    return section;
  }
  html_catalog_card() {
    const product_card = document.createElement("div");
    product_card.classList.add("product-card");
    const photo_product = document.createElement("img");
    const price_product = document.createElement("span");
    const name_product = document.createElement("span");
    const btn_buy_product = document.createElement("buttton");

    price_product.textContent = this.price + "₽";
    name_product.textContent = this.name;
    photo_product.src = this.image[0];

    photo_product.classList.add("product-pard-photo");
    btn_buy_product.classList.add("product-pard-button-buy");
    price_product.classList.add("product-pard-price");
    name_product.classList.add("product-pard-name");
    btn_buy_product.textContent = "Купить";
    product_card.append(
      photo_product,
      price_product,
      name_product,
      btn_buy_product
    );

    return product_card;
  }

  html_catalog_card_basket() {
    const product_card = document.createElement("div");
    product_card.classList.add("product-card");
    const photo_product = document.createElement("img");
    const price_product = document.createElement("span");
    const name_product = document.createElement("span");

    price_product.textContent = this.price + "₽";
    name_product.textContent = this.name;
    photo_product.src = this.image[0];

    photo_product.classList.add("product-pard-photo");

    price_product.classList.add("product-pard-price");
    name_product.classList.add("product-pard-name");

    product_card.append(
      photo_product,
      price_product,
      name_product,

    );

    return product_card;
  }
}
