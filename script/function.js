const path_names = new Map([
  ["", "Главная"],
  ["index", "Главная"],
  ["auto_goods", "Автотовары"],
  ["auto_parts", "Автозапчасти"],
  ["tires", "Шины"],
  ["disks", "Диски"],
  ["battery", "Аккумуляторы"],
  ["detailling", "Детейлинг"],
]);

let id = 1;

const categories = new Array("battery", "disks", "tires", "detailling");

class ProductCard {
  constructor(price, name, image, description, catalog) {
    this.id = id++;
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
    photo_product.classList.add('window-product-photo');
    const price_product = document.createElement("span");
    price_product.classList.add('window-product-span');
    const name_product = document.createElement("span");
    name_product.classList.add('window-product-span');
    const description_product = document.createElement("span");
    description_product.classList.add('window-product-span');

    photo_product.src = this.image[0];
    price_product.textContent = "Цена товара: " + this.price+ "₽";
    name_product.textContent ="Имя товара: " + this.name;
    description_product.textContent ="Описание: " + this.description;

    section.append(
      name_product,
      photo_product,
      price_product,
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
}

export let catalogProducts = [
  new ProductCard(
    4500,
    "Аккумулятор Varta",
    ["product/akb-varta.jpg"],
    "Varta Blue Dynamic - высококачественный аккумулятор для автомобилей с повышенным энергопотреблением. Емкость 75 А/ч, пусковой ток 680 А. Технология Calcium Plus обеспечивает надежный запуск в любых погодных условиях. Подходит для автомобилей с системой Start-Stop.",
    categories[0]
  ),
  new ProductCard(
    5200,
    "Аккумулятор Bosch",
    ["product/akb-bosch.jpg"],
    "Bosch S5 Silver - премиальный аккумулятор немецкого производства. Емкость 80 А/ч, пусковой ток 800 А. Инновационная технология Silver позволяет увеличить количество циклов заряда-разряда. Идеален для современных автомобилей с большим количеством электроники.",
    categories[0]
  ),
  new ProductCard(
    3800,
    "Аккумулятор Delta",
    ["product/delta.jpeg"],
    "Delta GX - японский аккумулятор с технологией EFB (Enhanced Flooded Battery). Емкость 70 А/ч, пусковой ток 600 А. Усиленные пластины обеспечивают устойчивость к глубоким разрядам. Отличное решение для автомобилей с базовой системой Start-Stop.",
    categories[0]
  ),
  new ProductCard(
    12500,
    'Диски литые 17"',
    ["product/disks-lit.jpg"],
    "Легкосплавные литые диски из алюминиевого сплава. Диаметр 17 дюймов, вылет ET45, ширина 7.5J, крепление 5x114.3. Современный дизайн с многолучевой конструкцией. Повышенная прочность при сниженном весе. Подходят для большинства современных седанов и кроссоверов.",
    categories[1]
  ),
  new ProductCard(
    8500,
    "Диски штампованные",
    ["product/disks-htamp.jpeg"],
    "Штампованные стальные диски 16 дюймов. Классическое решение для бюджетных автомобилей. Высокая ремонтопригодность и прочность. В комплекте с декоративными колпаками. Подходят для эксплуатации в сложных дорожных условиях. Крепление 4x100, ширина 6.5J.",
    categories[1]
  ),
  new ProductCard(
    6500,
    "Диски стальные",
    ["product/disks-stal.jpg"],
    "Стальные диски R15 для компактных автомобилей. Диаметр 15 дюймов, ширина 6J, вылет ET38. Простая и надежная конструкция. Отличный выбор для зимней резины. Устойчивы к механическим повреждениям. Легко ремонтируются при деформации.",
    categories[1]
  ),
  new ProductCard(
    9500,
    "Летняя резина Bridgestone",
    ["product/tires-bridgestone.jpg"],
    "Bridgestone Turanza T005 - летние шины премиум-класса. Размер 205/55 R16 91V. Асимметричный рисунок протектора обеспечивает отличное сцепление на мокрой и сухой дороге. Технология NanoPro-Tech снижает сопротивление качению. Комфорт, безопасность и экономия топлива.",
    categories[2]
  ),
  new ProductCard(
    11200,
    "Зимняя резина Michelin",
    ["product/tires-michelin.jpg"],
    "Michelin X-Ice North 4 - зимние шипованные шины для суровых зимних условий. Размер 205/55 R16 94T. 150 шипов на каждую шину обеспечивают уверенное сцепление на льду и укатанном снегу. Специальный состав резины сохраняет эластичность даже при -40°C. Система самоочистки протектора.",
    categories[2]
  ),
  new ProductCard(
    850,
    "Полироль для кузова",
    ["product/polirol.jpg"],
    "Полироль-воск для автомобиля с нано-защитой. Образует прочное грязеотталкивающее покрытие. Заполняет мелкие царапины и восстанавливает блеск. Содержит УФ-фильтры для защиты краски от выцветания. Легко наносится и снимается. Объем 500 мл, хватает на 3-4 обработки.",
    categories[3]
  ),
  new ProductCard(
    450,
    "Ароматизатор салона",
    ["product/aromo.jpg"],
    "Ароматизатор для автомобиля 'Свежесть Альп' с системой клип-картридж. Постоянное равномерное распространение аромата. Картриджа хватает на 30-45 дней. Регулируемая интенсивность запаха. Безопасен для аллергиков. Не содержит аэрозолей и газа. Приятный ненавязчивый аромат.",
    categories[3]
  ),
  new ProductCard(
    950,
    "Воск для автомобиля",
    ["product/vosk.png"],
    "Жидкий воск-полироль с эффектом гидрофобизации. Создает эффект 'дождевой грязеотталкивающей пленки'. Защищает лакокрасочное покрытие от агрессивных воздействий окружающей среды. Облегчает мойку автомобиля. Эффект держится до 2 месяцев. Подходит для всех типов ЛКП.",
    categories[3]
  ),
];


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
    const body = document.querySelector("body");

    const dialog = document.createElement("dialog");
    dialog.classList.add("dialog-login-to-account");
    dialog.innerHTML = `
    <button id = "close-login-to-account" class = "button-close-login-to-account">✕</button>
        <h2>Вход в аккаунт</h2>
        
    `;

    body?.append(dialog);

    dialog.showModal();

    const closeBtn = dialog.querySelector("#close-login-to-account");

    closeBtn.addEventListener("click", () => {
      dialog.close();
    });
  });
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
  const section = document.createElement("section");
  const search_string = document.createElement("input");
  const btn_img_search = document.createElement("img");

  btn_img_search.alt = "🔍";
  btn_img_search.src = "public/search.png";
  btn_img_search.classList.add("button-search");

  search_string.classList.add("search-string");
  section.classList.add("section-search-string");
  const btn_img_theme = document.createElement("img");
  btn_img_theme.alt = "◐";
  btn_img_theme.src = "public/theme.png";
  btn_img_theme.classList.add("button-img-header");
  btn_img_theme.addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  });

  section.append(search_string, btn_img_search);
  container?.append(section, btn_img_theme);
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
