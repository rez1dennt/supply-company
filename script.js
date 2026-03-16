const defaultProductId = "shchit-raspredelitelnyy-shrn-36";

const productCatalogEntries = [
  {
    id: "shchit-raspredelitelnyy-shrn-36",
    name: "Щит распределительный ЩРН-36",
    categoryId: "category-electro",
    categoryName: "Электротехническое оборудование",
    subcategory: "Щитовое оборудование",
    manufacturer: "IEK",
    image: "images/product-switchboard-main.svg",
    mediaImage: "images/product-switchboard-detail.svg",
    summary: "Навесной металлический щит для распределения питания и установки модульной защиты на промышленных и административных объектах.",
    specs: [
      ["Подкатегория", "Щитовое оборудование"],
      ["Тип монтажа", "Навесной"],
      ["Количество модулей", "36"],
      ["Материал корпуса", "Сталь с порошковым покрытием"],
      ["Степень защиты", "IP31"],
      ["Номинальное напряжение", "230/400 В"],
    ],
    gallery: [
      {
        src: "images/product-switchboard-main.svg",
        alt: "Щит распределительный ЩРН-36, основной вид",
        badge: "Основной вид",
        title: "Щит распределительный ЩРН-36",
        caption: "Навесной щит для распределения питания и защиты групповых линий на промышленном объекте.",
      },
      {
        src: "images/product-switchboard-angle.svg",
        alt: "Щит распределительный ЩРН-36, вид под углом",
        badge: "Корпус",
        title: "Вид корпуса под углом",
        caption: "Общий габарит изделия, посадочные отверстия и компоновка внешней части корпуса.",
      },
      {
        src: "images/product-switchboard-open.svg",
        alt: "Щит распределительный ЩРН-36, открытая дверца",
        badge: "Внутреннее исполнение",
        title: "Щит с открытой дверцей",
        caption: "Внутренний монтаж на DIN-рейках, место для автоматов и клеммных блоков.",
      },
      {
        src: "images/product-switchboard-detail.svg",
        alt: "Щит распределительный ЩРН-36, крупный план",
        badge: "Деталь",
        title: "Крупный план оборудования",
        caption: "Крупный план внутренних элементов для карточки товара, галереи или таба Фото / Видео.",
      },
    ],
  },
  {
    id: "avtomaticheskiy-vyklyuchatel-3p-250a",
    name: "Автоматический выключатель 3P 250A",
    categoryId: "category-electro",
    categoryName: "Электротехническое оборудование",
    subcategory: "Низковольтная аппаратура",
    manufacturer: "EKF",
    image: "images/thumb-electro.svg",
    summary: "Силовой автоматический выключатель для защиты линий, вводных групп и распределительных шкафов на промышленных объектах.",
    specs: [
      ["Подкатегория", "Низковольтная аппаратура"],
      ["Количество полюсов", "3P"],
      ["Номинальный ток", "250 А"],
      ["Тип расцепителя", "Тепловой и электромагнитный"],
      ["Монтаж", "Панельный"],
      ["Применение", "Вводные и распределительные линии"],
    ],
  },
  {
    id: "promyshlennyy-konditsioner-kassetnyy-24kvt",
    name: "Промышленный кондиционер кассетный 24 кВт",
    categoryId: "category-climate",
    categoryName: "Климатическая техника",
    subcategory: "Кондиционирование",
    manufacturer: "Ballu",
    image: "images/thumb-climate.svg",
    summary: "Кассетная климатическая система для охлаждения и поддержания стабильной температуры в коммерческих и производственных помещениях.",
    specs: [
      ["Подкатегория", "Кондиционирование"],
      ["Холодопроизводительность", "24 кВт"],
      ["Тип установки", "Кассетный"],
      ["Хладагент", "R410A"],
      ["Режимы работы", "Охлаждение / обогрев"],
      ["Объекты", "Цеха, офисы, серверные"],
    ],
  },
  {
    id: "ventilyator-kanalnyy-kruglyy-315",
    name: "Вентилятор канальный круглый 315 мм",
    categoryId: "category-climate",
    categoryName: "Климатическая техника",
    subcategory: "Вентиляция",
    manufacturer: "Shuft",
    image: "images/thumb-climate.svg",
    summary: "Канальный вентилятор для построения вытяжных и приточных систем вентиляции на производственных и складских объектах.",
    specs: [
      ["Подкатегория", "Вентиляция"],
      ["Диаметр подключения", "315 мм"],
      ["Тип корпуса", "Круглый"],
      ["Монтаж", "Канальный"],
      ["Назначение", "Приток / вытяжка"],
      ["Сфера применения", "Складские и промышленные зоны"],
    ],
  },
  {
    id: "dvukhstoechnyy-podemnik-4t",
    name: "Двухстоечный подъемник 4 т",
    categoryId: "category-garage",
    categoryName: "Гаражное оборудование",
    subcategory: "Подъемное оборудование",
    manufacturer: "Sivik",
    image: "images/thumb-garage.svg",
    summary: "Электрогидравлический двухстоечный подъемник для оснащения сервисных постов и ремонтных боксов.",
    specs: [
      ["Подкатегория", "Подъемное оборудование"],
      ["Грузоподъемность", "4 т"],
      ["Тип привода", "Электрогидравлический"],
      ["Синхронизация", "Тросовая"],
      ["Высота подъема", "До 1900 мм"],
      ["Применение", "СТО и ремонтные зоны"],
    ],
  },
  {
    id: "porshnevoy-kompressor-500l",
    name: "Поршневой компрессор 500 л",
    categoryId: "category-garage",
    categoryName: "Гаражное оборудование",
    subcategory: "Компрессоры",
    manufacturer: "Remeza",
    image: "images/thumb-garage.svg",
    summary: "Промышленный поршневой компрессор для питания пневмоинструмента и технологических постов в мастерских и автосервисах.",
    specs: [
      ["Подкатегория", "Компрессоры"],
      ["Объем ресивера", "500 л"],
      ["Рабочее давление", "10 бар"],
      ["Тип привода", "Ременной"],
      ["Мощность", "7.5 кВт"],
      ["Применение", "Пневмолинии и сервисные участки"],
    ],
  },
  {
    id: "konteyner-metallicheskiy-setchatyy-1200x1000",
    name: "Контейнер металлический сетчатый 1200х1000",
    categoryId: "category-tara",
    categoryName: "Тара",
    subcategory: "Металлическая тара",
    manufacturer: "Россия",
    image: "images/thumb-tara.svg",
    summary: "Сетчатый металлический контейнер для хранения и перемещения комплектующих, заготовок и складских грузов.",
    specs: [
      ["Подкатегория", "Металлическая тара"],
      ["Габариты", "1200х1000 мм"],
      ["Материал", "Сталь"],
      ["Исполнение", "Сетчатое"],
      ["Штабелирование", "Да"],
      ["Сфера применения", "Склад и внутренняя логистика"],
    ],
  },
  {
    id: "evrokonteyner-plastikovyy-600x400",
    name: "Евроконтейнер пластиковый 600х400",
    categoryId: "category-tara",
    categoryName: "Тара",
    subcategory: "Пластиковая тара",
    manufacturer: "Ай-Пласт",
    image: "images/thumb-tara.svg",
    summary: "Пластиковый евроконтейнер для аккуратного хранения, транспортировки и комплектования продукции на складе.",
    specs: [
      ["Подкатегория", "Пластиковая тара"],
      ["Габариты", "600х400 мм"],
      ["Материал", "Пищевой пластик / PP"],
      ["Исполнение", "Штабелируемый"],
      ["Назначение", "Складское хранение"],
      ["Температурный режим", "От -20 до +40 °C"],
    ],
  },
  {
    id: "kran-sharovoy-flantsevyy-dn50",
    name: "Кран шаровой фланцевый DN50",
    categoryId: "category-valves",
    categoryName: "Запорная и регулирующая арматура",
    subcategory: "Шаровые краны",
    manufacturer: "LD",
    image: "images/thumb-valves.svg",
    summary: "Фланцевый шаровой кран для отключения потока рабочей среды в инженерных и технологических трубопроводах.",
    specs: [
      ["Подкатегория", "Шаровые краны"],
      ["Условный проход", "DN50"],
      ["Тип присоединения", "Фланцевый"],
      ["Материал корпуса", "Сталь"],
      ["Рабочая среда", "Вода, пар, технические жидкости"],
      ["Назначение", "Запорная арматура"],
    ],
  },
  {
    id: "klapan-reguliruyushchiy-dn25",
    name: "Клапан регулирующий DN25",
    categoryId: "category-valves",
    categoryName: "Запорная и регулирующая арматура",
    subcategory: "Регулирующая арматура",
    manufacturer: "Danfoss",
    image: "images/thumb-valves.svg",
    summary: "Регулирующий клапан для точной настройки расхода и давления в системах отопления, охлаждения и технологических линиях.",
    specs: [
      ["Подкатегория", "Регулирующая арматура"],
      ["Условный проход", "DN25"],
      ["Тип управления", "Ручной / приводной"],
      ["Материал корпуса", "Латунь / чугун"],
      ["Назначение", "Регулирование потока"],
      ["Применение", "Инженерные и технологические системы"],
    ],
  },
  {
    id: "perforator-sds-max-1500vt",
    name: "Перфоратор SDS-max 1500 Вт",
    categoryId: "category-tools",
    categoryName: "Инструмент и строительное оборудование",
    subcategory: "Электроинструмент",
    manufacturer: "Bosch",
    image: "images/thumb-tools.svg",
    summary: "Профессиональный перфоратор для бурения, демонтажа и монтажных работ на строительных и промышленных площадках.",
    specs: [
      ["Подкатегория", "Электроинструмент"],
      ["Мощность", "1500 Вт"],
      ["Патрон", "SDS-max"],
      ["Режимы работы", "Сверление / долбление"],
      ["Сфера применения", "Монтажные и демонтажные работы"],
      ["Питание", "220 В"],
    ],
  },
  {
    id: "rezchik-shvov-benzinovyy-14",
    name: "Резчик швов бензиновый 14 дюймов",
    categoryId: "category-tools",
    categoryName: "Инструмент и строительное оборудование",
    subcategory: "Строительное оборудование",
    manufacturer: "Zitrek",
    image: "images/thumb-tools.svg",
    summary: "Бензиновый резчик швов для нарезки технологических швов в бетоне, асфальте и дорожных покрытиях.",
    specs: [
      ["Подкатегория", "Строительное оборудование"],
      ["Диаметр диска", "14 дюймов"],
      ["Тип привода", "Бензиновый"],
      ["Глубина реза", "До 120 мм"],
      ["Применение", "Дорожные и бетонные работы"],
      ["Объекты", "Строительные площадки и ремонт дорог"],
    ],
  },
  {
    id: "rabochaya-stantsiya-intel-core-i7",
    name: "Рабочая станция инженерная Intel Core i7",
    categoryId: "category-computers",
    categoryName: "Компьютерная техника",
    subcategory: "Рабочие станции",
    manufacturer: "iRU",
    image: "images/thumb-computers.svg",
    summary: "Инженерная рабочая станция для проектирования, офисных задач и обработки технической документации.",
    specs: [
      ["Подкатегория", "Рабочие станции"],
      ["Процессор", "Intel Core i7"],
      ["Оперативная память", "16 ГБ"],
      ["Накопитель", "SSD 512 ГБ"],
      ["Графика", "Интегрированная / дискретная по конфигурации"],
      ["Назначение", "Инженерные и офисные задачи"],
    ],
  },
  {
    id: "kommutator-upravlyaemyy-24-porta",
    name: "Коммутатор управляемый 24 порта",
    categoryId: "category-computers",
    categoryName: "Компьютерная техника",
    subcategory: "Сетевое оборудование",
    manufacturer: "D-Link",
    image: "images/thumb-computers.svg",
    summary: "Управляемый сетевой коммутатор для построения локальных и производственных сетей с возможностью настройки VLAN и мониторинга.",
    specs: [
      ["Подкатегория", "Сетевое оборудование"],
      ["Количество портов", "24"],
      ["Тип управления", "Управляемый"],
      ["Скорость портов", "1 Гбит/с"],
      ["Дополнительно", "VLAN / QoS / SNMP"],
      ["Применение", "Офисные и производственные сети"],
    ],
  },
  {
    id: "bolt-otsinkovannyy-m16x60",
    name: "Болт оцинкованный М16х60",
    categoryId: "category-fasteners",
    categoryName: "Метизы и крепеж",
    subcategory: "Болты и гайки",
    manufacturer: "Тех-Креп",
    image: "images/thumb-fasteners.svg",
    summary: "Оцинкованный крепежный болт для сборочных, монтажных и строительных работ с повышенной стойкостью к коррозии.",
    specs: [
      ["Подкатегория", "Болты и гайки"],
      ["Размер", "М16х60"],
      ["Покрытие", "Оцинкованное"],
      ["Класс прочности", "8.8"],
      ["Стандарт", "ГОСТ / DIN"],
      ["Применение", "Монтаж и сборка металлоконструкций"],
    ],
  },
  {
    id: "anker-klinovoy-12x120",
    name: "Анкер клиновой 12х120",
    categoryId: "category-fasteners",
    categoryName: "Метизы и крепеж",
    subcategory: "Анкерный крепеж",
    manufacturer: "Hilti",
    image: "images/thumb-fasteners.svg",
    summary: "Клиновой анкер для надежного крепления оборудования, конструкций и опорных элементов в бетонных основаниях.",
    specs: [
      ["Подкатегория", "Анкерный крепеж"],
      ["Размер", "12х120"],
      ["Материал", "Сталь"],
      ["Основание", "Бетон"],
      ["Монтаж", "Сквозной"],
      ["Назначение", "Крепление оборудования и конструкций"],
    ],
  },
  {
    id: "maslo-industrialnoe-i-40a",
    name: "Масло индустриальное И-40А",
    categoryId: "category-chem",
    categoryName: "Масла, промышленная химия",
    subcategory: "Индустриальные масла",
    manufacturer: "Газпромнефть",
    image: "images/thumb-chem.svg",
    summary: "Индустриальное масло для смазки узлов, редукторов и оборудования, работающего в умеренных режимах нагрузки.",
    specs: [
      ["Подкатегория", "Индустриальные масла"],
      ["Марка", "И-40А"],
      ["Тип", "Минеральное"],
      ["Назначение", "Смазка узлов и механизмов"],
      ["Фасовка", "Канистра / бочка"],
      ["Применение", "Промышленное оборудование и станки"],
    ],
  },
  {
    id: "ochistitel-tormozov-promyshlennyy-650ml",
    name: "Очиститель тормозов промышленный 650 мл",
    categoryId: "category-chem",
    categoryName: "Масла, промышленная химия",
    subcategory: "Техническая химия",
    manufacturer: "CRC",
    image: "images/thumb-chem.svg",
    summary: "Технический очиститель для обезжиривания деталей, удаления загрязнений и подготовки поверхностей перед обслуживанием.",
    specs: [
      ["Подкатегория", "Техническая химия"],
      ["Объем", "650 мл"],
      ["Тип", "Аэрозольный очиститель"],
      ["Назначение", "Удаление масел и загрязнений"],
      ["Поверхности", "Металл, узлы, детали"],
      ["Применение", "Сервисное и промышленное обслуживание"],
    ],
  },
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const buildStandardGallery = (product) => {
  const detailImage = product.mediaImage || product.image;

  return [
    {
      src: product.image,
      alt: `${product.name}, общий вид`,
      badge: "Общий вид",
      title: product.name,
      caption: product.summary,
    },
    {
      src: product.image,
      alt: `${product.name}, исполнение`,
      badge: "Исполнение",
      title: product.subcategory,
      caption: `Позиция относится к разделу "${product.subcategory}" и поставляется под задачи конкретного объекта.`,
    },
    {
      src: detailImage,
      alt: `${product.name}, комплектация`,
      badge: "Комплектация",
      title: "Подбор и комплектация",
      caption: "Итоговая комплектация, исполнение и сопроводительные документы уточняются по заявке или проектной спецификации.",
    },
    {
      src: detailImage,
      alt: `${product.name}, дополнительное фото`,
      badge: "Материалы",
      title: "Фото и документы",
      caption: "В карточку можно добавить реальные фото, чертежи, сертификаты или монтажные материалы для конкретного товара.",
    },
  ];
};

const buildDefaultPurpose = (product) => [
  `${product.name} относится к разделу "${product.subcategory}" и подбирается под задачи снабжения, эксплуатации и проектных поставок.`,
  product.summary,
  "Страница подготовлена под интеграцию с WooCommerce: сюда можно выводить описание, атрибуты, документы, дополнительные фото и видео без изменения шаблона.",
];

const buildDefaultContactText = (product) =>
  `Поможем подобрать ${product.subcategory.toLowerCase()}, согласовать аналоги и подготовить коммерческое предложение под вашу заявку.`;

const productCatalog = Object.fromEntries(
  productCatalogEntries.map((product) => {
    const gallery = product.gallery || buildStandardGallery(product);

    return [
      product.id,
      {
        ...product,
        gallery,
        mediaImage: product.mediaImage || gallery[gallery.length - 1].src,
        purpose: product.purpose || buildDefaultPurpose(product),
        contactText: product.contactText || buildDefaultContactText(product),
        mediaPhotoTitle: product.mediaPhotoTitle || "Дополнительные материалы",
        mediaPhotoText:
          product.mediaPhotoText ||
          `В этот блок можно выводить дополнительные изображения товара "${product.name}", фото комплектации или схемы подключения.`,
        mediaVideoTitle: product.mediaVideoTitle || "Видео или обзор",
        mediaVideoText:
          product.mediaVideoText ||
          `Здесь можно разместить обзор, демонстрацию работы или видео монтажа для товара "${product.name}".`,
      },
    ];
  })
);

document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".site-header");

  headers.forEach((header) => {
    const toggle = header.querySelector(".menu-toggle");
    const close = header.querySelector(".menu-close");
    const nav = header.querySelector(".main-nav");
    const overlay = header.querySelector(".nav-overlay");

    if (!toggle || !close || !nav || !overlay) {
      return;
    }

    const openMenu = () => {
      header.classList.add("menu-open");
      document.body.classList.add("menu-open");
      toggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      header.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      if (header.classList.contains("menu-open")) {
        closeMenu();
        return;
      }

      openMenu();
    });

    close.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("menu-open")) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 960 && header.classList.contains("menu-open")) {
        closeMenu();
      }
    });
  });

  const collapsibleProjectCards = Array.from(document.querySelectorAll(".project-case--collapsible"));

  collapsibleProjectCards.forEach((card, index) => {
    const contentCard = card.querySelector(".project-case__content-card");

    if (!contentCard) {
      return;
    }

    const syncExpandedState = () => {
      const expanded = card.classList.contains("is-expanded");
      card.setAttribute("aria-expanded", expanded ? "true" : "false");
      contentCard.setAttribute("aria-hidden", expanded ? "false" : "true");
    };

    card.classList.add("is-collapsible-ready");
    card.tabIndex = 0;
    card.setAttribute("role", "button");

    if (!contentCard.id) {
      contentCard.id = `project-case-content-${index + 1}`;
    }

    card.setAttribute("aria-controls", contentCard.id);
    syncExpandedState();

    const toggleCard = () => {
      card.classList.toggle("is-expanded");
      syncExpandedState();
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) {
        return;
      }

      const selectedText = window.getSelection?.().toString().trim();

      if (selectedText) {
        return;
      }

      toggleCard();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      toggleCard();
    });
  });

  const certificateGroups = Array.from(document.querySelectorAll(".certificates-grid"))
    .map((grid) => Array.from(grid.querySelectorAll("[data-certificate-item]")))
    .filter((items) => items.length);

  if (certificateGroups.length) {
    const lightbox = document.createElement("div");
    lightbox.className = "certificate-lightbox";
    lightbox.hidden = true;
    lightbox.innerHTML = `
      <div class="certificate-lightbox__dialog" role="dialog" aria-modal="true" aria-label="Просмотр сертификата">
        <button class="certificate-lightbox__close" type="button" data-certificate-close aria-label="Закрыть просмотр">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
        <button class="certificate-lightbox__nav certificate-lightbox__nav--prev" type="button" data-certificate-prev aria-label="Предыдущий сертификат">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 5-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div class="certificate-lightbox__stage" data-certificate-stage>
          <figure class="certificate-lightbox__figure">
            <img class="certificate-lightbox__image" src="" alt="">
            <figcaption class="certificate-lightbox__caption">
              <strong class="certificate-lightbox__title"></strong>
              <span class="certificate-lightbox__subtitle"></span>
            </figcaption>
          </figure>
        </div>
        <button class="certificate-lightbox__nav certificate-lightbox__nav--next" type="button" data-certificate-next aria-label="Следующий сертификат">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div class="certificate-lightbox__counter" data-certificate-counter></div>
      </div>
    `;

    document.body.append(lightbox);

    const dialog = lightbox.querySelector(".certificate-lightbox__dialog");
    const stage = lightbox.querySelector("[data-certificate-stage]");
    const previewImage = lightbox.querySelector(".certificate-lightbox__image");
    const previewTitle = lightbox.querySelector(".certificate-lightbox__title");
    const previewSubtitle = lightbox.querySelector(".certificate-lightbox__subtitle");
    const previewCounter = lightbox.querySelector("[data-certificate-counter]");
    const closeButton = lightbox.querySelector("[data-certificate-close]");
    const prevButton = lightbox.querySelector("[data-certificate-prev]");
    const nextButton = lightbox.querySelector("[data-certificate-next]");

    let activeItems = [];
    let activeIndex = 0;
    let activeTrigger = null;

    const syncLightbox = () => {
      const item = activeItems[activeIndex];
      const image = item?.querySelector(".certificate-card__image");
      const title = item?.querySelector(".certificate-card__caption strong");
      const subtitle = item?.querySelector(".certificate-card__caption span");

      if (!image || !title || !subtitle) {
        return;
      }

      previewImage.src = image.currentSrc || image.src;
      previewImage.alt = image.alt || title.textContent || "";
      previewTitle.textContent = title.textContent || "";
      previewSubtitle.textContent = subtitle.textContent || "";
      previewCounter.textContent = `${activeIndex + 1} / ${activeItems.length}`;

      const hasMultipleItems = activeItems.length > 1;
      prevButton.hidden = !hasMultipleItems;
      nextButton.hidden = !hasMultipleItems;
    };

    const closeLightbox = () => {
      if (lightbox.hidden) {
        return;
      }

      lightbox.hidden = true;
      document.body.classList.remove("gallery-open");
      previewImage.removeAttribute("src");

      if (activeTrigger) {
        activeTrigger.focus();
      }

      activeTrigger = null;
      activeItems = [];
      activeIndex = 0;
    };

    const openLightbox = (items, index, trigger) => {
      activeItems = items;
      activeIndex = index;
      activeTrigger = trigger;
      syncLightbox();
      lightbox.hidden = false;
      document.body.classList.add("gallery-open");
      closeButton?.focus();
    };

    const stepLightbox = (direction) => {
      if (activeItems.length < 2) {
        return;
      }

      activeIndex = (activeIndex + direction + activeItems.length) % activeItems.length;
      syncLightbox();
    };

    certificateGroups.forEach((items) => {
      items.forEach((item, index) => {
        item.addEventListener("click", () => {
          openLightbox(items, index, item);
        });

        item.addEventListener("keydown", (event) => {
          if (event.key !== "Enter" && event.key !== " ") {
            return;
          }

          event.preventDefault();
          openLightbox(items, index, item);
        });
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", () => stepLightbox(-1));
    nextButton.addEventListener("click", () => stepLightbox(1));

    lightbox.addEventListener("click", (event) => {
      if (
        event.target === lightbox ||
        event.target === dialog ||
        event.target === stage
      ) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (lightbox.hidden) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        stepLightbox(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        stepLightbox(1);
      }
    });
  }

  document.querySelectorAll("[data-catalog-page]").forEach((catalog) => {
    const items = Array.from(catalog.querySelectorAll("[data-catalog-item]"));
    const triggers = Array.from(catalog.querySelectorAll("[data-category-trigger]"));
    const links = Array.from(catalog.querySelectorAll("[data-category-link]"));
    const panels = Array.from(catalog.querySelectorAll("[data-category-panel]"));

    if (!items.length || !triggers.length || !panels.length) {
      return;
    }

    const defaultCategory = panels[0].dataset.categoryPanel;
    const knownCategories = new Set(panels.map((panel) => panel.dataset.categoryPanel));
    const getPanelByCategory = (category) =>
      panels.find((panel) => panel.dataset.categoryPanel === category) || panels[0];
    const getInitialCategory = () => {
      const categoryFromQuery = new URLSearchParams(window.location.search).get("category");
      return knownCategories.has(categoryFromQuery) ? categoryFromQuery : defaultCategory;
    };

    let activeCategory = getInitialCategory();
    let activeGroup = null;
    let openCategory = null;

    items.forEach((item) => {
      const panel = item.querySelector(".catalog-accordion__panel");

      if (!panel || panel.firstElementChild?.classList.contains("catalog-accordion__panel-inner")) {
        return;
      }

      const inner = document.createElement("div");
      inner.className = "catalog-accordion__panel-inner";

      while (panel.firstChild) {
        inner.append(panel.firstChild);
      }

      panel.append(inner);
    });

    const setAccordionItemState = (item, isOpen) => {
      const panel = item.querySelector(".catalog-accordion__panel");

      if (!panel) {
        return;
      }

      item.classList.toggle("is-open", isOpen);
      panel.setAttribute("aria-hidden", isOpen ? "false" : "true");
      panel.inert = !isOpen;
    };

    const syncCatalog = ({
      category = activeCategory,
      groupTarget = activeGroup,
      openCategoryTarget = openCategory,
      immediate = false,
    } = {}) => {
      const resolvedCategory = knownCategories.has(category) ? category : defaultCategory;
      const resolvedOpenCategory = knownCategories.has(openCategoryTarget) ? openCategoryTarget : null;
      const activePanel = getPanelByCategory(resolvedCategory);
      const availableGroups = Array.from(activePanel.querySelectorAll(".catalog-panel-group[id]"));
      const resolvedGroup =
        groupTarget && availableGroups.some((group) => group.id === groupTarget) ? groupTarget : null;

      activeCategory = resolvedCategory;
      activeGroup = resolvedGroup;
      openCategory = resolvedOpenCategory;

      catalog.classList.add("is-ready");

      panels.forEach((panel) => {
        const isActivePanel = panel.dataset.categoryPanel === activeCategory;
        panel.classList.toggle("is-active", isActivePanel);

        panel.querySelectorAll(".catalog-panel-group").forEach((group) => {
          if (!isActivePanel) {
            group.hidden = false;
            return;
          }

          group.hidden = Boolean(activeGroup) && group.id !== activeGroup;
        });
      });

      items.forEach((item) => {
        const isActive = item.dataset.category === activeCategory;
        const isOpen = item.dataset.category === openCategory;
        item.classList.toggle("is-active", isActive);
        setAccordionItemState(item, isOpen);
      });

      triggers.forEach((trigger) => {
        const item = trigger.closest("[data-catalog-item]");
        const isOpen = item?.dataset.category === openCategory;
        trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      links.forEach((link) => {
        const isCurrent =
          link.dataset.categoryTarget === activeCategory &&
          (activeGroup ? link.dataset.groupTarget === activeGroup : !link.dataset.groupTarget);
        link.classList.toggle("is-current", isCurrent);
        link.setAttribute("aria-pressed", isCurrent ? "true" : "false");
      });
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        const item = trigger.closest("[data-catalog-item]");
        const category = item?.dataset.category;

        if (!category) {
          return;
        }

        const isCurrentCategory = activeCategory === category;
        const isOpenCategory = openCategory === category;

        if (isCurrentCategory && isOpenCategory) {
          syncCatalog({
            category,
            groupTarget: activeGroup,
            openCategoryTarget: null,
          });
          return;
        }

        syncCatalog({
          category,
          groupTarget: isCurrentCategory ? activeGroup : null,
          openCategoryTarget: category,
        });
      });
    });

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        syncCatalog({
          category: link.dataset.categoryTarget,
          groupTarget: link.dataset.groupTarget || null,
          openCategoryTarget: link.dataset.categoryTarget,
        });
      });
    });

    syncCatalog({ category: activeCategory, openCategoryTarget: openCategory, immediate: true });
  });

  const productPage = document.querySelector("[data-product-page]");

  if (productPage) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product");
    const product = productCatalog[productId] || productCatalog[defaultProductId];

    if (product) {
      document.title = `ООО Снабжающая Компания | ${product.name}`;

      const categoryLink = productPage.querySelector("[data-product-category-link]");
      const breadcrumbName = productPage.querySelector("[data-product-breadcrumb-name]");
      const summary = productPage.querySelector("[data-product-summary]");
      const manufacturer = productPage.querySelector("[data-product-manufacturer]");
      const contactText = productPage.querySelector("[data-product-contact-text]");
      const galleryThumbs = productPage.querySelector("[data-product-gallery-thumbs]");
      const purposeContainer = productPage.querySelector("[data-product-purpose]");
      const specsContainer = productPage.querySelector("[data-product-specs]");
      const mediaContainer = productPage.querySelector("[data-product-media]");

      productPage.querySelectorAll("[data-product-name]").forEach((node) => {
        node.textContent = product.name;
      });

      if (categoryLink) {
        categoryLink.textContent = product.categoryName;
        categoryLink.href = `products.html?category=${product.categoryId}`;
      }

      if (breadcrumbName) {
        breadcrumbName.textContent = product.name;
      }

      if (summary) {
        summary.textContent = product.summary;
      }

      if (manufacturer) {
        manufacturer.textContent = product.manufacturer;
      }

      if (contactText) {
        contactText.textContent = product.contactText;
      }

      if (galleryThumbs) {
        galleryThumbs.innerHTML = product.gallery
          .map(
            (item, index) => `
              <button
                class="product-thumb${index === 0 ? " is-active" : ""}"
                type="button"
                data-gallery-thumb
                data-image-src="${escapeHtml(item.src)}"
                data-image-alt="${escapeHtml(item.alt)}"
                data-badge="${escapeHtml(item.badge)}"
                data-title="${escapeHtml(item.title)}"
                data-caption="${escapeHtml(item.caption)}"
              >
                <img class="product-thumb__image" src="${escapeHtml(item.src)}" alt="">
              </button>
            `
          )
          .join("");
      }

      if (purposeContainer) {
        purposeContainer.innerHTML = product.purpose.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
      }

      if (specsContainer) {
        specsContainer.innerHTML = product.specs
          .map(
            ([label, value]) => `
              <tr>
                <td>${escapeHtml(label)}</td>
                <td>${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("");
      }

      if (mediaContainer) {
        mediaContainer.innerHTML = `
          <article class="product-media-card">
            <figure class="product-media-card__figure">
              <img class="product-media-card__image" src="${escapeHtml(product.mediaImage)}" alt="${escapeHtml(product.name)}, дополнительное фото">
            </figure>
            <h3>${escapeHtml(product.mediaPhotoTitle)}</h3>
            <p>${escapeHtml(product.mediaPhotoText)}</p>
          </article>

          <article class="product-media-card">
            <div class="product-media-card__preview" aria-hidden="true">Видео</div>
            <h3>${escapeHtml(product.mediaVideoTitle)}</h3>
            <p>${escapeHtml(product.mediaVideoText)}</p>
          </article>
        `;
      }
    }
  }

  document.querySelectorAll("[data-tabs]").forEach((tabs) => {
    const buttons = tabs.querySelectorAll("[data-tab-target]");
    const panels = tabs.querySelectorAll("[data-tab-panel]");

    if (!buttons.length || !panels.length) {
      return;
    }

    const activateTab = (target) => {
      buttons.forEach((button) => {
        const isActive = button.dataset.tabTarget === target;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach((panel) => {
        panel.hidden = panel.dataset.tabPanel !== target;
      });
    };

    const initialTarget =
      Array.from(buttons).find((button) => button.classList.contains("is-active"))?.dataset.tabTarget ||
      buttons[0].dataset.tabTarget;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        activateTab(button.dataset.tabTarget);
      });
    });

    activateTab(initialTarget);
  });

  document.querySelectorAll("[data-product-gallery]").forEach((gallery) => {
    const stage = gallery.querySelector("[data-gallery-stage]");
    const stageImage = gallery.querySelector("[data-gallery-stage-image]");
    const badge = gallery.querySelector("[data-gallery-badge]");
    const title = gallery.querySelector("[data-gallery-title]");
    const caption = gallery.querySelector("[data-gallery-caption]");
    const thumbs = gallery.querySelectorAll("[data-gallery-thumb]");

    if ((!stage && !stageImage) || !badge || !title || !caption || !thumbs.length) {
      return;
    }

    const activateThumb = (thumb) => {
      if (stage && thumb.dataset.visual) {
        stage.className = `product-stage__visual product-stage__visual--${thumb.dataset.visual}`;
      }

      if (stageImage && thumb.dataset.imageSrc) {
        stageImage.src = thumb.dataset.imageSrc;
        stageImage.alt = thumb.dataset.imageAlt || thumb.dataset.title || "";
      }

      badge.textContent = thumb.dataset.badge || "";
      title.textContent = thumb.dataset.title || "";
      caption.textContent = thumb.dataset.caption || "";

      thumbs.forEach((item) => {
        const isActive = item === thumb;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        activateThumb(thumb);
      });
    });

    activateThumb(Array.from(thumbs).find((thumb) => thumb.classList.contains("is-active")) || thumbs[0]);
  });
});
