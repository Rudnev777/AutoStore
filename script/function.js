import { ProductCard } from "./ProductCard.js";
import { path_names } from "./container.js";
import { catalogProducts } from "./container.js";
import { catalogProductsBasket } from "./container.js";
export function create_button_back() {
  const container = document.querySelector("header");
  const btn_back = document.createElement("button");
  btn_back.classList.add("button-back", "button-header");
  btn_back.textContent = "< ";
  btn_back.addEventListener("click", () => {
    window.history.back();
  });
  container?.prepend(btn_back);
}

export function create_footer() {
  create_button_basket();
  create_button_home_page();
  create_button_login_to_account();
}

function create_button_login_to_account() {
  const container = document.querySelector("footer");
  const btn_img_login_to_account = document.createElement("img");
  btn_img_login_to_account.classList.add("button-img-footer");
  btn_img_login_to_account.alt = "👤";
  btn_img_login_to_account.src = "public/people.png";
  container?.append(btn_img_login_to_account);

  btn_img_login_to_account.addEventListener("click", () => {
    showAuthDialog("login");
  });
}

function showAuthDialog(type = "login") {
  const body = document.querySelector("body");
  let dialog = document.querySelector(".dialog-login-to-account");

  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.classList.add("dialog-login-to-account");
    body?.append(dialog);
  }
  if (type == "login") {
    dialog.innerHTML = `
   <button id="close-auth-dialog" class="button-close-login-to-account">✕</button>
    <h2>Вход в аккаунт</h2>
     <section class="login-section">
      <input type="text" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <button class="btn-login">Войти</button>
      <button class="btn-register">Зарегистрироваться</button>
    </section>
    `;
    dialog.querySelector(".btn-register").addEventListener("click", () => {
      showAuthDialog("register");
    });
  } else if (type == "register") {
    dialog.innerHTML = `
   <button id="close-auth-dialog" class="button-close-login-to-account">✕</button>
    <h2>Регистрация аккаунта</h2>
           <section class="register-section">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Телефон" />
            <input type="text" placeholder="Логин" />
            <input type="password" placeholder="Пароль"/>
            <input type="password" placeholder="Повторите пароль"/>
            <button class="btn-register-submit">Зарегистрироваться</button>
            <button class="btn-login">Войти</button>
        </section>
    `;

    dialog.querySelector(".btn-login").addEventListener("click", () => {
      showAuthDialog("login");
    });
  }
  dialog.querySelector("#close-auth-dialog").addEventListener("click", () => {
    dialog.close();
  });
  dialog.showModal();
}

function create_button_basket() {
  const container = document.querySelector("footer");
  const btn_basket = document.createElement("img");
  btn_basket.classList.add("button-img-footer");
  btn_basket.alt = "🛒";
  btn_basket.src = "public/basket.png";
  btn_basket.addEventListener("click", () => {
    window.location.replace("basket.html");
  });
  container?.prepend(btn_basket);
  const filename = window.location.pathname.split("/").pop();
  if (filename == "basket.html") {
    btn_basket.style.boxShadow = "0 0 30px rgba(255, 255, 255, 0.8)";
  }
}

function create_button_home_page() {
  const container = document.querySelector("footer");
  const btn_home_page = document.createElement("img");
  btn_home_page.classList.add("button-img-footer");
  btn_home_page.alt = "🏠";
  btn_home_page.src = "public/home.png";
  btn_home_page.addEventListener("click", () => {
    window.location.replace("index.html");
  });
  container?.prepend(btn_home_page);
  const filename = window.location.pathname.split("/").pop();
  if (filename == "index.html") {
    btn_home_page.style.boxShadow = "0 0 30px rgba(255, 255, 255, 0.8)";
  }
}

export function create_header() {
  const container = document.querySelector("header");
  const section_search = document.createElement("section");
  const search_string = document.createElement("input");
  const btn_img_search = document.createElement("img");

  btn_img_search.alt = "🔍";
  btn_img_search.src = "public/search.png";
  btn_img_search.classList.add("button-search");

  search_string.classList.add("search-string");
  section_search.classList.add("section-search-string");

  const save_theme = localStorage.getItem("theme");
  if (save_theme) {
    document.documentElement.setAttribute("data-theme", save_theme);
  }
  const btn_img_theme = document.createElement("img");
  btn_img_theme.alt = "◐";
  btn_img_theme.src = "public/theme.png";
  btn_img_theme.classList.add("button-img-header");
  btn_img_theme.addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  section_search.append(search_string, btn_img_search);
  container?.append(section_search, btn_img_theme);
}

export function create_breadcrumbs() {
  const container = document.querySelector("main");
  const section = document.createElement("section");
  section.classList.add("section-breadcrumbs");
  let str = window.location.pathname; // получаем путь от начала до данной страницы

  let array_path = [
    ...new Set(str.split("/").filter((item) => item != "index.html")),
  ];

  for (let i = 0; i < array_path.length; i++) {
    let a = document.createElement("a");
    a.classList.add("a-breadcrumb");
    let path = "/";
    for (let j = 0; j <= i; j++) {
      path += array_path[j];
      if (j != 0 && j != i) {
        path += "/";
      }
    }
    const key = array_path[i].replace(".html", "");

    a.textContent = path_names.get(key || array_path[i]) || "Ошибка";
    a.href = path;
    if (i == array_path.length - 1) {
      a.classList.add("a-breadcrumb-last");
    }
    section.append(a);
    if (i != array_path.length - 1) {
      let separation = document.createElement("span");
      separation.textContent = " - ";
      section.append(separation);
    } else {
      a.classList.add("a-breadcrumb-last");
    }
  }

  container?.prepend(section);
}

export function create_product_card() {
  const container = document.querySelector("main");

  let section = document.getElementById("section-product_card-id");
  if (!section) {
    section = document.createElement("section");
    section.id = "section-product_card-id";
  }
  container?.append(section);
  section.classList.add("section-product_card");
  for (const product of catalogProducts) {
    const product_htmp = product.html_catalog_card();
    if (window.location.pathname.split("/").pop() == product.catalog + ".html")
      section.append(product_htmp);
    product_htmp.addEventListener("click", () => {
      if (!event.target.classList.contains("product-pard-button-buy")) {
        // Получаем индекс продукта из массива
        const productIndex = catalogProducts.indexOf(product);

        // Переходим на страницу с параметром ID
        window.location.href = `product.html?id=${productIndex}`;
      } else {
        const savedBasket = localStorage.getItem("basketItems");
        const catalogProductsBasketSave = savedBasket
          ? JSON.parse(savedBasket)
          : [];
        catalogProductsBasket.length = 0; // Очищаем массив
        catalogProductsBasket.push(...catalogProductsBasketSave);
        catalogProductsBasket.push(catalogProducts.indexOf(product));
        localStorage.setItem(
          "basketItems",
          JSON.stringify(catalogProductsBasket)
        );
        console.log(catalogProductsBasket);
        alert("Товар добавлен в корзину!");
      }
    });
  }
}

export function create_catalog(name, path_photo, path) {
  const container = document.querySelector("main");
  let section = document.getElementById("catalog-id");
  if (!section) {
    section = document.createElement("section");
    section.id = "catalog-id";
  }
  container?.append(section);
  section.classList.add("catalog");

  const catalog_product_card = document.createElement("section");
  catalog_product_card.classList.add("catalog-product-card");

  const catalog_product_card_photo = document.createElement("img");
  const catalog_product_card_name = document.createElement("span");
  catalog_product_card_name.classList.add("catalog-product-card-name");
  catalog_product_card_name.textContent = name;
  catalog_product_card_photo.classList.add("catalog-product-card-photo");
  catalog_product_card_photo.src = path_photo;

  catalog_product_card.append(
    catalog_product_card_photo,
    catalog_product_card_name
  );
  section.append(catalog_product_card);
  catalog_product_card.addEventListener("click", () => {
    window.location.href = path;
  });
}
