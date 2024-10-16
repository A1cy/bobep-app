export const menuArray = [
  {
    id: 1,
    category: "Пицца", // Category of the product
    name: "ДЕРЕВЕНСКАЯ", // Name of the product
    description:
      "Ароматная пицца с салями, моцареллой, солеными огурцами, красным луком и копченой курицей. Идеально подходит для тех, кто любит сочетание дымных и острых вкусов.", // Detailed description
    price: 480, // Price in rubles
    imageUrl: "assets/1MENUImages/1-деревенская.jpg", // Image URL of the product
    gramms: "400", // Weight in grams
    addOns: [
      // List of available add-ons for this product
      
      {
        id: "addon1",
        name: "Картошка фри",
        price: 100,
        imageUrl: "assets/images/modal/mini/pic1.jpg",
      },
      {
        id: "addon2",
        name: "Двойной сыр",
        price: 50,
        imageUrl: "assets/images/modal/mini/pic2.jpg",
      },
      {
        id: "addon3",
        name: "Кока-кола",
        price: 70,
        imageUrl: "assets/images/modal/mini/pic3.jpg",
      },
      {
        id: "addon4",
        name: "Чизкейк",
        price: 120,
        imageUrl: "assets/images/modal/mini/pic4.jpg",
      },
    ],
    additionalInformation: [
      // Additional information to display in a table
      { label: "Размер", value: "Маленькая, Средняя, Большая" },
      { label: "Ингридиенты", value: "Onion, Tomato, Olives" },
      { label: "Оценка", value: 4.3 },
      { label: "Время приготовления", value: "30-45 минут" },
    ],
  },
  {
    id: 2,
    category: "Пицца",
    name: "ПЕПЕРОННИ",
    description:
      "A classic pizza with mozzarella cheese, fresh tomatoes, and premium salami. A timeless choice for pizza enthusiasts.",
    price: 500,
    imageUrl: "assets/1MENUImages/3-пеперонни.png",
    gramms: "400",
    addOns: [
      {
        id: "addon1",
        name: "French Fries",
        price: 100,
        imageUrl: "assets/images/modal/mini/pic1.jpg",
      },
      {
        id: "addon2",
        name: "Extra Cheese",
        price: 50,
        imageUrl: "assets/images/modal/mini/pic2.jpg",
      },
      {
        id: "addon3",
        name: "Coca Cola",
        price: 70,
        imageUrl: "assets/images/modal/mini/pic3.jpg",
      },
      {
        id: "addon4",
        name: "Choco Lava",
        price: 120,
        imageUrl: "assets/images/modal/mini/pic4.jpg",
      },
    ],
    additionalInformation: [
      { label: "Size", value: "Small, Medium & Large" },
      { label: "Toppings", value: "Pepperoni, Mozzarella" },
      { label: "Rating", value: 4.7 },
      { label: "Shipping Charges", value: "Free Shipping" },
      { label: "Add More", value: "Garlic Bread, Cheese Dip" },
      { label: "Delivery Time", value: "25 mins" },
    ],
  },
  // Add more products as needed

  // {
  //   id: 1,
  //   category: "Пицца",
  //   name: "ДЕРЕВЕНСКАЯ",
  //   description: "САЛЯМИ, МОЦАРЕЛЛА, КОРНИШОНЫ, ЛУК КРАСНЫЙ, КУРИЦА КОПЧЁНАЯ",
  //   price: 480,
  //   imageUrl: "assets/1MENUImages/1-деревенская.jpg",
  //   gramms: "400",
  // },
  // {
  //   id: 2,
  //   category: "Пицца",
  //   name: "ПЕПЕРОННИ",
  //   description: "МОЦАРЕЛЛА, ПОМИДОРЫ, САЛЯМИ ",
  //   price: 500,
  //   imageUrl: "assets/1MENUImages/3-пеперонни.png",
  //   gramms: "400",
  // },
  {
    id: 3,
    category: "Пицца",
    name: "ВЕТЧИНА-ГРИБЫ",
    description: "ВЕТЧИНА, МОЦАРЕЛЛА, ШАМПИНЬОНЫ",
    price: 450,
    imageUrl: "assets/1MENUImages/2-ветчинагрибы.jpg",
    gramms: "400",
  },
  {
    id: 4,
    category: "Пицца",
    name: "БАРБЕКЮ",
    description:
      "ОХОТНИЧЬИ КОЛБАСКИ, СОУС БАРБЕКЮ, КОРНИШОНЫ, МОЦАРЕЛЛА, САЛЯМИ, БЕКОН",
    price: 520,
    imageUrl: "assets/1MENUImages/4-барбекю.jpg",
    gramms: "400",
  },
  {
    id: 5,
    category: "Пицца",
    name: "4 МЯСА",
    description: "КУРИЦА КОПЧЁНАЯ, МОЦАРЕЛЛА, ВЕТЧИНА, САЛЯМИ, БЕКОН",
    price: 550,
    imageUrl: "assets/1MENUImages/5-4мяса.jpg",
    gramms: "400",
  },
  {
    id: 6,
    category: "Пицца",
    name: "КАРБОНАРА",
    description: "БЕКОН, ВЕТЧИНА, МОЦАРЕЛЛА, ШАМПИНЬОНЫ",
    price: 525,
    imageUrl: "assets/1MENUImages/6-карбонара.png",
    gramms: "400",
  },
  {
    id: 7,
    category: "Пицца",
    name: "МАРИНАРА",
    description: "МОРСКОЙ КОКТЕЙЛЬ, МОЦАРЕЛЛА, ОЛИВКИ",
    price: 600,
    imageUrl: "assets/1MENUImages/7-маринара.png",
    gramms: "400",
  },
  {
    id: 8,
    category: "Пицца",
    name: "ЦЕЗАРЬ",
    description:
      "КОПЧЁНАЯ КУРИЦА, МОЦАРЕЛЛА, ЛИСТЬЯ САЛАТА, ПОМИДОР, СОУС ЦЕЗАРЬ, СРЕДИЗЕМНОМОРСКИЕ ТРАВЫ",
    price: 550,
    imageUrl: "assets/1MENUImages/8-цезарь.png",
    gramms: "400",
  },
  {
    id: 9,
    category: "Пицца",
    name: "ГАВАЙСКАЯ",
    description: "АНАНАС, МОЦАРЕЛЛА, КОПЧЁНАЯ КУРИЦА",
    price: 500,
    imageUrl: "assets/1MENUImages/9-гавайская.png",
    gramms: "400",
  },
  {
    id: 10,
    category: "Пицца",
    name: "4 СЫРА",
    description: "СЫР МОЦАРЕЛЛА, СЫР МААСДАМ, СЫР ДОР БЛЮ, СЫР ЧЕДДЕР",
    price: 550,
    imageUrl: "assets/1MENUImages/10-4сыра.png",
    gramms: "400",
  },
  {
    id: 11.1,
    category: "Роллы",
    name: "ТЕМПУРА ЛАВА",
    description: "КРЕВЕТКА/, КРЕМ СЫР/, ЛОСОСЬ/, КРАБ/, СЫР СЛИВОЧНЫЙ",
    price: 400 / 320 / 380 / 340,
    imageUrl: "assets/1MENUImages/1-темпуралава.jpg",
    gramms: "150",
  },
  {
    id: 12.1,
    category: "Роллы",
    name: "ТЕМПУРА ВУЛКАН 🌶️",
    description: "КРЕВЕТКА/, ЛОСОС/, УГОРЬ/, СЫР СЛИВОЧНЫЙ",
    price: 500 / 450 / 550,
    imageUrl: "assets/1MENUImages/2-темпуравулкан.jpg",
    gramms: "150",
  },
  {
    id: 13,
    category: "Роллы",
    name: "ТЕМПУРА МИКС",
    description: "СЫР СЛИВОЧНЫЙ, СЫР СЛАЙСОВЫЙ, ОГУРЕЦ, КУНЖУТ, ЛОСОСЬ, УГОРЬ",
    price: 420,
    imageUrl: "assets/1MENUImages/3-темпурамикс.jpg",
    gramms: "150",
  },
  {
    id: 14,
    category: "Роллы",
    name: "ТЕМПУРА ЧИЗ ХОТ 🌶️",
    description: "СЫР СЛИВОЧНЫЙ, СЫР СЛАЙСОВЫЙ, СЫР МОЦАРЕЛЛА",
    price: 250,
    imageUrl: "assets/1MENUImages/4-темпурачизхот.jpg",
    gramms: "150",
  },
  {
    id: 15,
    category: "Роллы",
    name: "ТЕМПУРА ЧИКЕН ХОТ ",
    description: "КУРИЦА КОПЧЁНАЯ, СЫР СЛАЙСОВЫЙ, СЫР СЛИВОЧНЫЙ",
    price: 250,
    imageUrl: "assets/1MENUImages/5-темпурачикенхот.jpg",
    gramms: "150",
  },
  {
    id: 16,
    category: "Роллы",
    name: "БИГ ТЕМПУРА 🌶️",
    description: "ЛОСОСЬ ЖАРЕНЫЙ, 3 СОУСА, КУНЖУТ, ОГУРЕЦ, КРАБ",
    price: 400,
    imageUrl: "assets/1MENUImages/6-бигтемпура.jpg",
    gramms: "150",
  },
  {
    id: 17,
    category: "Роллы",
    name: "ТЕМПУРА ЭБИ ХОТ ",
    description: "СЫР СЛИВОЧНЫЙ, ИКРА МАСАГА, КРЕВЕТКА, ОГУРЕЦ",
    price: 400,
    imageUrl: "assets/1MENUImages/7-темпураэбихот.jpg",
    gramms: "150",
  },
  {
    id: 18,
    category: "Роллы",
    name: "ТЕМПУРА УНАГИ",
    description: "СЫР СЛИВОЧНЫЙ, ОГУРЕЦ, КУНЖУТ, УГОРЬ",
    price: 400,
    imageUrl: "assets/1MENUImages/8-темпураунаги.jpg",
    gramms: "150",
  },
  {
    id: 19,
    category: "Роллы",
    name: "ТЕМПУРА НЕЖНЫЙ",
    description: "КРЕВЕТКА, КРАБ",
    price: 380,
    imageUrl: "assets/1MENUImages/9-темпуранежный.jpg",
    gramms: "150",
  },
  {
    id: 20,
    category: "Роллы",
    name: "ЭБИ ЧИРАЗИ",
    description: "СЫР СЛИВОЧНЫЙ, КРЕВЕТКА, ЗАМЕС ЧИРАЗИ",
    price: 440,
    imageUrl: "assets/1MENUImages/10-эбичирази.jpg",
    gramms: "150",
  },
  {
    id: 21,
    category: "Роллы",
    name: "ДИНАМИТ 🌶️",
    description: "СЫР СЛИВОЧНЫЙ, СЫР СЛАЙСОВЫЙ, ЛОСОСЬ, ОГУРЕЦ",
    price: 340,
    imageUrl: "assets/1MENUImages/11-динамит.jpg",
    gramms: "150",
  },
  {
    id: 22,
    category: "Роллы",
    name: "ФИЛАДЕЛЬФИЯ",
    description: "ЛОСОСЬ НАРЕЗКА, СЫР СЛИВОЧНЫЙ",
    price: 550,
    imageUrl: "assets/1MENUImages/12-филадельфия.jpg",
    gramms: "150",
  },
  {
    id: 23,
    category: "Роллы",
    name: "ФИЛАДЕЛЬФИЯ С ОГУРЦОМ",
    description: "ЛОСОСЬ НАРЕЗКА, СЫР СЛИВОЧНЫЙ, ОГУРЕЦ НАРЕЗКА",
    price: 550,
    imageUrl: "assets/1MENUImages/13-филадельфиясогурцом.jpg",
    gramms: "150",
  },
  {
    id: 24,
    category: "Роллы",
    name: "ФИЛАДЕЛЬФИЯ С УГРЁМ",
    description: "УГОРЬ НАРЕЗКА, СЫР СЛИВОЧНЫЙ, ОГУРЕЦ НАРЕЗКА, КУНЖУТ",
    price: 600,
    imageUrl: "assets/1MENUImages/14-филадельфиясугрем.jpg",
    gramms: "150",
  },
  {
    id: 25,
    category: "Роллы",
    name: "ФИЛАДЕЛЬФИЯ С ЛУКОМ",
    description: "ЛОСОСЬ НАРЕЗКА, СЫР СЛИВОЧНЫЙ, ЛУК ЗЕЛЁНЫЙ",
    price: 550,
    imageUrl: "assets/1MENUImages/15-филадельфияслуком.jpg",
    gramms: "150",
  },
  {
    id: 26,
    category: "Роллы",
    name: "ФИЛАДЕЛЬФИЯ ЛЮКС",
    description: "ОГУРЕЦ НАРЕЗКА, ЛОСОСЬ НАРЕЗКА, УГОРЬ НАРЕЗКА, СЫР СЛИВОЧНЫЙ",
    price: 580,
    imageUrl: "assets/1MENUImages/16-филадельфиялюкс.jpg",
    gramms: "150",
  },
  {
    id: 27,
    category: "Роллы",
    name: "ФИЛАДЕЛЬФИЯ ЛАЙТ",
    description: "СЫР СЛИВОЧНЫЙ, ЛОСОСЬ НАРЕЗКА, ОГУРЕЦ НАРЕЗКА",
    price: 420,
    imageUrl: "assets/1MENUImages/17-филадельфиялайт.jpg",
    gramms: "150",
  },
  {
    id: 28.1,
    category: "Роллы",
    name: "ЗАПЕЧЁННЫЙ С ШИИТАКИ",
    description:
      "ЛОСОСЬ/, КУРИЦА/, УГОРЬ НАРЕЗКА/, СЫР СЛИВОЧНЫЙ, ШИИТАКИ ГРИБЫ, СЫР ЗАМЕС",
    price: 340 / 300 / 300,
    imageUrl: "assets/1MENUImages/18-запечённыйсшиитаки.jpg",
    gramms: "150",
  },
  {
    id: 29,
    category: "Роллы",
    name: "КАЛИФОРНИЯ КУНЖУТ",
    description: "КРАБ ЗАМЕС, ОГУРЕЦ, КУНЖУТ",
    price: 260,
    imageUrl: "assets/1MENUImages/19-калифорниякунжут.jpg",
    gramms: "150",
  },
  {
    id: 30,
    category: "Роллы",
    name: "КАЛИФОРНИЯ ЛЮКС",
    description: "ОГУРЕЦ НАРЕЗКА, ИКРА МАСАГА, КРЕВЕТКА ",
    price: 380,
    imageUrl: "assets/1MENUImages/20-калифорниялюкс.jpg",
    gramms: "150",
  },
  {
    id: 31,
    category: "Роллы",
    name: "КАЛИФОРНИЯ КРАБ",
    description: "ИКРА МАСАГА, КРАБ ЗАМЕС, ОГУРЕЦ",
    price: 300,
    imageUrl: "assets/1MENUImages/21-калифорниякраб.jpg",
    gramms: "150",
  },
  {
    id: 32,
    category: "Роллы",
    name: "КАНАДСКИЙ",
    description: "СЫР СЛИВОЧНЫЙ, ОГУРЕЦ НАРЕЗКА, УГОРЬ НАРЕЗКА, КУНЖУТ, ЛОСОСЬ",
    price: 540,
    imageUrl: "assets/1MENUImages/22-канадский.jpg",
    gramms: "150",
  },
  {
    id: 33,
    category: "Роллы",
    name: "СПАЙСИ РОЛЛ 🌶️",
    description: "ЛОСОСЬ ЖАРЕНЫЙ, СЫР СЛИВОЧНЫЙ, ОГУРЕЦ",
    price: 300,
    imageUrl: "assets/1MENUImages/23-спайсиролл.jpg",
    gramms: "150",
  },
  {
    id: 34,
    category: "Роллы",
    name: "ТЕРИ МАКИ",
    description: "ОГУРЕЦ НАРЕЗКА, ЛОСОСЬ ЖАРЕНЫЙ, СЫР СЛИВОЧНЫЙ, КУНЖУТ",
    price: 240,
    imageUrl: "assets/1MENUImages/24-теримаки.jpg",
    gramms: "150",
  },
  {
    id: 35,
    category: "Роллы",
    name: "КИМЧИ МАКИ 🌶️",
    description: "ОГУРЕЦ НАРЕЗКА, ЛОСОСЬ ЖАРЕНЫЙ, СЫР СЛИВОЧНЫЙ",
    price: 240,
    imageUrl: "assets/1MENUImages/25-кимчимаки.jpg",
    gramms: "150",
  },
  {
    id: 36,
    category: "Роллы",
    name: "ЭБИ МАКИ",
    description: "ОГУРЕЦ НАРЕЗКА, КРЕВЕТКА",
    price: 260,
    imageUrl: "assets/1MENUImages/26эбимаки.jpg",
    gramms: "150",
  },
  {
    id: 37,
    category: "Роллы",
    name: "УНАГИ МАКИ",
    description: "УГОРЬ ВНУТРИ, ОГУРЕЦ НАРЕЗКА, КУНЖУТ",
    price: 300,
    imageUrl: "assets/1MENUImages/27-унагимаки.jpg",
    gramms: "150",
  },
  {
    id: 38,
    category: "Роллы",
    name: "ЯСАЙ МАКИ",
    description:
      "СЫР СЛИВОЧНЫЙ, ОГУРЕЦ НАРЕЗКА, ТОМАТ КАНКАССЕ, ПЕРЕЦ БОЛГАРСКИЙ",
    price: 220,
    imageUrl: "assets/1MENUImages/28-ясаймаки.jpg",
    gramms: "150",
  },
  {
    id: 39,
    category: "Роллы",
    name: "КАППА МАКИ",
    description: "КУНЖУТ, ОГУРЕЦ",
    price: 150,
    imageUrl: "assets/1MENUImages/29-каппамаки.jpg",
    gramms: "150",
  },
  {
    id: 40,
    category: "Роллы",
    name: "НЕЖНОСТЬ",
    description: "КРАБ ЗАМЕС, КРЕВЕТКА, ОГУРЕЦ НАРЕЗКА, ИКРА МАСАГА, КУНЖУТ",
    price: 400,
    imageUrl: "assets/1MENUImages/30-нежность.jpg",
    gramms: "150",
  },
  {
    id: 41,
    category: "Роллы",
    name: "БОНИТО",
    description: "ОГУРЕЦ НАРЕЗКА, ЛОСОСЬ ЖАРЕНЫЙ, СТРУЖКА ТУНЦА, СЫР СЛИВОЧНЫЙ",
    price: 280,
    imageUrl: "assets/1MENUImages/31-бонито.jpg",
    gramms: "150",
  },
  {
    id: 42.1,
    category: "Роллы",
    name: "Лава",
    description: "ЛОСОСЬ/, КРАБ/, КРЕВЕТКА/, КРЕМ СЫР/",
    price: 340 / 280 / 500 / 250,
    imageUrl: "assets/1MENUImages/32-лава.jpg",
    gramms: "150",
  },
  {
    id: 43,
    category: "Роллы",
    name: "ГЕЙША",
    description: "ОГУРЕЦ НАРЕЗКА, СЫР СЛИВОЧНЫЙ, ИКРА МАСАГА, ЛОСОСЬ",
    price: 300,
    imageUrl: "assets/1MENUImages/33-гейша.jpg",
    gramms: "150",
  },
  {
    id: 44,
    category: "Роллы",
    name: "ВОСХОД",
    description: "ОГУРЕЦ НАРЕЗКА, СЫР СЛИВОЧНЫЙ, ИКРА МАСАГА, КРЕВЕТКА",
    price: 290,
    imageUrl: "assets/1MENUImages/34-восход.jpg",
    gramms: "150",
  },
  {
    id: 45,
    category: "Роллы",
    name: "СЯКЕ МАКИ",
    description: "ОГУРЕЦ НАРЕЗКА, ЛОСОСЬ",
    price: 250,
    imageUrl: "assets/1MENUImages/35-сякемаки.jpg",
    gramms: "150",
  },
  {
    id: 46,
    category: "Роллы",
    name: "ТОБИ ЧИЗ",
    description: "ОГУРЕЦ НАРЕЗКА, СЫР СЛИВОЧНЫЙ, ИКРА МАСАГА",
    price: 250,
    imageUrl: "assets/1MENUImages/36-тобичиз.jpg",
    gramms: "150",
  },
  {
    id: 47,
    category: "Роллы",
    name: "ЧИКЕН МАКИ 🌶️",
    description:
      "КУРИЦА КОПЧЁНАЯ, ОГУРЕЦ НАРЕЗКА, СЫР СЛИВОЧНЫЙ, СЫР СЛАЙСОВЫЙ",
    price: 250,
    imageUrl: "assets/1MENUImages/37-чикенмаки.jpg",
    gramms: "150",
  },
  {
    id: 48,
    category: "Роллы",
    name: "КРАБИ СПАЙС 🌶️",
    description: "СЫР СЛИВОЧНЫЙ, КРАБ ЗАМЕС",
    price: 180,
    imageUrl: "assets/1MENUImages/38-крабиспайс.jpg",
    gramms: "150",
  },
  {
    id: 49,
    category: "Роллы",
    name: "ТОМАТОС МАКИ",
    description: "СЫР СЛИВОЧНЫЙ, ТОМАТ КАНКАССЕ",
    price: 150,
    imageUrl: "assets/1MENUImages/39-томатосмаки.jpg",
    gramms: "150",
  },
  {
    id: 50.1,
    category: "Роллы",
    name: "ЗАПЕЧЁННЫЙ ВУЛКАН 🌶️",
    description: "ЛОСОСЬ/, УГОРЬ/, КРЕВЕТКА/, СЫР СЛИВОЧНЫЙ",
    price: 450 / 550 / 500,
    imageUrl: "assets/1MENUImages/40-запечённыйвулкан.jpg",
    gramms: "150",
  },
  {
    id: 51.1,
    category: "Роллы",
    name: "ЗАПЕЧЁННЫЙ СПАЙСИ 🌶️",
    description: "ЛОСОСЬ/, КРЕВЕТКА/, КРАБ/, УГОРЬ/, СЫР СЛИВОЧНЫЙ, СЫР ЗАМЕС",
    price: 340 / 380 / 280 / 440,
    imageUrl: "assets/1MENUImages/41-запечённыйспайси.jpg",
    gramms: "150",
  },
  {
    id: 52.1,
    category: "Роллы",
    name: "ЗАПЕЧЁННЫЙ РОЛЛ",
    description:
      "ЛОСОСЬ/, КРЕВЕТКА/, КРАБ/, УГОРЬ/, СЫР СЛИВОЧНЫЙ, СЫР ЗАМЕС, КУНЖУТ",
    price: 420,
    imageUrl: "assets/1MENUImages/42-запечённыйролл.jpg",
    gramms: "150",
  },
  {
    id: 53.1,
    category: "Роллы",
    name: "ВУЛКАН 🌶️",
    description: "ЛОСОСЬ/, УГОРЬ/, КРЕВЕТКА/, СЫР СЛИВОЧНЫЙ",
    price: 450 / 550 / 500,
    imageUrl: "assets/1MENUImages/43-вулкан.jpg",
    gramms: "150",
  },
  {
    id: 54,
    category: "Сеты",
    name: "СЕТ “ХИТ”",
    description: "ТОБИ ЧИЗ, ВОСХОД, БОНИТО, НАБОР: 1",
    price: 900,
    imageUrl: "assets/1MENUImages/100_СЕТ_“ХИТ”.jpg",
    gramms: "0",
  },
  {
    id: 55,
    category: "Сеты",
    name: "“ВЕГЕТЕРИАНСКИЙ”",
    description: "ТОМАТОС МАКИ, КАПА МАКИ, ЯСАЙ МАКИ, НАБОР: 1",
    price: 650,
    imageUrl: "assets/1MENUImages/101_“ВЕГЕТЕРИАНСКИЙ”.jpg",
    gramms: "0",
  },
  {
    id: 56,
    category: "Сеты",
    name: "СЕТ “ЭЛИТ”",
    description: "ФИЛА КЛАССИЧЕСКАЯ, ЛАВА КРАБ, КАЛИФОРНИЯ ЛЮКС, НАБОР: 2",
    price: 1400,
    imageUrl: "assets/1MENUImages/102_СЕТ_“ЭЛИТ”.jpg",
    gramms: "0",
  },
  {
    id: 57,
    category: "Сеты",
    name: "СЕТ “КЛАССИК”",
    description: "ФИЛА С ОГУРЦОМ, КАЛИФОРНИЯ КРАБ, КАНАДСКИЙ РОЛЛ, НАБОР: 2",
    price: 1500,
    imageUrl: "assets/1MENUImages/103_СЕТ_“КЛАССИК”.jpg",
    gramms: "0",
  },
  {
    id: 58,
    category: "Сеты",
    name: "“ТЕМПУРА ЖАРЕНЫЙ”",
    description:
      "ТЕМПУРА ЛАВА С КРЕВЕТКОЙ, ТЕМПУРА ЛЮКС, БИГ ТЕМПУРА, ДИНАМИТ, НАБОР: 2",
    price: 1800,
    imageUrl: "assets/1MENUImages/104_“ТЕМПУРА_ЖАРЕНЫЙ”.jpg",
    gramms: "0",
  },
  {
    id: 59,
    category: "Сеты",
    name: "СЕТ “WAUKESHA”",
    description: "КРАБИ СПАЙС, ЭБИ МАКИ, ЧИКЕН ХОТ, НАБОР: 1",
    price: 690,
    imageUrl: "assets/1MENUImages/105_СЕТ_“WAUKESHA”.jpg",
    gramms: "0",
  },
  {
    id: 60,
    category: "Сеты",
    name: "СЕТ “ХИТ-ХОТ”",
    description:
      "ТЕМПУРА ЛАВА С ЛОСОСЕМ, ТЕМПУРА ЧИКЕН ХОТ, ТЕМПУРА ЧИЗ ХОТ, ТЕМПУРА УНАГИ, СПАЙСИ РОЛЛ, НАБОР: 3",
    price: 1700,
    imageUrl: "assets/1MENUImages/106_СЕТ_“ХИТ-ХОТ”.jpg",
    gramms: "0",
  },
  {
    id: 61,
    category: "Сеты",
    name: 'СЕТ “ASSORTI"',
    description:
      "ЗАПЕЧЁННЫЙ ВУЛКАН С КРЕВЕТКОЙ, ТЕМПУРА ЛАВА КРАБ, ТЕМПУРА ЧИЗ ХОТ, СПАЙСИ С ЛОСОСЕМ, КРАБ СПАЙСИ, ЛАВА ЛОСОСЬ, НАБОР: 4",
    price: 1950,
    imageUrl: 'assets/1MENUImages/107_СЕТ_“ASSORTI".jpg',
    gramms: "0",
  },
  {
    id: 62,
    category: "Сеты",
    name: "“ЖАРЕНО-ЗАПЕЧЁННЫЙ”",
    description:
      "ЗАПЕЧЁННЫЙ СПАЙСИ С ЛОСОСЕМ, ЗАПЕЧЁННЫЙ С КРЕВЕТКОЙ, ТЕМПУРА ЛЮКС, ДИНАМИТ, НАБОР: 2",
    price: 1550,
    imageUrl: "assets/1MENUImages/108_“ЖАРЕНО-ЗАПЕЧЁННЫЙ”.jpg",
    gramms: "0",
  },
  {
    id: 63,
    category: "Сеты",
    name: "“ФИЛАДЕЛЬФИЯ ЛЮКС”",
    description:
      "ФИЛАДЕЛЬФИЯ КЛАССИЧЕСКАЯ, ФИЛАДЕЛЬФИЯ С УГРЁМ, ФИЛАДЕЛЬФИЯ ЛАЙТ, НАБОР: 2",
    price: 1700,
    imageUrl: "assets/1MENUImages/109_“ФИЛАДЕЛЬФИЯ_ЛЮКС”.jpg",
    gramms: "0",
  },
  {
    id: 64,
    category: "Сеты",
    name: "СЕТ “VIKTORI”",
    description:
      "КАЛИФОРНИЯ В КУНЖУТЕ, ТОМАТОС МАКИ, КРАБ СПАЙСИ, КИМЧИ МАКИ, ТЕРИ МАКИ, СЯКЕ МАКИ, ЭБИ МАКИ, БОНИТО, ВОСХОД, НАБОР: 4",
    price: 2100,
    imageUrl: "assets/1MENUImages/110_СЕТ_“VIKTORI”.jpg",
    gramms: "0",
  },
  {
    id: 65,
    category: "Сеты",
    name: 'СЕТ “ИМПЕРИАЛ"',
    description:
      "ЗАПЕЧЁННЫЙ СПАЙСИ С КРЕВЕТКОЙ, ЗАПЕЧЁННЫЙ С ЛОСОСЕМ, ТЕМПУРА ЭБИ ХОТ, КАНАДСКИЙ РОЛЛ, СПАЙСИ РОЛЛ, НЕЖНОСТЬ, ЧИКЕН МАКИ, КАЛИФОРНИЯ В КУНЖУТЕ, НАБОР: 4",
    price: 2998,
    imageUrl: 'assets/1MENUImages/111_СЕТ_“ИМПЕРИАЛ".jpg',
    gramms: "0",
  },
  {
    id: 66,
    category: "WOK",
    name: "КАРБОНАРА",
    description: "ФЕТУЧИНИ ВАРЕНЫЙ, МОЦАРЕЛЛА, ВЕТЧИНА, СЛИВКИ, ЖЕЛТОК, БЕКОН",
    price: 450,
    imageUrl: "assets/1MENUImages/115_карбонара.jpg",
    gramms: "300",
  },
  {
    id: 67.1,
    category: "WOK",
    name: "ОСТРЫЙ ВОК",
    description:
      "ГОВЯДИНА/, СВИНИНА/, КУРИЦА/, ЛАПША НА ВЫБОР(!), ЛУК КРАСНЫЙ, ШИИТАКИ ГРИБЫ ВАРЕНЫЕ, ФАСОЛЬ СТРУЧКОВАЯ, ПЕРЕЦ БОЛГАРСКИЙ, СОУС КИМЧИ, СОУС АРОЙД",
    price: 400 / 375 / 350,
    imageUrl: "assets/1MENUImages/116_острый_вок.jpg",
    gramms: "300",
  },
  {
    id: 68.1,
    category: "WOK",
    name: "ВОК С ТЕРИЯКИ",
    description:
      "ГОВЯДИНА/, СВИНИНА/, КУРИЦА/, ЛАПША НА ВЫБОР, ЛУК КРАСНЫЙ, ФАСОЛЬ СТРУЧКОВАЯ, ПЕРЕЦ БОЛГАРСКИЙ, СОЕВЫЙ СОУС, СОУС ТЕРИЯКИ, ЧЕСНОК/ИМБИРЬ",
    price: 400 / 375 / 350,
    imageUrl: "assets/1MENUImages/117_вок_с_терияки.jpg",
    gramms: "300",
  },
  {
    id: 69,
    category: "Grill House",
    name: "КАРТОФЕЛЬ МОЛОДОЙ В СПЕЦИЯХ",
    description: "",
    price: 185,
    imageUrl: "",
    gramms: "150",
  },
  {
    id: 70,
    category: "Grill House",
    name: "КАРТОФЕЛЬ МОЛОДОЙ В КОЖУРЕ",
    description: "",
    price: 185,
    imageUrl: "",
    gramms: "150",
  },
  {
    id: 71,
    category: "Grill House",
    name: "КАРТОФЕЛЬ ФРИ",
    description: "",
    price: 185,
    imageUrl: "",
    gramms: "150",
  },
  {
    id: 72,
    category: "Grill House",
    name: "КОЛЬЦА ЛУКОВЫЕ",
    description: "",
    price: 105,
    imageUrl: "",
    gramms: "10",
  },
  {
    id: 73,
    category: "Grill House",
    name: "КОЛЬЦА КАЛЬМАРА",
    description: "",
    price: 150,
    imageUrl: "",
    gramms: "60",
  },
  {
    id: 74,
    category: "Grill House",
    name: "КРЫЛЫШКИ К ПИВУ",
    description: "",
    price: 225,
    imageUrl: "",
    gramms: "150",
  },
  {
    id: 75,
    category: "Grill House",
    name: "КОЛБАСКА ГРИЛЬ",
    description: "",
    price: 95,
    imageUrl: "",
    gramms: "75",
  },
  {
    id: 76,
    category: "Grill House",
    name: "КУРИЦА ГРИЛЬ",
    description: "",
    price: 650,
    imageUrl: "",
    gramms: "1000",
  },
  {
    id: 77,
    category: "Grill House",
    name: "СЫРНЫЕ ШАРИКИ",
    description: "",
    price: 200,
    imageUrl: "",
    gramms: "200",
  },
  {
    id: 78,
    category: "Grill House",
    name: "НАГГЕТСЫ",
    description: "",
    price: 199,
    imageUrl: "",
    gramms: "230",
  },
  {
    id: 79,
    category: "Grill House",
    name: "СТРИПСЫ",
    description: "",
    price: 225,
    imageUrl: "",
    gramms: "150",
  },
  {
    id: 80,
    category: "Шаурма",
    name: "ЦАРСКАЯ",
    description:
      "ЛАВАШ, МЯСО КУРИЦЫ, КАПУСТА, МОРКОВЬ ПО-КОРЕЙСКИ, КАРТОФЕЛЬ ФРИ, ТОМАТНЫЙ СОУС",
    price: 190 / 210 / 240,
    imageUrl: "",
    gramms: "300/400/500",
  },
  {
    id: 81,
    category: "Шаурма",
    name: "ГРИБНАЯ",
    description:
      "ЛАВАШ, МЯСО КУРИЦЫ, МАРИНОВАННЫЙ КРЫМСКИЙ ЛУК, ЖАРЕННЫЕ ШАМПИНЬОНЫ, КАРТОФЕЛЬ ФРИ, СВЕЖИЙ ОГУРЕЦ, ГРИБНОЙ СОУС",
    price: 210 / 230 / 270,
    imageUrl: "",
    gramms: "300/400/500",
  },
  {
    id: 82,
    category: "Шаурма",
    name: "СЫРНАЯ",
    description:
      "ЛАВАШ, МЯСО КУРИЦЫ, КАРТОФЕЛЬ ФРИ, КАПУСТА, СЫР, СВЕЖИЙ ОГУРЕЦ, СЫРНЫЙ СОУС",
    price: 210 / 230 / 270,
    imageUrl: "",
    gramms: "300/400/500",
  },
  {
    id: 83,
    category: "Шаурма",
    name: "ПЕППЕРОНИ",
    description:
      "ЛАВАШ, ПЕППЕРОНИ, МОРКОВЬ ПО-КОРЕЙСКИ, КАРТОФЕЛЬ ФРИ, ПОМИДОРЫ, МАРИНОВАННЫЕ ОГУРЦЫ, ТОМАТНЫЙ СОУС",
    price: 250 / 310 / 370,
    imageUrl: "",
    gramms: "300/400/500",
  },
  {
    id: 84,
    category: "Шаурма",
    name: "ГАВАЙСКАЯ",
    description:
      " ЛАВАШ, МЯСО КУРИЦЫ, КАРТОФЕЛЬ ФРИ, АНАНАС, СЫР, ПЕКИНСКАЯ КАПУСТА, СОУС",
    price: 230 / 245 / 270,
    imageUrl: "",
    gramms: "300/400/500",
  },
  {
    id: 85,
    category: "Шаурма",
    name: "МЯСНАЯ",
    description:
      "ЛАВАШ, СВИНИНА В ПАНИРОВКЕ, ТОМАТЫ, ОГУРЕЦ, КАРТОФЕЛЬ ФРИ, СЫРНЫЙ СОУС",
    price: 250 / 310 / 370,
    imageUrl: "",
    gramms: "300/400/500",
  },
  {
    id: 86,
    category: "Шаурма",
    name: "КРАБОВАЯ",
    description:
      "ЛАВАШ, КРАБОВОЕ МЯСО, МАРИНОВАННЫЙ ЛУК, ОГУРЕЦ, МОРКОВЬ, КАПУСТА, СОУС/МАЙОНЕЗ И СОЕВЫЙ",
    price: 230 / 280 / 320,
    imageUrl: "",
    gramms: "300/400/500",
  },
  {
    id: 87,
    category: "Хот-Дог",
    name: "КЛАССИЧЕСКИЙ",
    description:
      "БУЛОЧКА, САРДЕЛЬКА-ГРИЛЬ, СВЕЖИЙ ОГУРЕЦ, БЕЛЫЙ СОУС, КРАСНЫЙ СОУС",
    price: 165,
    imageUrl: "",
    gramms: "200",
  },
  {
    id: 88,
    category: "Хот-Дог",
    name: "ФРАНЦУЗСКИЙ",
    description:
      "БУЛОЧКА, САРДЕЛЬКА-ГРИЛЬ, ТОМАТЫ, СЫР, БЕЛЫЙ СОУС, КРАСНЫЙ СОУС",
    price: 175,
    imageUrl: "",
    gramms: "200",
  },
  {
    id: 89,
    category: "Хот-Дог",
    name: "НЕМЕЦКИЙ",
    description:
      "БУЛОЧКА, САРДЕЛЬКА-ГРИЛЬ, МАРИНОВАННЫЙ ОГУРЕЦ, МАРИНОВАННЫЙ ЛУК, БЕЛЫЙ СОУС, КРАСНЫЙ СОУС, ДИЖОНСКАЯ ГОРЧИЦА",
    price: 185,
    imageUrl: "",
    gramms: "200",
  },
  {
    id: 90,
    category: "Хот-Дог",
    name: "ГРИБНОЙ",
    description:
      "БУЛОЧКА, САРДЕЛЬКА-ГРИЛЬ, ГРИБЫ, МАРИНОВАННЫЙ ЛУК, БЕЛЫЙ СОУС",
    price: 200,
    imageUrl: "",
    gramms: "200",
  },
  {
    id: 91,
    category: "Хот-Дог",
    name: "В ЛАВАШЕ",
    description:
      "ЛАВАШ, САРДЕЛЬКА-ГРИЛЬ, КАПУСТА, МОРКОВЬ ПО-КОРЕЙСКИ, СВЕЖИЙ ОГУРЕЦ, ТОМАТЫ, МАРИНОВАННЫЙ ЛУК, СЫР, СОУС",
    price: 220,
    imageUrl: "",
    gramms: "200",
  },
  {
    id: 92,
    category: "Чизкейк",
    name: "ФИСТАШКОВЫЙ",
    description: "",
    price: 100,
    imageUrl: "assets/1MENUImages/150_ФИСТАШКОВЫЙ.jpg",
    gramms: "100",
  },
  {
    id: 93,
    category: "Чизкейк",
    name: "ЯБЛОЧНЫЙ",
    description: "",
    price: 140,
    imageUrl: "assets/1MENUImages/151_ЯБЛОЧНЫЙ.png",
    gramms: "100",
  },
  {
    id: 94,
    category: "Чизкейк",
    name: "НЬЮ-ЙОРК КОКОС",
    description: "",
    price: 100,
    imageUrl: "assets/1MENUImages/152_НЬЮ-ЙОРК_КОКОС.jpg",
    gramms: "100",
  },
  {
    id: 95,
    category: "Кофе",
    name: "ДВОЙНОЙ ЭСПРЕССО",
    description: "",
    price: 150,
    imageUrl: "",
    gramms: "60",
  },
  {
    id: 96,
    category: "Кофе",
    name: "ДВОЙНОЙ АМЕРИКАНО",
    description: "",
    price: 140,
    imageUrl: "",
    gramms: "60",
  },
  {
    id: 97,
    category: "Кофе",
    name: "ЭСПРЕССО",
    description: "",
    price: 130,
    imageUrl: "",
    gramms: "30",
  },
  {
    id: 98,
    category: "Кофе",
    name: "АМЕРИКАНО",
    description: "",
    price: 120,
    imageUrl: "",
    gramms: "100",
  },
  {
    id: 99,
    category: "Кофе",
    name: "КАПУЧИНО",
    description: "",
    price: 140,
    imageUrl: "",
    gramms: "100",
  },
  {
    id: 100,
    category: "Кофе",
    name: "ЛАТТЕ",
    description: "",
    price: 140,
    imageUrl: "",
    gramms: "100",
  },
  {
    id: 101,
    category: "Кофе",
    name: "МОЛОКО",
    description: "",
    price: 25,
    imageUrl: "",
    gramms: "20",
  },
  {
    id: 102,
    category: "Кофе",
    name: "СИРОПЫ",
    description: "СОЛЁНАЯ КАРАМЕЛЬ, МИНДАЛЬ, ВАНИЛЬ, ШОКОЛАД, КОКОС",
    price: 25,
    imageUrl: "",
    gramms: "5-15",
  },
];
