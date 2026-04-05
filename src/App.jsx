import { useState, useEffect } from "react";
import {
  BRAND, BRAND_LIGHT, BRAND_DARK, LAVENDER, WHITE, GRAY_50, GRAY_100, GRAY_200,
  GRAY_400, GRAY_600, GRAY_900, RED, GREEN, AMBER,
  BusyMeter, SmartSwapButton, LiveActivityMockup, CoffeeCupGamification,
  PerfectPair, FloatingMenu, CoffeeTinder, MenuScreen
} from "./components";

/* ============================================================
   THEME SYSTEM (Light/Dark mode)
   ============================================================ */
const themes = {
  light: {
    bg: WHITE,
    bgSecondary: GRAY_50,
    text: GRAY_900,
    textSecondary: GRAY_600,
    border: GRAY_200,
    card: WHITE,
  },
  dark: {
    bg: "#1A1A1A",
    bgSecondary: "#2A2A2A",
    text: "#F5F5F5",
    textSecondary: "#B0B0B0",
    border: "#444444",
    card: "#252525",
  }
};

/* ============================================================
   INTERNATIONALIZATION (i18n) - COMPREHENSIVE
   ============================================================ */
const translations = {
  kz: {
    menu: "меню",
    cart: "себет",
    coffeepass: "кофепасс",
    profile: "профиль",
    emptyCart: "Себет бос",
    addToCart: "Қосу",
    start: "Бастау",
    language: "Тіл",
    theme: "Тақырыпты",
    lightMode: "Ашық",
    darkMode: "Қараңғы",
    onboardingTitle: "Дринкит — сіздің кофе-достыңыз",
    onboardingSubtitle: "Тез тапсырыс, үнемі дамиды, ерте кофе",
    allOrders: "Барлық тапсырыстар",
    orderHistory: "Тапсырыс тарихы",
    activeOrders: "Іс жүргілік тапсырыстар",
    pastOrders: "Өткен тапсырыстар",
    whatToOrder: "Келесі не тапсырыстарсыз?",
    support: "Қолдау",
    settings: "Баптаулар",
    birthday: "Туған күні",
    favoriteMilk: "Сүйік сүт",
    notifications: "Хабарламалар",
    promoAlerts: "Акция хабарлары",
    paymentMethods: "Төлем әдістері",
    kaspiQR: "Kaspi QR",
    applePay: "Apple Pay",
    bankCard: "Банк картасы",
    support_chat: "Хабарлама жаз...",
    rating: "Бағалау",
    review: "Пікір",
    coffee_author: "Нымдала кофе",
    tea_author: "Авторлық чай",
    matcha: "Матча",
    ice_milk: "Суық сүтті",
    coffee_milk: "Сүтті кофе",
    food: "Тағам",
    d1: "Капучино Ягодное печенье",
    d2: "Раф Сливочное печенье",
    d3: "Баббл-ти Жасминовое печенье",
    d4: "Айс Матча Рассвет",
    d5: "Айс латте",
    d6: "Айс латте с солёной карамелью",
    d7: "Айс мокко",
    d8: "Айс мокко малиновый",
    d9: "Чизкейк Ежевичный",
    d10: "Багет с моцареллой",
    d11: "Фокачча с индейкой",
    d12: "Трубочка со сгущёнкой",
    d13: "Латте",
    d14: "Капучино",
    d15: "Раф классический",
    registerTitle: "Қош келдіңіз Drinkit-ке!",
    registerDesc: "Тез тапсырыс үшін тіркеліңіз",
    name: "Аты",
    phone: "Телефон номері",
    email: "Электрондық пошта",
    register: "Тіркеу",
    enterName: "Өз атыңызды енгізіңіз",
    enterPhone: "Телефон номерін енгізіңіз",
    enterEmail: "Электрондық пошталы адресті енгізіңіз",
    orders: "Тапсырыстар",
    personalInfo: "Түлік ақпараты",
    addCard: "Карта қосу",
    saveCard: "Сохранить",
    logout: "Шығу",
    noActiveOrders: "Іс жүргілік тапсырыстар жоқ",
    nextDrink: "Келесі ішімдік 3 тапсырыстан кейін!",
    membershipDuration: "Мүшелігі",
    totalOrders: "Тапсырыстар",
    rating: "Рейтинг",
    favorites: "Таңдаулы",
    preferences: "ЫҢҒАЙЛЫЛЫҚ",
    profile_section: "ПРОФИЛЬ",
    typeMessage: "Хабарлама жаз...",
    freedrinkProgress: "Тегін сусынға дейін",
    errorEmailRequired: "Пошта міндетті",
    errorEmailInvalid: "Пошта @ таңбасының болуы керек",
    errorPhoneRequired: "Телефон номері міндетті",
    errorPhoneInvalid: "Номер 8-нен басталуы және тек сандар болуы керек (мысалы: 87071234567)",
    scanQR: "Kaspi.kz арқылы сканерлеу",
    pay: "Төлеу",
    paymentConfirm: "Төлемді растау",
    coffeepassTitle: "Кофе өтімі",
    coffeepassPrice: "Ай сайын: 4,990 ₸",
    coffeepassDesc: "Сүздік ішімдіктер, сақтaу күнінде ақысыз ішімдік",
    selectPayment: "Төлем әдісін таңдаңыз",
    profileSettings: "Баптаулар",
    presetApplied: "Сіздің баптауларыңыз қолданылды!",
    dontKnow: "Не таңдауды білмейсіз бе?",
    selectCoffeeShop: "Кофейня таңдау",
    searchPlaceholder: "Іздеу...",
    like: "Сізге ұнауы мүмкін ✨",
    searchResults: "Іздеу нәтижелері",
    drink80Percent: "👥 80% қонақтар сүтпен алады",
    selectSize: "Өлшем таңдау",
    small: "Кіші",
    medium: "Орташа",
    large: "Үлкен",
    price: "Ағы",
    noResults: "Нәтиже табылмады",
    paymentCardForm: "4111 1111 1111 1111",
    save: "Сохранить",
    month: "месяц",
    cancel: "Бас тарту",
    confirm: "Растау",
    cardNumber: "Карт номері",
    cardNumberPlaceholder: "0000 0000 0000 0000",
    cardholderName: "Карт ұстау атауы",
    cardholderNamePlaceholder: "ТОЛЫҚ АТЫ",
    expiryDate: "Мерзімі MM/YY",
    cvv: "CVV",
    cvvPlaceholder: "***",
    invalidCardNumber: "Қате карт номері",
    invalidExpiry: "Қате мерзімі (MM/YY)",
    invalidCVV: "CVV 3 сандан тұру керек",
    saveNewCard: "Жаңа карт сақтау",
    maskedCard: "Сақталған карта",
    viewOnMap: "Картада көру",
    astanaLocations: "Астана орындары",
    selectOnMap: "Картада таңдау",
  },
  ru: {
    menu: "меню",
    cart: "корзина",
    coffeepass: "кофепасс",
    profile: "профиль",
    emptyCart: "Корзина пуста",
    addToCart: "Добавить",
    start: "Начать",
    language: "Язык",
    theme: "Тема",
    lightMode: "Светлая",
    darkMode: "Тёмная",
    onboardingTitle: "Drinkit — твой кофейный помощник",
    onboardingSubtitle: "Быстрый заказ, бонусы, кофе в пути",
    allOrders: "Все заказы",
    orderHistory: "История заказов",
    activeOrders: "Активные заказы",
    pastOrders: "Прошлые заказы",
    whatToOrder: "Что заказать дальше?",
    support: "Поддержка",
    settings: "Настройки",
    birthday: "День рождения",
    favoriteMilk: "Любимое молоко",
    notifications: "Уведомления",
    promoAlerts: "Промо-уведомления",
    paymentMethods: "Способы оплаты",
    kaspiQR: "Kaspi QR",
    applePay: "Apple Pay",
    bankCard: "Банковская карта",
    support_chat: "Введите сообщение...",
    rating: "Оценка",
    review: "Отзыв",
    coffee_author: "Авторский кофе",
    tea_author: "Авторский чай",
    matcha: "Матча",
    ice_milk: "Холодный с молоком",
    coffee_milk: "Кофе с молоком",
    food: "Еда",
    d1: "Капучино Ягодное печенье",
    d2: "Раф Сливочное печенье",
    d3: "Баббл-ти Жасминовое печенье",
    d4: "Айс Матча Рассвет",
    d5: "Айс латте",
    d6: "Айс латте с солёной карамелью",
    d7: "Айс мокко",
    d8: "Айс мокко малиновый",
    d9: "Чизкейк Ежевичный",
    d10: "Багет с моцареллой",
    d11: "Фокачча с индейкой",
    d12: "Трубочка со сгущёнкой",
    d13: "Латте",
    d14: "Капучино",
    d15: "Раф классический",
    registerTitle: "Добро пожаловать в Drinkit!",
    registerDesc: "Зарегистрируйтесь для быстрой доставки",
    name: "Имя",
    phone: "Номер телефона",
    email: "Почта",
    register: "Зарегистрироваться",
    enterName: "Введите ваше имя",
    enterPhone: "Введите номер телефона",
    enterEmail: "Введите адрес почты",
    orders: "Заказы",
    personalInfo: "Личная информация",
    addCard: "Добавить карту",
    saveCard: "Сохранить",
    logout: "Выход",
    noActiveOrders: "Активные заказы отсутствуют",
    nextDrink: "Следующий напиток через 3 заказа!",
    membershipDuration: "Членство",
    totalOrders: "Заказы",
    rating: "Рейтинг",
    favorites: "Избранное",
    preferences: "ПРЕДПОЧТЕНИЯ",
    profile_section: "ПРОФИЛЬ",
    typeMessage: "Введите сообщение...",
    freedrinkProgress: "До бесплатного напитка",
    errorEmailRequired: "Почта обязательна",
    errorEmailInvalid: "Почта должна содержать @",
    errorPhoneRequired: "Номер телефона обязателен",
    errorPhoneInvalid: "Номер должен состоять только из цифр и начинаться с 8 (например: 87071234567)",
    scanQR: "Сканируйте через Kaspi.kz",
    pay: "Оплатить",
    paymentConfirm: "Подтверждение платежа",
    coffeepassTitle: "Кофе-пасс",
    coffeepassPrice: "В месяц: 4,990 ₸",
    coffeepassDesc: "Неограниченные напитки, один бесплатный напиток на день рождения",
    selectPayment: "Выберите способ оплаты",
    profileSettings: "Настройки профиля",
    presetApplied: "Ваши настройки применены!",
    dontKnow: "Не знаете, что выбрать?",
    selectCoffeeShop: "Выберите кофейню",
    searchPlaceholder: "Поиск...",
    like: "Вам может понравиться ✨",
    searchResults: "Результаты поиска",
    drink80Percent: "👥 80% клиентов предпочитают молоко",
    selectSize: "Выберите размер",
    small: "Маленький",
    medium: "Средний",
    large: "Большой",
    price: "Цена",
    noResults: "Результатов не найдено",
    paymentCardForm: "4111 1111 1111 1111",
    save: "Сохранить",
    month: "месяц",
    cancel: "Отмена",
    confirm: "Подтвердить",
    cardNumber: "Номер карты",
    cardNumberPlaceholder: "0000 0000 0000 0000",
    cardholderName: "Имя владельца",
    cardholderNamePlaceholder: "ПОЛНОЕ ИМЯ",
    expiryDate: "Период действия MM/YY",
    cvv: "CVV",
    cvvPlaceholder: "***",
    invalidCardNumber: "Неверный номер карты",
    invalidExpiry: "Неверный период (MM/YY)",
    invalidCVV: "CVV должен содержать 3 цифры",
    saveNewCard: "Сохранить новую карту",
    maskedCard: "Сохраненная карта",
    viewOnMap: "Показать на карте",
    astanaLocations: "Локации в Астане",
    selectOnMap: "Выбрать на карте",
  },
  en: {
    menu: "menu",
    cart: "cart",
    coffeepass: "coffee pass",
    profile: "profile",
    emptyCart: "Cart is empty",
    addToCart: "Add",
    start: "Start",
    language: "Language",
    theme: "Theme",
    lightMode: "Light",
    darkMode: "Dark",
    onboardingTitle: "Drinkit — Your Coffee Companion",
    onboardingSubtitle: "Fast orders, rewards, coffee on the go",
    allOrders: "All Orders",
    orderHistory: "Order History",
    activeOrders: "Active Orders",
    pastOrders: "Past Orders",
    whatToOrder: "What to order next?",
    support: "Support",
    settings: "Settings",
    birthday: "Birthday",
    favoriteMilk: "Favorite Milk",
    notifications: "Notifications",
    promoAlerts: "Promo Alerts",
    paymentMethods: "Payment Methods",
    kaspiQR: "Kaspi QR",
    applePay: "Apple Pay",
    bankCard: "Bank Card",
    support_chat: "Type your message...",
    rating: "Rating",
    review: "Review",
    coffee_author: "Author's Coffee",
    tea_author: "Author's Tea",
    matcha: "Matcha",
    ice_milk: "Cold with Milk",
    coffee_milk: "Coffee with Milk",
    food: "Food",
    d1: "Berry Cookie Cappuccino",
    d2: "Creamy Cookie Raf",
    d3: "Jasmine Pearl Bubble Tea",
    d4: "Iced Matcha Sunrise",
    d5: "Iced Latte",
    d6: "Iced Latte with Salted Caramel",
    d7: "Iced Mocha",
    d8: "Raspberry Iced Mocha",
    d9: "Blackberry Cheesecake",
    d10: "Baguette with Mozzarella",
    d11: "Turkey Focaccia",
    d12: "Condensed Milk Pastry",
    d13: "Latte",
    d14: "Cappuccino",
    d15: "Classic Raf",
    registerTitle: "Welcome to Drinkit!",
    registerDesc: "Register for fast delivery",
    name: "Name",
    phone: "Phone Number",
    email: "Email",
    register: "Register",
    enterName: "Enter your name",
    enterPhone: "Enter phone number",
    enterEmail: "Enter email address",
    orders: "Orders",
    personalInfo: "Personal Info",
    addCard: "Add Card",
    saveCard: "Save",
    logout: "Logout",
    noActiveOrders: "No active orders",
    nextDrink: "Next drink in 3 orders!",
    membershipDuration: "Membership",
    totalOrders: "Orders",
    rating: "Rating",
    favorites: "Favorites",
    preferences: "PREFERENCES",
    profile_section: "PROFILE",
    typeMessage: "Type your message...",
    freedrinkProgress: "Until free drink",
    errorEmailRequired: "Email is required",
    errorEmailInvalid: "Email must contain @",
    errorPhoneRequired: "Phone number is required",
    errorPhoneInvalid: "Phone must contain only digits and start with 8 (e.g., 87071234567)",
    scanQR: "Scan via Kaspi.kz",
    pay: "Pay",
    paymentConfirm: "Payment Confirmation",
    coffeepassTitle: "Coffee Pass",
    coffeepassPrice: "Monthly: 4,990 ₸",
    coffeepassDesc: "Unlimited drinks, one free drink on your birthday",
    selectPayment: "Select payment method",
    profileSettings: "Settings",
    presetApplied: "Your settings applied!",
    dontKnow: "Not sure what to choose?",
    selectCoffeeShop: "Select coffee shop",
    searchPlaceholder: "Search...",
    like: "You may like ✨",
    searchResults: "Search results",
    drink80Percent: "👥 80% customers prefer milk",
    selectSize: "Select size",
    small: "Small",
    medium: "Medium",
    large: "Large",
    price: "Price",
    noResults: "No results found",
    paymentCardForm: "4111 1111 1111 1111",
    save: "Save",
    month: "month",
    cancel: "Cancel",
    confirm: "Confirm",
    cardNumber: "Card Number",
    cardNumberPlaceholder: "0000 0000 0000 0000",
    cardholderName: "Cardholder Name",
    cardholderNamePlaceholder: "FULL NAME",
    expiryDate: "Expiry MM/YY",
    cvv: "CVV",
    cvvPlaceholder: "***",
    invalidCardNumber: "Invalid card number",
    invalidExpiry: "Invalid expiry (MM/YY)",
    invalidCVV: "CVV must be 3 digits",
    saveNewCard: "Save New Card",
    maskedCard: "Saved Card",
    viewOnMap: "View on Map",
    astanaLocations: "Astana Locations",
    selectOnMap: "Select on Map",
  }
};

/* ============================================================
   DRINKS DATA WITH REALISTIC UNSPLASH IMAGES
   ============================================================ */
const allDrinks = [
  { id: 1, name: "Капучино Ягодное печенье", price: 1800, cat: "coffee_author", em: "🔥☕🫐", hero: true, heroColor: "#E8D4C8", cal: 320, protein: 6.2, fat: 12.1, carb: 38.5, type: "drink", rating: 4.8 },
  { id: 2, name: "Раф Сливочное печенье", price: 2100, cat: "coffee_author", em: "🔥☕🥛", heroColor: "#F0D8E0", cal: 380, protein: 7.1, fat: 15.3, carb: 42.0, type: "drink", rating: 4.9 },
  { id: 3, name: "Баббл-ти Жасминовое печенье", price: 2500, cat: "tea_author", em: "🧊🍵🌸", hero: true, heroColor: "#E0D0E8", cal: 290, protein: 4.5, fat: 8.2, carb: 45.0, type: "drink", rating: 4.7 },
  { id: 4, name: "Айс Матча Рассвет", price: 2500, cat: "matcha", em: "🧊🍵🫐", hero: true, heroColor: "#D0E0D8", cal: 250, protein: 5.0, fat: 9.0, carb: 35.0, type: "drink", rating: 4.6 },
  { id: 5, name: "Айс латте", price: 1600, cat: "ice_milk", em: "🧊☕🥛", hero: true, heroColor: "#E8D0B8", cal: 180, protein: 5.5, fat: 6.8, carb: 22.0, type: "drink", rating: 4.8 },
  { id: 6, name: "Айс латте с солёной карамелью", price: 2400, cat: "ice_milk", em: "🧊☕🍮", heroColor: "#D8C0A0", cal: 420, protein: 8.8, fat: 18.4, carb: 52.4, outOfStock: true, type: "drink", rating: 4.9 },
  { id: 7, name: "Айс мокко", price: 1700, cat: "ice_milk", em: "🧊☕🍫", heroColor: "#C8B0A0", cal: 350, protein: 7.2, fat: 14.0, carb: 40.0, type: "drink", rating: 4.7 },
  { id: 8, name: "Айс мокко малиновый", price: 2050, cat: "ice_milk", em: "🧊☕🫐", heroColor: "#E0C0D0", cal: 390, protein: 7.0, fat: 13.5, carb: 48.0, type: "drink", rating: 4.8 },
  { id: 9, name: "Чизкейк Ежевичный", price: 1700, cat: "food", em: "🍰", heroColor: "#E0C8D8", cal: 420, protein: 8.0, fat: 22.0, carb: 45.0, type: "food", sizes: { small: 0.8, medium: 1.0, large: 1.3 }, rating: 4.5 },
  { id: 10, name: "Багет с моцареллой", price: 1400, cat: "food", em: "🥖", cal: 350, protein: 15.0, fat: 12.0, carb: 38.0, type: "food", sizes: { small: 0.8, medium: 1.0, large: 1.3 }, rating: 4.4 },
  { id: 11, name: "Фокачча с индейкой", price: 1800, cat: "food", em: "🥪", cal: 380, protein: 22.0, fat: 14.0, carb: 35.0, type: "food", sizes: { small: 0.8, medium: 1.0, large: 1.3 }, rating: 4.6 },
  { id: 12, name: "Трубочка со сгущёнкой", price: 700, cat: "food", em: "🥐", cal: 280, protein: 4.0, fat: 14.0, carb: 32.0, type: "food", sizes: { small: 0.8, medium: 1.0, large: 1.3 }, rating: 4.3 },
  { id: 13, name: "Латте", price: 1500, cat: "coffee_milk", em: "🔥☕🥛", heroColor: "#E8D8C0", cal: 180, protein: 6.0, fat: 7.0, carb: 20.0, type: "drink", rating: 4.7 },
  { id: 14, name: "Капучино", price: 1400, cat: "coffee_milk", em: "🔥☕☕", heroColor: "#D8C8B8", cal: 150, protein: 5.5, fat: 6.0, carb: 18.0, type: "drink", rating: 4.8 },
  { id: 15, name: "Раф классический", price: 1900, cat: "coffee_milk", em: "🔥☕🥛", heroColor: "#E0D0C0", cal: 320, protein: 7.0, fat: 16.0, carb: 35.0, type: "drink", rating: 4.9 },
];

const mainTabs = [
  { key: "for_you", label: "для тебя", icon: "✨" },
  { key: "seasonal", label: "весна 🌸", icon: "🌸" },
  { key: "coffee", label: "кофе", icon: "☕" },
  { key: "not_coffee", label: "не кофе", icon: "🍵" },
  { key: "food", label: "еда", icon: "🍰" },
];

const coffeeShops = [
  { id: 1, name: "Drinkit на Ботаническом", address: "Ул. Бухар Жырау, 28Б (ЖК 'Дом на Ботаническом')", dist: "0.5 км", time: "5 мин", fav: true },
  { id: 2, name: "Drinkit Highvill Astana", address: "Ул. Ахмета Байтурсунова, 9 (Highvill Astana)", dist: "1.2 км", time: "8 мин", fav: true },
  { id: 3, name: "Drinkit на водно-зеленом БУ", address: "Ул. Динмухамеда Кунаева, 12/1 (БЦ 'На водно-зеленом бульваре')", dist: "2.0 км", time: "12 мин", fav: false },
  { id: 4, name: "Drinkit Mega Silk Way", address: "Просп. Кабанбай Батыра, 62 (ТРЦ Mega Silk Way)", dist: "3.2 км", time: "18 мин", fav: false },
  { id: 5, name: "Drinkit НАЗ", address: "Просп. Кабанбай Батыра, 53 (Назарбаев Университет)", dist: "2.8 км", time: "15 мин", fav: false },
];

const milkOptions = [
  { name: "Коровье", price: 0 },
  { name: "Овсяное", price: 350 },
  { name: "Миндальное", price: 550 },
  { name: "Банановое", price: 550 },
  { name: "Безлактозное", price: 500 },
  { name: "Сливки", price: 550 },
];
const toppingOptions = [
  { name: "Черника-убе", price: 50 },
  { name: "Малиновая", price: 50 },
  { name: "Карамель", price: 50 },
  { name: "Маршмеллоу", price: 100 },
  { name: "Какао", price: 0 },
];
const syrupOptions = [
  { name: "Ванильный", price: 250 },
  { name: "Кокосовый", price: 250 },
  { name: "Каштановый", price: 250 },
  { name: "Малиновый", price: 250 },
];
const foamOptions = [
  { name: "Ежевика-таро", price: 500 },
  { name: "Сырная пенка", price: 500 },
];

const customCategories = [
  { key: "milk", label: "Молоко", icon: "🥛" },
  { key: "toppings", label: "Посыпки", icon: "✨" },
  { key: "foams", label: "Пенки", icon: "☁️" },
  { key: "syrup", label: "Сиропы", icon: "🍯" },
  { key: "espresso", label: "Эспрессо", icon: "☕" },
  { key: "ice", label: "Лёд", icon: "🧊" },
  { key: "cup", label: "Стакан", icon: "🥤" },
];

function WhaleLogo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill={BRAND} />
      <path d="M12 22c0-5 4-9 8-9s8 4 8 9c0 3-2 5-4 6l-1-2c1-1 2-2 2-4 0-3-2-6-5-6s-5 3-5 6c0 2 1 3 2 4l-1 2c-2-1-4-3-4-6z" fill="white" />
      <circle cx="16" cy="20" r="1.5" fill="white" />
      <path d="M28 15c1-2 3-3 3-3s-1 3-2 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ============================================================
   ONBOARDING SCREEN (Merged to single impactful screen)
   ============================================================ */
function OnboardingScreen({ onComplete }) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center", background: `linear-gradient(180deg, #E8DFF0 0%, #D0E0D8 50%, #E0D0E8 100%)` }}>
      <div style={{ fontSize: 60, marginBottom: 20 }}>☕</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: GRAY_900, marginBottom: 8, lineHeight: 1.3 }}>Drinkit</div>
      <div style={{ fontSize: 15, color: GRAY_600, lineHeight: 1.6, maxWidth: 280, marginBottom: 30 }}>Тез тапсырыс, үнемі дамиды, ерте кофе. Сіздің кофе-достыңыз.</div>

      {/* Quick features */}
      <div style={{ display: "flex", gap: 12, marginBottom: 40, maxWidth: 300 }}>
        <div style={{ flex: 1, padding: 12, background: "rgba(255,255,255,0.7)", borderRadius: 14 }}>
          <div style={{ fontSize: 24, marginBottom: 4 }}>⚡</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: GRAY_900 }}>Тез</div>
        </div>
        <div style={{ flex: 1, padding: 12, background: "rgba(255,255,255,0.7)", borderRadius: 14 }}>
          <div style={{ fontSize: 24, marginBottom: 4 }}>🎁</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: GRAY_900 }}>Бонус</div>
        </div>
        <div style={{ flex: 1, padding: 12, background: "rgba(255,255,255,0.7)", borderRadius: 14 }}>
          <div style={{ fontSize: 24, marginBottom: 4 }}>❤️</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: GRAY_900 }}>Қонды</div>
        </div>
      </div>

      <button onClick={onComplete} style={{ padding: "16px 48px", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 16, fontWeight: 700, cursor: "pointer", marginBottom: 12, width: "100%", maxWidth: 200 }}>
        Бастау
      </button>
      <button onClick={onComplete} style={{ padding: "12px 0", background: "none", color: GRAY_600, border: "none", fontSize: 14, cursor: "pointer", textDecoration: "underline" }}>
        Кейінірек
      </button>
    </div>
  );
}

/* ============================================================
   COFFEE SHOP PICKER (With real addresses)
   ============================================================ */
function CoffeeShopPicker({ onSelect, onClose, theme, language, onNavigate }) {
  const [search, setSearch] = useState("");
  const filtered = coffeeShops.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()));
  const themeColors = themes[theme];
  const t = translations[language] || translations.en;

  return (
    <div style={{ padding: "16px", color: themeColors.text, background: themeColors.bg }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <span style={{ fontSize: 18, fontWeight: 600, color: themeColors.text }}>{t.selectCoffeeShop}</span>
        <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 20, color: themeColors.textSecondary, cursor: "pointer" }}>✕</button>
      </div>
      <div style={{ position: "relative", marginBottom: 14 }}>
        <input type="text" placeholder={t.searchPlaceholder}
          value={search} onChange={e => setSearch(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", padding: "11px 12px 11px 38px", border: `1px solid ${themeColors.border}`, borderRadius: 14, fontSize: 14, background: themeColors.bgSecondary, outline: "none", color: themeColors.text }}
        />
        <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
      </div>
      {onNavigate && (
        <button onClick={() => { onNavigate("map_view"); onClose(); }} style={{ width: "100%", padding: "10px", background: BRAND, color: WHITE, border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer", marginBottom: 12, fontSize: 14 }}>
          🗺️ {t.viewOnMap}
        </button>
      )}
      {filtered.filter(c => c.fav).map(c => (
        <div key={c.id} onClick={() => onSelect(c)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: BRAND_LIGHT, borderRadius: 14, marginBottom: 8, cursor: "pointer", border: `1.5px solid ${BRAND}30` }}>
          <WhaleLogo size={32} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: GRAY_900 }}>{c.name}</div>
            <div style={{ fontSize: 11, color: GRAY_600, marginBottom: 2 }}>{c.address}</div>
            <div style={{ fontSize: 12, color: GRAY_600 }}>{c.dist} · ~{c.time}</div>
          </div>
          <span style={{ color: AMBER }}>⭐</span>
        </div>
      ))}
      {filtered.filter(c => !c.fav).map(c => (
        <div key={c.id} onClick={() => onSelect(c)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: themeColors.card, border: `0.5px solid ${themeColors.border}`, borderRadius: 14, marginBottom: 8, cursor: "pointer" }}>
          <WhaleLogo size={32} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: themeColors.text }}>{c.name}</div>
            <div style={{ fontSize: 11, color: themeColors.textSecondary, marginBottom: 2 }}>{c.address}</div>
            <div style={{ fontSize: 12, color: themeColors.textSecondary }}>{c.dist} · ~{c.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   HOME SCREEN (Main menu with theme support)
   ============================================================ */
function HomeScreen({ onNavigate, onAddToCart, onRepeatOrder, selectedShop, onChangeShop, userPrefs, milkPrefsTracker, onShowTinder, currentScreenId, theme, language }) {
  const [activeTab, setActiveTab] = useState("for_you");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);

  const themeColors = themes[theme];
  const t = translations[language];

  const getFiltered = () => {
    if (searchQuery) return allDrinks.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (activeTab === "for_you") return [];
    if (activeTab === "seasonal") return allDrinks.filter(d => ["coffee_author", "tea_author", "matcha"].includes(d.cat));
    if (activeTab === "coffee") return allDrinks.filter(d => ["ice_milk", "coffee_milk"].includes(d.cat));
    if (activeTab === "food") return allDrinks.filter(d => d.cat === "food");
    return allDrinks.slice(0, 6);
  };
  const filtered = getFiltered();

  return (
    <div style={{ background: themeColors.bg, color: themeColors.text }}>
      {/* Header */}
      <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `0.5px solid ${themeColors.border}` }}>
        <div onClick={onChangeShop} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
          <WhaleLogo size={36} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: themeColors.text }}>{selectedShop.name}</div>
            <div style={{ fontSize: 12, color: themeColors.textSecondary }}>до 23:00</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => onNavigate("orderHistory")} style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${themeColors.border}`, background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: themeColors.text, fontSize: 16 }}>📋</button>
          <button onClick={() => setShowSearch(!showSearch)} style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${themeColors.border}`, background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: themeColors.text }}>
            <span style={{ fontSize: 16 }}>🔍</span>
          </button>
          <button onClick={() => onNavigate("profile")} style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${themeColors.border}`, background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: themeColors.text, fontSize: 16 }}>👤</button>
        </div>
      </div>

      {/* Search bar */}
      {showSearch && (
        <div style={{ padding: "0 16px 10px", background: themeColors.bg }}>
          <div style={{ position: "relative" }}>
            <input type="text" placeholder="Сусын немесе тағам іздеу..." autoFocus
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", padding: "11px 12px 11px 38px", border: `1.5px solid ${BRAND}`, borderRadius: 14, fontSize: 14, background: themeColors.card, outline: "none", color: themeColors.text }}
            />
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
            {searchQuery && (
              <button onClick={() => { setSearchQuery(""); setShowSearch(false) }} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: 16, cursor: "pointer", color: GRAY_400 }}>✕</button>
            )}
          </div>
        </div>
      )}

      {!searchQuery && (
        <>
          {/* Loyalty progress */}
          <div style={{ margin: "8px 16px", background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #F0E8FF 100%)`, borderRadius: 16, padding: "14px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: BRAND_DARK }}>🎁 Тегін сусынға дейін</span>
              <span style={{ fontSize: 13, color: BRAND, fontWeight: 700 }}>7/10</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.8)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: "70%", height: "100%", background: `linear-gradient(90deg, ${BRAND} 0%, #6B8BFF 100%)`, borderRadius: 3, transition: "width 0.5s" }} />
            </div>
          </div>

          {/* Hero Banner */}
          <div onClick={() => setActiveTab("seasonal")} style={{ margin: "8px 16px", borderRadius: 20, overflow: "hidden", height: 180, background: "linear-gradient(135deg, #E8C8D8 0%, #D0B8E0 50%, #E8DFF0 100%)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 56 }}>☕</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: GRAY_900 }}>Проснись со мной</div>
            </div>
          </div>

          {/* Main Tabs */}
          <div style={{ display: "flex", gap: 0, overflowX: "auto", padding: "0 16px", marginBottom: 6, WebkitScrollbar: { display: "none" }, scrollbarWidth: "none" }}>
            {mainTabs.map(tab => {
              const isActive = activeTab === tab.key;
              const activeTextColor = theme === "dark" ? WHITE : GRAY_900;
              const inactiveTextColor = theme === "dark" ? GRAY_400 : GRAY_400;
              return (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
                  padding: "8px 14px", border: "none", background: "none", fontSize: 15,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? activeTextColor : inactiveTextColor,
                  cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                  borderBottom: isActive ? `2px solid ${activeTextColor}` : "2px solid transparent",
                }}>{tab.label}</button>
              );
            })}
          </div>

          {/* Quiz button */}
          <div style={{ padding: "0 16px 12px" }}>
            <button onClick={() => onShowTinder()} style={{ width: "100%", padding: "12px", background: BRAND_LIGHT, color: BRAND_DARK, border: `1.5px solid ${BRAND}30`, borderRadius: 16, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              ❓ {t.dontKnow}
            </button>
          </div>

          {/* For you recommendations */}
          {activeTab === "for_you" && (
            <div style={{ padding: "8px 16px" }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>Сізге ұнауы мүмкін ✨</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {allDrinks.slice(0, 4).map(d => (
                  <div key={d.id} style={{ display: "flex", flexDirection: "column", borderRadius: 18, overflow: "hidden", background: d.heroColor || LAVENDER, padding: "14px", cursor: "pointer", border: `1px solid ${GRAY_100}` }}>
                    <div onClick={() => onNavigate("product", d)} style={{ flex: 1 }}>
                      <div style={{ fontSize: 28, textAlign: "center", marginBottom: 8, letterSpacing: "2px" }}>{d.em}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: GRAY_900, lineHeight: 1.3, marginBottom: 4 }}>{t[`d${d.id}`] || d.name}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: GRAY_900, marginBottom: 12 }}>{d.price.toLocaleString()} ₸</div>
                    </div>
                    {d.outOfStock ? (
                      <SmartSwapButton product={d} isOutOfStock={true} onSuggest={() => onNavigate("product", allDrinks[1])} />
                    ) : (
                      <button onClick={(e) => { e.stopPropagation(); onAddToCart(d); }} style={{ width: "100%", padding: "10px 0", background: BRAND, color: WHITE, border: "none", borderRadius: 12, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 4, cursor: "pointer" }}>
                        <span>+</span> Қосу
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Grid layout for filtered items */}
      {filtered.length > 0 && (
        <div style={{ padding: "0 16px", paddingBottom: 16 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: themeColors.text, marginBottom: 10 }}>{t.searchResults}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {filtered.map((d) => (
              <div key={d.id} style={{ display: "flex", flexDirection: "column", borderRadius: 18, overflow: "hidden", background: d.heroColor || GRAY_50, padding: "14px", cursor: "pointer", border: `1px solid ${GRAY_100}` }}>
                <div onClick={() => onNavigate("product", d)} style={{ flex: 1 }}>
                  <div style={{ fontSize: 36, textAlign: "center", marginBottom: 8, letterSpacing: "3px" }}>{d.em}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: GRAY_900, lineHeight: 1.3, marginBottom: 4 }}>{t[`d${d.id}`] || d.name}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: GRAY_900, marginBottom: 12 }}>{d.price.toLocaleString()} ₸</div>
                </div>
                {d.outOfStock ? (
                  <SmartSwapButton product={d} isOutOfStock={true} onSuggest={() => onNavigate("product", allDrinks[0])} />
                ) : (
                  <button onClick={(e) => { e.stopPropagation(); onAddToCart(d); }} style={{ width: "100%", padding: "10px 0", background: BRAND, color: WHITE, border: "none", borderRadius: 12, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 4, cursor: "pointer" }}>
                    <span>+</span> Қосу
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <FloatingMenu categories={mainTabs} isOpen={fabOpen} setIsOpen={setFabOpen} onJump={(key) => { setActiveTab(key); }} />
    </div>
  );
}

/* ============================================================
   PRODUCT SCREEN (Drinks vs Food - different customization)
   ============================================================ */
function ProductScreen({ product, onBack, onAddToCart, userPrefs, theme, language }) {
  const savedPref = userPrefs[product.id];
  const [activeCustom, setActiveCustom] = useState(null);
  const [selectedMilk, setSelectedMilk] = useState(savedPref?.milkIdx ?? 0);
  const [selectedSize, setSelectedSize] = useState(savedPref?.size ?? "medium"); // For food
  const [volume, setVolume] = useState(savedPref?.volume ?? 400);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [usedPreset, setUsedPreset] = useState(false);

  const isDrink = product.type === "drink";
  const themeColors = themes[theme];
  const t = translations[language];

  const milkExtra = isDrink ? (milkOptions[selectedMilk]?.price || 0) : 0;
  const extrasTotal = selectedExtras.reduce((s, e) => s + e.price, 0);

  // Dynamic pricing for food sizes
  const sizeMultiplier = !isDrink ? (product.sizes?.[selectedSize] ?? 1) : 1;
  const basePrice = product.price;
  const totalPrice = Math.round(basePrice * sizeMultiplier) + milkExtra + extrasTotal;

  const getItems = () => {
    if (activeCustom === "milk") return milkOptions;
    if (activeCustom === "toppings") return toppingOptions;
    if (activeCustom === "syrup") return syrupOptions;
    if (activeCustom === "foams") return foamOptions;
    return [];
  };

  const applyPreset = () => {
    if (savedPref) {
      if (isDrink) {
        setSelectedMilk(savedPref.milkIdx);
        setVolume(savedPref.volume);
      } else {
        setSelectedSize(savedPref.size);
      }
      setUsedPreset(true);
    }
  };

  return (
    <div style={{ background: product.heroColor || "#D8C8B0", minHeight: "100%", color: themeColors.text }}>
      {/* Header */}
      <div style={{ padding: "6px 16px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 500, color: GRAY_900, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingRight: 8 }}>{product.name}</div>
        <button onClick={onBack} style={{ width: 32, height: 32, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 15, color: GRAY_900, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
      </div>

      {/* KBJU */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 16px 4px" }}>
        {[{ v: product.cal, l: "энергия", u: "ккал" }, { v: product.protein, l: "белки", u: "г" }, { v: product.fat, l: "жиры", u: "г" }, { v: product.carb, l: "углеводы", u: "г" }].map(n => (
          <div key={n.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: GRAY_900 }}>{n.v} {n.u}</div>
            <div style={{ fontSize: 10, color: GRAY_600, marginTop: 1 }}>{n.l}</div>
          </div>
        ))}
      </div>

      {/* Image/Emoji */}
      <div style={{ textAlign: "center", padding: "12px 0 16px" }}>
        <div style={{ fontSize: 80, letterSpacing: "4px" }}>{product.em}</div>
      </div>

      {/* Preset button */}
      {savedPref && !usedPreset && (
        <div onClick={applyPreset} style={{
          margin: "0 12px 10px", padding: "12px 16px", borderRadius: 16,
          background: "rgba(255,255,255,0.85)", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 10,
          border: `1.5px solid ${GREEN}40`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}>
          <span style={{ fontSize: 20 }}>⚡</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: GRAY_900 }}>Әдеттегідей</div>
            <div style={{ fontSize: 12, color: GRAY_600 }}>
              {isDrink ? `${milkOptions[savedPref.milkIdx].name}, ${savedPref.volume} мл` : `${savedPref.size.toUpperCase()}`}
            </div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: GREEN }}>1 тап ✓</div>
        </div>
      )}
      {usedPreset && (
        <div style={{ margin: "0 12px 10px", padding: "10px 16px", borderRadius: 14, background: `${GREEN}18`, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: GREEN, fontSize: 16 }}>✓</span>
          <span style={{ fontSize: 13, color: GREEN, fontWeight: 600 }}>Сіздің баптауларыңыз қолданылды!</span>
        </div>
      )}

      {/* Customization based on type */}
      {isDrink ? (
        /* DRINKS - Milk, syrups, etc */
        activeCustom === null ? (
          <div style={{ padding: "0 12px 8px" }}>
            <div style={{ display: "flex", gap: 6, overflowX: "auto" }}>
              {customCategories.map(c => (
                <div key={c.key} onClick={() => setActiveCustom(c.key)} style={{
                  minWidth: 72, padding: "10px 6px 8px", borderRadius: 14, textAlign: "center", cursor: "pointer", flexShrink: 0,
                  background: "rgba(140,110,80,0.4)",
                }}>
                  <div style={{ fontSize: 18, marginBottom: 3 }}>{c.icon}</div>
                  <div style={{ fontSize: 10, color: WHITE, fontWeight: 500 }}>+ {c.label}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 8, fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
              👥 {t.drink80Percent}
            </div>
          </div>
        ) : (
          /* Expanded customization */
          <div style={{ padding: "0 12px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 10 }}>
              {getItems().map((item, i) => {
                const isMilk = activeCustom === "milk";
                const isSelected = isMilk ? i === selectedMilk : selectedExtras.some(e => e.name === item.name);
                return (
                  <div key={item.name} onClick={() => {
                    if (isMilk) setSelectedMilk(i);
                    else {
                      if (isSelected) setSelectedExtras(selectedExtras.filter(e => e.name !== item.name));
                      else setSelectedExtras([...selectedExtras, item]);
                    }
                  }} style={{
                    background: isSelected ? "rgba(255,255,255,0.92)" : "rgba(140,110,80,0.5)",
                    borderRadius: 14, padding: "12px 6px 8px", textAlign: "center", cursor: "pointer",
                  }}>
                    <div style={{ fontSize: 20, marginBottom: 4 }}>🥛</div>
                    <div style={{ fontSize: 11, fontWeight: 500, color: isSelected ? GRAY_900 : WHITE, lineHeight: 1.2 }}>{item.name}</div>
                    <div style={{ fontSize: 10, color: isSelected ? GRAY_600 : "rgba(255,255,255,0.7)", marginTop: 2 }}>{item.price === 0 ? "0 ₸" : `+${item.price} ₸`}</div>
                    <div style={{ marginTop: 4, fontSize: 13, color: isSelected ? GREEN : "rgba(255,255,255,0.6)" }}>{isSelected ? "✓" : "+"}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 6 }}>
              {customCategories.map(c => (
                <div key={c.key} onClick={() => setActiveCustom(c.key)} style={{
                  minWidth: 68, padding: "8px 6px 6px", borderRadius: 12, textAlign: "center", cursor: "pointer", flexShrink: 0,
                  background: activeCustom === c.key ? "rgba(140,110,80,0.7)" : "rgba(140,110,80,0.35)",
                  border: activeCustom === c.key ? "1.5px solid rgba(255,255,255,0.3)" : "none",
                }}>
                  <div style={{ fontSize: 16, marginBottom: 2 }}>{c.icon}</div>
                  <div style={{ fontSize: 9, color: WHITE, fontWeight: 500 }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        /* FOOD - Size selection */
        <div style={{ padding: "0 12px" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 10 }}>Өлшем таңдау</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            {Object.entries(product.sizes || { small: 0.8, medium: 1.0, large: 1.3 }).map(([size, mult]) => (
              <button key={size} onClick={() => setSelectedSize(size)} style={{
                flex: 1, padding: "12px 8px", borderRadius: 14, border: selectedSize === size ? `2px solid WHITE` : "1px solid rgba(255,255,255,0.3)",
                background: selectedSize === size ? "rgba(255,255,255,0.3)" : "transparent",
                color: WHITE, fontWeight: 600, cursor: "pointer", fontSize: 13,
              }}>
                {size === "small" ? "Кіші" : size === "medium" ? "Орташа" : "Үлкен"}
                <div style={{ fontSize: 11, opacity: 0.8 }}>x{mult}</div>
              </button>
            ))}
          </div>
          <div style={{ padding: "12px", background: "rgba(255,255,255,0.15)", borderRadius: 12, textAlign: "center", color: WHITE, fontSize: 12 }}>
            Ағы: {Math.round(basePrice * sizeMultiplier).toLocaleString()} ₸
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div style={{ display: "flex", gap: 10, padding: "8px 12px 12px" }}>
        {isDrink && (
          <button onClick={() => setVolume(volume === 400 ? 300 : 400)} style={{ padding: "14px 18px", borderRadius: 30, border: "none", fontSize: 14, fontWeight: 600, background: "rgba(140,110,80,0.5)", color: WHITE, cursor: "pointer" }}>
            {volume} мл
          </button>
        )}
        <button onClick={() => onAddToCart({
          ...product,
          volume: isDrink ? volume : undefined,
          milkIdx: isDrink ? selectedMilk : undefined,
          milk: isDrink ? milkOptions[selectedMilk] : undefined,
          extras: isDrink ? selectedExtras : undefined,
          size: !isDrink ? selectedSize : undefined,
          sizeMultiplier: !isDrink ? sizeMultiplier : undefined,
          totalPrice
        })} style={{
          flex: 1, padding: "14px 0", borderRadius: 30, border: "none", fontSize: 16, fontWeight: 600, background: BRAND, color: WHITE, cursor: "pointer"
        }}>
          + {totalPrice.toLocaleString()} ₸
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   CART SCREEN (With localStorage persistence & clear all)
   ============================================================ */
function CartScreen({ cart, onRemove, onUpdateQty, onNavigate, selectedShop, onChangeShop, onAddToCart, onClearCart, theme, language }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("kaspi");

  const total = cart.reduce((s, it) => (it.totalPrice || it.price) * (it.qty || 1) + s, 0);
  const themeColors = themes[theme];
  const t = translations[language];

  if (!cart.length) return (
    <div style={{ padding: "80px 16px", textAlign: "center", background: themeColors.bg, minHeight: "100%", color: themeColors.text }}>
      <div style={{ fontSize: 56, marginBottom: 12 }}>🛒</div>
      <div style={{ fontSize: 18, fontWeight: 600, color: themeColors.text }}>Себет бос</div>
      <div style={{ fontSize: 14, color: themeColors.textSecondary, margin: "6px 0 24px" }}>Мәзірден сусын қосыңыз</div>
      <button onClick={() => onNavigate("home")} style={{ padding: "14px 36px", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Мәзірге өту</button>
    </div>
  );

  return (
    <div style={{ padding: "16px", display: "flex", flexDirection: "column", minHeight: "calc(100% - 32px)", background: themeColors.bg, color: themeColors.text }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontSize: 20, fontWeight: 700 }}>Себет</div>
        {cart.length > 0 && (
          <button onClick={onClearCart} style={{ padding: "6px 12px", borderRadius: 8, border: `1px solid ${RED}`, background: "transparent", color: RED, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
            Барлығын өшіру
          </button>
        )}
      </div>

      <div style={{ flex: 1 }}>
        {/* Shop confirmation */}
        <div style={{ padding: "12px 14px", background: BRAND_LIGHT, borderRadius: 16, marginBottom: 14, border: `1.5px solid ${BRAND}25` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <WhaleLogo size={28} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: GRAY_900 }}>{selectedShop.name}</div>
              <div style={{ fontSize: 12, color: GRAY_600 }}>~{selectedShop.time} дайындау</div>
            </div>
            <button onClick={onChangeShop} style={{ padding: "6px 12px", borderRadius: 10, border: `1px solid ${BRAND}`, background: "none", color: BRAND, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Өзгерту</button>
          </div>
        </div>

        {/* Cart items */}
        {cart.map((item, idx) => (
          <div key={idx} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: idx < cart.length - 1 ? `0.5px solid ${themeColors.border}` : "none" }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: item.heroColor || GRAY_50, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0, overflow: "hidden" }}>{item.em}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: themeColors.text, lineHeight: 1.3 }}>{item.name}</div>
              <div style={{ fontSize: 11, color: themeColors.textSecondary, marginTop: 2 }}>
                {item.volume ? `${item.volume} мл · ` : ""}{item.milk?.name || item.size || "Коровье"}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: themeColors.text }}>{((item.totalPrice || item.price) * (item.qty || 1)).toLocaleString()} ₸</span>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", border: `1px solid ${themeColors.border}`, borderRadius: 10, overflow: "hidden" }}>
                    <button onClick={() => (item.qty || 1) <= 1 ? onRemove(idx) : onUpdateQty(idx, (item.qty || 1) - 1)} style={{ width: 30, height: 30, border: "none", background: "transparent", cursor: "pointer", fontSize: 15, color: (item.qty || 1) <= 1 ? RED : themeColors.text }}>−</button>
                    <span style={{ width: 26, textAlign: "center", fontSize: 14, fontWeight: 600, color: themeColors.text }}>{item.qty || 1}</span>
                    <button onClick={() => onUpdateQty(idx, (item.qty || 1) + 1)} style={{ width: 30, height: 30, border: "none", background: "transparent", cursor: "pointer", fontSize: 15, color: themeColors.text }}>+</button>
                  </div>
                  <button onClick={() => onRemove(idx)} style={{ width: 30, height: 30, borderRadius: 6, border: "none", background: "transparent", cursor: "pointer", fontSize: 16, color: RED }}>🗑️</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Perfect Pair cross-sell */}
        {cart.length > 0 && (
          <PerfectPair cartItems={cart} allDrinks={allDrinks} onAddToCart={onAddToCart} />
        )}
      </div>

      {/* Sticky bottom */}
      <div style={{ marginTop: 18, padding: "16px", background: themeColors.bgSecondary, borderRadius: 18, position: "sticky", bottom: 0, zIndex: 10, boxShadow: "0 -4px 12px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>Барлығы</span>
          <span style={{ fontSize: 16, fontWeight: 700 }}>{total.toLocaleString()} ₸</span>
        </div>
        <button onClick={() => setShowPaymentModal(true)} style={{ width: "100%", padding: "16px 0", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 17, fontWeight: 600, cursor: "pointer" }}>
          {t.pay} {total.toLocaleString()} ₸
        </button>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div style={{ background: themeColors.bg, borderRadius: 20, padding: "24px", maxWidth: 350, width: "calc(100% - 32px)", color: themeColors.text }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{t.paymentConfirm}</div>
              <button onClick={() => setShowPaymentModal(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: themeColors.text }}>✕</button>
            </div>

            {/* Payment methods */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: themeColors.textSecondary, marginBottom: 10, fontWeight: 600 }}>{t.selectPayment}</div>
              {[
                { id: "kaspi", label: t.kaspiQR, icon: "📱" },
                { id: "apple", label: t.applePay, icon: "🍎" },
                { id: "card", label: t.bankCard, icon: "💳" }
              ].map(method => (
                <div key={method.id} onClick={() => setSelectedPaymentMethod(method.id)} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px",
                  background: selectedPaymentMethod === method.id ? BRAND_LIGHT : "transparent",
                  borderRadius: 12,
                  marginBottom: 8,
                  cursor: "pointer",
                  border: selectedPaymentMethod === method.id ? `2px solid ${BRAND}` : `1px solid ${themeColors.border}`
                }}>
                  <div style={{ fontSize: 20 }}>{method.icon}</div>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{method.label}</div>
                  {selectedPaymentMethod === method.id && <div style={{ fontSize: 16, color: BRAND }}>✓</div>}
                </div>
              ))}
            </div>

            {/* QR Code section for Kaspi */}
            {selectedPaymentMethod === "kaspi" && (
              <div style={{ background: themeColors.bgSecondary, borderRadius: 14, padding: 16, marginBottom: 16, textAlign: "center" }}>
                <div style={{ fontSize: 12, color: themeColors.textSecondary, marginBottom: 12, fontWeight: 600 }}>{t.scanQR}</div>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://kaspi.kz/pay" alt="Kaspi QR" style={{ width: 180, height: 180, borderRadius: 12, margin: "0 auto" }} />
              </div>
            )}

            {/* Amount */}
            <div style={{ background: themeColors.bgSecondary, borderRadius: 12, padding: 12, marginBottom: 16, textAlign: "center" }}>
              <div style={{ fontSize: 12, color: themeColors.textSecondary, marginBottom: 4 }}>Төлеу сомасы</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: BRAND }}>{total.toLocaleString()} ₸</div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowPaymentModal(false)} style={{ flex: 1, padding: "12px", border: `1px solid ${themeColors.border}`, background: "transparent", color: themeColors.text, borderRadius: 10, cursor: "pointer", fontWeight: 600 }}>{t.cancel}</button>
              <button onClick={() => { setShowPaymentModal(false); onClearCart(); }} style={{ flex: 1, padding: "12px", background: BRAND, color: WHITE, border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 600 }}>{t.confirm}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   ORDER HISTORY SCREEN (Active & Past Orders)
   ============================================================ */
function OrderHistoryScreen({ onNavigate, theme, language }) {
  const themeColors = themes[theme];
  const t = translations[language];

  const activeOrders = [
    { id: 1, items: [{ name: "Капучино", img: "☕", qty: 1 }], status: "brewing", time: "Дайындалып жатыр...", progress: 40 },
    { id: 2, items: [{ name: "Латте", img: "🥛", qty: 1 }, { name: "Чизкейк", img: "🍰", qty: 1 }], status: "ready", time: "Түсіңген дайын!", progress: 100 },
  ];

  const pastOrders = [
    { id: 101, date: "Бүгін, 9:15", total: 1950, items: [{ name: "Айс латте", img: "🧊" }] },
    { id: 102, date: "Кеше, 14:30", total: 2100, items: [{ name: "Раф Сливочное", img: "🤎" }, { name: "Багет", img: "🥖" }] },
    { id: 103, date: "2 күн бұрын", total: 1800, items: [{ name: "Баббл-ти", img: "🧋" }] },
  ];

  return (
    <div style={{ padding: "16px", background: themeColors.bg, color: themeColors.text, minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <button onClick={() => onNavigate("profile")} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: themeColors.text }}>←</button>
        <div style={{ fontSize: 20, fontWeight: 700 }}>{t.orderHistory}</div>
      </div>

      {/* Active Orders */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: themeColors.text }}>{t.activeOrders}</div>
        {activeOrders.length === 0 ? (
          <div style={{ textAlign: "center", color: themeColors.textSecondary, padding: "20px" }}>{t.noActiveOrders}</div>
        ) : (
          activeOrders.map(order => (
            <div key={order.id} style={{ background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 14, padding: 14, marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  {order.items.map((item, i) => (
                    <div key={i} style={{ fontSize: 24, background: BRAND_LIGHT, width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>{item.img}</div>
                  ))}
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: GREEN }}>✓ {order.time}</span>
              </div>
              <div style={{ height: 4, background: themeColors.bgSecondary, borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: `${order.progress}%`, height: "100%", background: BRAND, transition: "width 0.5s" }} />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Past Orders */}
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: themeColors.text }}>{t.pastOrders}</div>
        {pastOrders.map(order => (
          <div key={order.id} style={{ background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 14, padding: 12, marginBottom: 10, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, color: themeColors.textSecondary, marginBottom: 4 }}>{order.date}</div>
              <div style={{ display: "flex", gap: 6 }}>
                {order.items.map((item, i) => (
                  <div key={i} style={{ fontSize: 18 }}>{item.img}</div>
                ))}
              </div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: themeColors.text }}>{order.total.toLocaleString()} ₸</div>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div style={{ marginTop: 20, background: BRAND_LIGHT, borderRadius: 14, padding: 14, textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: BRAND, marginBottom: 8 }}>💡 {t.whatToOrder}</div>
        <div style={{ fontSize: 12, color: BRAND_DARK }}>{t.nextDrink}</div>
        <button style={{ marginTop: 8, padding: "8px 16px", background: BRAND, color: WHITE, border: "none", borderRadius: 10, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
          {t.start}
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   SUPPORT CHAT SCREEN
   ============================================================ */
function SupportChatScreen({ onNavigate, theme, language }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Сәлем! Мы здесь, чтобы помочь. Что вас интересует?", isUser: false, time: "09:30" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const themeColors = themes[theme];
  const t = translations[language];

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputValue, isUser: true, time: new Date().toLocaleTimeString("kk-KZ", { hour: "2-digit", minute: "2-digit" }) }]);
      setInputValue("");

      // Auto-reply after 1s
      setTimeout(() => {
        setMessages(p => [...p, { id: p.length + 1, text: "Спасибо за сообщение! Мы ответим в ближайшее время.", isUser: false, time: new Date().toLocaleTimeString("kk-KZ", { hour: "2-digit", minute: "2-digit" }) }]);
      }, 1000);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: themeColors.bg }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px", borderBottom: `1px solid ${themeColors.border}`, color: themeColors.text }}>
        <button onClick={() => onNavigate("profile")} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: themeColors.text }}>←</button>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{t.support}</div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ display: "flex", justifyContent: msg.isUser ? "flex-end" : "flex-start" }}>
            <div style={{
              background: msg.isUser ? BRAND : themeColors.bgSecondary,
              color: msg.isUser ? WHITE : themeColors.text,
              padding: "10px 14px",
              borderRadius: 14,
              maxWidth: "80%",
              wordBreak: "break-word"
            }}>
              <div style={{ fontSize: 13 }}>{msg.text}</div>
              <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, padding: "12px 16px", borderTop: `1px solid ${themeColors.border}`, background: themeColors.bg }}>
        <input
          type="text"
          placeholder={t.typeMessage}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={e => e.key === "Enter" && handleSend()}
          style={{
            flex: 1,
            padding: "10px 12px",
            border: `1px solid ${themeColors.border}`,
            borderRadius: 20,
            outline: "none",
            background: themeColors.card,
            color: themeColors.text,
            fontSize: 14
          }}
        />
        <button onClick={handleSend} style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "none",
          background: BRAND,
          color: WHITE,
          cursor: "pointer",
          fontSize: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          ✓
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   SETTINGS & PAYMENT SCREEN
   ============================================================ */
function SettingsPaymentScreen({ onNavigate, theme, language, setLanguage, setTheme }) {
  const [birthday, setBirthday] = useState("1995-05-15");
  const [favMilk, setFavMilk] = useState("Овсяное");
  const [notifications, setNotifications] = useState(true);
  const [promoAlerts, setPromoAlerts] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState("kaspi");
  const [cardForm, setCardForm] = useState(false);

  const themeColors = themes[theme];
  const t = translations[language];

  return (
    <div style={{ padding: "16px", background: themeColors.bg, color: themeColors.text, minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <button onClick={() => onNavigate("profile")} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: themeColors.text }}>←</button>
        <div style={{ fontSize: 20, fontWeight: 700 }}>{t.settings}</div>
      </div>

      {/* Profile Settings */}
      <div style={{ background: themeColors.card, borderRadius: 14, padding: 14, marginBottom: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: themeColors.text }}>👤 {t.profileSettings}</div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: 12, color: themeColors.textSecondary, display: "block", marginBottom: 6 }}>{t.birthday}</label>
          <input
            type="date"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: `1px solid ${themeColors.border}`,
              borderRadius: 10,
              background: themeColors.bgSecondary,
              color: themeColors.text,
              fontSize: 13
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: 12, color: themeColors.textSecondary, display: "block", marginBottom: 6 }}>{t.favoriteMilk}</label>
          <select
            value={favMilk}
            onChange={e => setFavMilk(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: `1px solid ${themeColors.border}`,
              borderRadius: 10,
              background: themeColors.bgSecondary,
              color: themeColors.text,
              fontSize: 13
            }}
          >
            <option>Коровье</option>
            <option>Овсяное</option>
            <option>Миндальное</option>
            <option>Банановое</option>
          </select>
        </div>
      </div>

      {/* Notifications */}
      <div style={{ background: themeColors.card, borderRadius: 14, padding: 14, marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{t.notifications}</span>
          <button
            onClick={() => setNotifications(!notifications)}
            style={{
              width: 50,
              height: 28,
              borderRadius: 14,
              border: "none",
              background: notifications ? GREEN : GRAY_400,
              cursor: "pointer",
              position: "relative"
            }}
          >
            <div style={{
              position: "absolute",
              width: 24,
              height: 24,
              background: WHITE,
              borderRadius: 12,
              top: 2,
              left: notifications ? 24 : 2,
              transition: "left 0.3s"
            }} />
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{t.promoAlerts}</span>
          <button
            onClick={() => setPromoAlerts(!promoAlerts)}
            style={{
              width: 50,
              height: 28,
              borderRadius: 14,
              border: "none",
              background: promoAlerts ? GREEN : GRAY_400,
              cursor: "pointer",
              position: "relative"
            }}
          >
            <div style={{
              position: "absolute",
              width: 24,
              height: 24,
              background: WHITE,
              borderRadius: 12,
              top: 2,
              left: promoAlerts ? 24 : 2,
              transition: "left 0.3s"
            }} />
          </button>
        </div>
      </div>

      {/* Payment Methods */}
      <div style={{ background: themeColors.card, borderRadius: 14, padding: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: themeColors.text }}>💳 {t.paymentMethods}</div>

        {[
          { id: "kaspi", label: t.kaspiQR, icon: "📱" },
          { id: "apple", label: t.applePay, icon: "🍎" },
          { id: "card", label: t.bankCard, icon: "💳" }
        ].map(method => (
          <div key={method.id} onClick={() => setSelectedPayment(method.id)} style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px",
            background: selectedPayment === method.id ? BRAND_LIGHT : "transparent",
            borderRadius: 10,
            marginBottom: 8,
            cursor: "pointer",
            border: selectedPayment === method.id ? `2px solid ${BRAND}` : `1px solid ${themeColors.border}`
          }}>
            <div style={{ fontSize: 24 }}>{method.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: themeColors.text }}>{method.label}</div>
            </div>
            {selectedPayment === method.id && <div style={{ fontSize: 16, color: BRAND }}>✓</div>}
          </div>
        ))}

        {selectedPayment === "card" && !cardForm && (
          <button
            onClick={() => setCardForm(true)}
            style={{
              width: "100%",
              marginTop: 12,
              padding: "10px",
              background: BRAND,
              color: WHITE,
              border: "none",
              borderRadius: 10,
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            + Карта қосу
          </button>
        )}

        {cardForm && (
          <div style={{ marginTop: 12, padding: 12, background: themeColors.bgSecondary, borderRadius: 10 }}>
            <input
              type="text"
              placeholder="4111 1111 1111 1111"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: 8,
                border: `1px solid ${themeColors.border}`,
                borderRadius: 8,
                background: themeColors.card,
                color: themeColors.text
              }}
            />
            <button style={{
              width: "100%",
              padding: "10px",
              background: GREEN,
              color: WHITE,
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Сохранить
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   REGISTRATION SCREEN
   ============================================================ */
function RegistrationScreen({ onComplete, theme, language }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const themeColors = themes[theme];
  const t = translations[language];

  const validateEmail = (emailValue) => {
    return emailValue.includes('@');
  };

  const validatePhone = (phoneValue) => {
    const phoneRegex = /^8\d{10}$/;
    return phoneRegex.test(phoneValue);
  };

  const handleRegister = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = t.enterName;
    }

    if (!email.trim()) {
      newErrors.email = t.errorEmailRequired;
    } else if (!validateEmail(email)) {
      newErrors.email = t.errorEmailInvalid;
    }

    if (!phone.trim()) {
      newErrors.phone = t.errorPhoneRequired;
    } else if (!validatePhone(phone)) {
      newErrors.phone = t.errorPhoneInvalid;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const userProfile = { name, phone, email, registeredAt: new Date().toISOString() };
    localStorage.setItem("drinkit_user_profile", JSON.stringify(userProfile));
    onComplete(userProfile);
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center", background: `linear-gradient(180deg, #E8DFF0 0%, #D0E0D8 50%, #E0D0E8 100%)` }}>
      <div style={{ fontSize: 60, marginBottom: 20 }}>☕</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: GRAY_900, marginBottom: 8 }}>Drinkit</div>
      <div style={{ fontSize: 15, color: GRAY_600, lineHeight: 1.6, maxWidth: 280, marginBottom: 30 }}>{t.registerDesc}</div>

      {/* Registration Form */}
      <div style={{ width: "100%", maxWidth: 300 }}>
        <div style={{ marginBottom: 12 }}>
          <input
            type="text"
            placeholder={t.enterName}
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: "100%", padding: "12px 14px", border: errors.name ? `2px solid ${RED}` : `1px solid ${GRAY_200}`, borderRadius: 12, fontSize: 14, background: WHITE, color: GRAY_900, boxSizing: "border-box" }}
          />
          {errors.name && <div style={{ fontSize: 12, color: RED, marginTop: 6, textAlign: "left" }}>❌ {errors.name}</div>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <input
            type="tel"
            placeholder={t.enterPhone}
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={{ width: "100%", padding: "12px 14px", border: errors.phone ? `2px solid ${RED}` : `1px solid ${GRAY_200}`, borderRadius: 12, fontSize: 14, background: WHITE, color: GRAY_900, boxSizing: "border-box" }}
          />
          {errors.phone && <div style={{ fontSize: 12, color: RED, marginTop: 6, textAlign: "left" }}>❌ {errors.phone}</div>}
        </div>

        <div style={{ marginBottom: 24 }}>
          <input
            type="email"
            placeholder={t.enterEmail}
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: "12px 14px", border: errors.email ? `2px solid ${RED}` : `1px solid ${GRAY_200}`, borderRadius: 12, fontSize: 14, background: WHITE, color: GRAY_900, boxSizing: "border-box" }}
          />
          {errors.email && <div style={{ fontSize: 12, color: RED, marginTop: 6, textAlign: "left" }}>❌ {errors.email}</div>}
        </div>

        <button onClick={handleRegister} style={{ padding: "14px 48px", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 16, fontWeight: 700, cursor: "pointer", marginBottom: 12, width: "100%", opacity: 1 }}>
          {t.register}
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   PERSONAL INFO SCREEN
   ============================================================ */
function PersonalInfoScreen({ userProfile, onNavigate, onUpdate, theme, language }) {
  const [name, setName] = useState(userProfile?.name || "");
  const [phone, setPhone] = useState(userProfile?.phone || "");
  const [email, setEmail] = useState(userProfile?.email || "");
  const themeColors = themes[theme];
  const t = translations[language];

  const handleSave = () => {
    onUpdate({ name, phone, email });
  };

  return (
    <div style={{ padding: "16px", background: themeColors.bg, color: themeColors.text, minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <button onClick={() => onNavigate("profile")} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: themeColors.text }}>←</button>
        <div style={{ fontSize: 20, fontWeight: 700 }}>{t.personalInfo}</div>
      </div>

      <div style={{ background: themeColors.card, borderRadius: 14, padding: 14, marginBottom: 14 }}>
        <div>
          <label style={{ fontSize: 12, color: themeColors.textSecondary, display: "block", marginBottom: 6 }}>{t.name}</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: 12,
              border: `1px solid ${themeColors.border}`,
              borderRadius: 10,
              background: themeColors.bgSecondary,
              color: themeColors.text,
              fontSize: 13,
              boxSizing: "border-box"
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: 12, color: themeColors.textSecondary, display: "block", marginBottom: 6 }}>{t.phone}</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: 12,
              border: `1px solid ${themeColors.border}`,
              borderRadius: 10,
              background: themeColors.bgSecondary,
              color: themeColors.text,
              fontSize: 13,
              boxSizing: "border-box"
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: 12, color: themeColors.textSecondary, display: "block", marginBottom: 6 }}>{t.email}</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: `1px solid ${themeColors.border}`,
              borderRadius: 10,
              background: themeColors.bgSecondary,
              color: themeColors.text,
              fontSize: 13,
              boxSizing: "border-box"
            }}
          />
        </div>
      </div>

      <button onClick={handleSave} style={{ width: "100%", padding: "14px", background: BRAND, color: WHITE, border: "none", borderRadius: 12, fontWeight: 600, cursor: "pointer", fontSize: 15 }}>
        💾 {t.saveCard}
      </button>
    </div>
  );
}

/* ============================================================
   PAYMENT METHODS SCREEN
   ============================================================ */
function PaymentMethodsScreen({ onNavigate, theme, language }) {
  const [selectedPayment, setSelectedPayment] = useState("kaspi");
  const [cardForm, setCardForm] = useState(false);
  const themeColors = themes[theme];
  const t = translations[language];

  return (
    <div style={{ padding: "16px", background: themeColors.bg, color: themeColors.text, minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <button onClick={() => onNavigate("profile")} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: themeColors.text }}>←</button>
        <div style={{ fontSize: 20, fontWeight: 700 }}>{t.paymentMethods}</div>
      </div>

      <div style={{ background: themeColors.card, borderRadius: 14, padding: 14 }}>
        {[
          { id: "kaspi", label: t.kaspiQR, icon: "📱" },
          { id: "apple", label: t.applePay, icon: "🍎" },
          { id: "card", label: t.bankCard, icon: "💳" }
        ].map(method => (
          <div key={method.id} onClick={() => setSelectedPayment(method.id)} style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px",
            background: selectedPayment === method.id ? BRAND_LIGHT : "transparent",
            borderRadius: 10,
            marginBottom: 8,
            cursor: "pointer",
            border: selectedPayment === method.id ? `2px solid ${BRAND}` : `1px solid ${themeColors.border}`
          }}>
            <div style={{ fontSize: 24 }}>{method.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: themeColors.text }}>{method.label}</div>
            </div>
            {selectedPayment === method.id && <div style={{ fontSize: 16, color: BRAND }}>✓</div>}
          </div>
        ))}

        {selectedPayment === "card" && !cardForm && (
          <button
            onClick={() => onNavigate("payment_card")}
            style={{
              width: "100%",
              marginTop: 12,
              padding: "10px",
              background: BRAND,
              color: WHITE,
              border: "none",
              borderRadius: 10,
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            + {t.addCard}
          </button>
        )}

        {cardForm && (
          <div style={{ marginTop: 12, padding: 12, background: themeColors.bgSecondary, borderRadius: 10 }}>
            <input
              type="text"
              placeholder="4111 1111 1111 1111"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: 8,
                border: `1px solid ${themeColors.border}`,
                borderRadius: 8,
                background: themeColors.card,
                color: themeColors.text,
                boxSizing: "border-box"
              }}
            />
            <button style={{
              width: "100%",
              padding: "10px",
              background: GREEN,
              color: WHITE,
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              cursor: "pointer"
            }}>
              {t.saveCard}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   PAYMENT CARD SCREEN (Add Card with Validation)
   ============================================================ */
function PaymentCardScreen({ onNavigate, onComplete, theme, language }) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [errors, setErrors] = useState({});

  const themeColors = themes[theme];
  const t = translations[language] || translations.en;

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, "");
    if (cleaned.length <= 16) {
      return cleaned.replace(/(\d{4})/g, "$1 ").trim();
    }
    return cardNumber;
  };

  const validateCard = () => {
    const newErrors = {};
    const cleanedNumber = cardNumber.replace(/\s/g, "");

    if (cleanedNumber.length !== 16 || !/^\d+$/.test(cleanedNumber)) {
      newErrors.cardNumber = t.invalidCardNumber;
    }

    if (!cardholderName.trim()) {
      newErrors.name = "Cardholder name required";
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiry = t.invalidExpiry;
    } else {
      const [month, year] = expiryDate.split("/");
      if (parseInt(month) < 1 || parseInt(month) > 12) {
        newErrors.expiry = t.invalidExpiry;
      }
    }

    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      newErrors.cvv = t.invalidCVV;
    }

    return newErrors;
  };

  const handleSaveCard = () => {
    const newErrors = validateCard();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const cleanedNumber = cardNumber.replace(/\s/g, "");
    const maskedCard = `**** **** **** ${cleanedNumber.slice(-4)}`;
    const savedCard = {
      maskedCard,
      last4: cleanedNumber.slice(-4),
      name: cardholderName.toUpperCase(),
      expiry: expiryDate,
      savedAt: new Date().toISOString()
    };

    const existingCards = JSON.parse(localStorage.getItem("userCards") || "[]");
    existingCards.push(savedCard);
    localStorage.setItem("userCards", JSON.stringify(existingCards));

    onComplete && onComplete();
    onNavigate("payment_methods");
  };

  const isValid = () => {
    return cardNumber.replace(/\s/g, "").length === 16 &&
      cardholderName.trim() &&
      /^\d{2}\/\d{2}$/.test(expiryDate) &&
      cvv.length === 3;
  };

  return (
    <div style={{ padding: "16px", background: themeColors.bg, color: themeColors.text, minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <button onClick={() => onNavigate("payment_methods")} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: themeColors.text }}>←</button>
        <div style={{ fontSize: 20, fontWeight: 700 }}>{t.addCard}</div>
      </div>

      <div style={{ background: themeColors.card, borderRadius: 14, padding: 14, marginBottom: 14, border: `1px solid ${themeColors.border}` }}>
        <label style={{ fontSize: 12, color: themeColors.textSecondary, display: "block", marginBottom: 6, fontWeight: 600 }}>{t.cardNumber}</label>
        <input
          type="text"
          placeholder={t.cardNumberPlaceholder}
          value={cardNumber}
          onChange={e => setCardNumber(formatCardNumber(e.target.value))}
          maxLength="19"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: 8,
            border: errors.cardNumber ? `2px solid ${RED}` : `1px solid ${themeColors.border}`,
            borderRadius: 10,
            background: themeColors.bgSecondary,
            color: themeColors.text,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "2px",
            boxSizing: "border-box"
          }}
        />
        {errors.cardNumber && <div style={{ fontSize: 12, color: RED, marginBottom: 8 }}>❌ {errors.cardNumber}</div>}

        <label style={{ fontSize: 12, color: themeColors.textSecondary, display: "block", marginBottom: 6, fontWeight: 600 }}>{t.cardholderName}</label>
        <input
          type="text"
          placeholder={t.cardholderNamePlaceholder}
          value={cardholderName}
          onChange={e => setCardholderName(e.target.value.toUpperCase())}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: 8,
            border: errors.name ? `2px solid ${RED}` : `1px solid ${themeColors.border}`,
            borderRadius: 10,
            background: themeColors.bgSecondary,
            color: themeColors.text,
            fontSize: 13,
            boxSizing: "border-box"
          }}
        />

        <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 12, color: themeColors.textSecondary, display: "block", marginBottom: 6, fontWeight: 600 }}>{t.expiryDate}</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={e => {
                let val = e.target.value.replace(/\D/g, "");
                if (val.length === 4) {
                  val = val.slice(0, 2) + "/" + val.slice(2);
                }
                setExpiryDate(val);
              }}
              maxLength="5"
              style={{
                width: "100%",
                padding: "12px",
                border: errors.expiry ? `2px solid ${RED}` : `1px solid ${themeColors.border}`,
                borderRadius: 10,
                background: themeColors.bgSecondary,
                color: themeColors.text,
                fontSize: 13,
                boxSizing: "border-box"
              }}
            />
          </div>
          <div style={{ flex: 0.7 }}>
            <label style={{ fontSize: 12, color: themeColors.textSecondary, display: "block", marginBottom: 6, fontWeight: 600 }}>{t.cvv}</label>
            <input
              type="password"
              placeholder={t.cvvPlaceholder}
              value={cvv}
              onChange={e => setCVV(e.target.value.replace(/\D/g, "").slice(0, 3))}
              maxLength="3"
              style={{
                width: "100%",
                padding: "12px",
                border: errors.cvv ? `2px solid ${RED}` : `1px solid ${themeColors.border}`,
                borderRadius: 10,
                background: themeColors.bgSecondary,
                color: themeColors.text,
                fontSize: 13,
                letterSpacing: "3px",
                boxSizing: "border-box"
              }}
            />
          </div>
        </div>
        {errors.expiry && <div style={{ fontSize: 12, color: RED, marginBottom: 4 }}>❌ {errors.expiry}</div>}
        {errors.cvv && <div style={{ fontSize: 12, color: RED, marginBottom: 8 }}>❌ {errors.cvv}</div>}
      </div>

      <button
        onClick={handleSaveCard}
        disabled={!isValid()}
        style={{
          width: "100%",
          padding: "14px",
          background: isValid() ? BRAND : GRAY_400,
          color: WHITE,
          border: "none",
          borderRadius: 12,
          fontWeight: 600,
          fontSize: 15,
          cursor: isValid() ? "pointer" : "not-allowed",
          opacity: isValid() ? 1 : 0.6
        }}
      >
        💳 {t.saveNewCard}
      </button>
    </div>
  );
}

/* ============================================================
   MAP VIEW SCREEN (2GIS Astana Locations)
   ============================================================ */
function MapViewScreen({ onNavigate, onSelectShop, theme, language }) {
  const themeColors = themes[theme];
  const t = translations[language] || translations.en;

  const astanaCoordinates = {
    center: { lat: 51.1694, lng: 71.4491 },
    zoom: 11
  };

  const locations = [
    { id: 1, name: "Drinkit на Ботаническом", lat: 51.1750, lng: 71.4450, address: "Ул. Бухар Жырау, 28Б" },
    { id: 2, name: "Drinkit Highvill Astana", lat: 51.1680, lng: 71.4520, address: "Ул. Ахмета Байтурсунова, 9" },
    { id: 3, name: "Drinkit на водно-зеленом БУ", lat: 51.1600, lng: 71.4600, address: "Ул. Динмухамеда Кунаева, 12/1" },
    { id: 4, name: "Drinkit Mega Silk Way", lat: 51.1500, lng: 71.4700, address: "Просп. Кабанбай Батыра, 62" },
    { id: 5, name: "Drinkit НАЗ", lat: 51.1880, lng: 71.4300, address: "Просп. Кабанбай Батыра, 53" }
  ];

  const getPixelCoordinates = (lat, lng) => {
    const mapWidth = 340;
    const mapHeight = 500;
    const latRange = 51.25 - 51.10;
    const lngRange = 71.55 - 71.35;

    const x = ((lng - 71.35) / lngRange) * mapWidth;
    const y = ((51.25 - lat) / latRange) * mapHeight;

    return { x: Math.max(10, Math.min(mapWidth - 10, x)), y: Math.max(10, Math.min(mapHeight - 10, y)) };
  };

  return (
    <div style={{ padding: "16px", background: themeColors.bg, color: themeColors.text, minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <button onClick={() => onNavigate("profile")} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: themeColors.text }}>←</button>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{t.astanaLocations}</div>
      </div>

      {/* Map Container */}
      <div style={{
        background: `linear-gradient(135deg, #E3F2FD 0%, #F3E5F5 100%)`,
        borderRadius: 16,
        padding: "16px",
        marginBottom: 16,
        position: "relative",
        height: "400px",
        border: `2px solid ${BRAND}40`,
        overflow: "hidden"
      }}>
        {/* Map Header */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: BRAND }}>📍 2GIS Map</div>
          <div style={{ fontSize: 11, color: GRAY_600 }}>Астана кофейные локации</div>
        </div>

        {/* Simulated Map with Pin Markers */}
        <svg width="100%" height="340" viewBox="0 0 340 340" style={{ background: "white", borderRadius: 12 }}>
          {/* Map background */}
          <rect width="340" height="340" fill="#F5F7FA" />
          {/* Grid lines for realism */}
          <line x1="0" y1="85" x2="340" y2="85" stroke="#E0E0E0" strokeWidth="1" />
          <line x1="0" y1="170" x2="340" y2="170" stroke="#E0E0E0" strokeWidth="1" />
          <line x1="0" y1="255" x2="340" y2="255" stroke="#E0E0E0" strokeWidth="1" />
          <line x1="85" y1="0" x2="85" y2="340" stroke="#E0E0E0" strokeWidth="1" />
          <line x1="170" y1="0" x2="170" y2="340" stroke="#E0E0E0" strokeWidth="1" />
          <line x1="255" y1="0" x2="255" y2="340" stroke="#E0E0E0" strokeWidth="1" />

          {/* Location pins */}
          {locations.map(loc => {
            const { x, y } = getPixelCoordinates(loc.lat, loc.lng);
            return (
              <g key={loc.id}>
                {/* Pin shadow */}
                <circle cx={x} cy={y + 2} r="4" fill="rgba(0,0,0,0.1)" />
                {/* Pin marker */}
                <circle cx={x} cy={y} r="6" fill={BRAND} stroke="white" strokeWidth="2" />
                {/* Pin number */}
                <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold">{loc.id}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Location List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {locations.map((loc, i) => (
          <div
            key={loc.id}
            onClick={() => {
              const shop = coffeeShops.find(s => s.id === loc.id);
              if (shop) onSelectShop(shop);
            }}
            style={{
              background: themeColors.card,
              border: `1px solid ${themeColors.border}`,
              borderRadius: 12,
              padding: "12px",
              cursor: "pointer",
              display: "flex",
              gap: 10,
              transition: "all 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.background = BRAND_LIGHT}
            onMouseLeave={e => e.currentTarget.style.background = themeColors.card}
          >
            <div style={{ fontSize: 20, fontWeight: 700, color: BRAND, width: 24, textAlign: "center" }}>{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{loc.name}</div>
              <div style={{ fontSize: 11, color: themeColors.textSecondary, marginTop: 2 }}>{loc.address}</div>
            </div>
            <div style={{ fontSize: 16 }}>→</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DrinkitApp() {
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem("drinkit_user_profile");
    return saved ? JSON.parse(saved) : null;
  });

  const [showOnboarding, setShowOnboarding] = useState(() => {
    const saved = localStorage.getItem("drinkit_onboarded");
    return !saved;
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("drinkit_cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedShop, setSelectedShop] = useState(coffeeShops[0]);
  const [showShopPicker, setShowShopPicker] = useState(false);
  const [showTinder, setShowTinder] = useState(false);

  // Theme & Language
  const [theme, setTheme] = useState(() => localStorage.getItem("drinkit_theme") || "light");
  const [language, setLanguage] = useState(() => localStorage.getItem("drinkit_language") || "kz");

  // Real-time clock
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("kk-KZ", { hour: "2-digit", minute: "2-digit" }));

  // User prefs
  const [userPrefs, setUserPrefs] = useState(() => {
    const saved = localStorage.getItem("drinkit_prefs");
    return saved ? JSON.parse(saved) : { 5: { milkIdx: 1, volume: 400 }, 14: { milkIdx: 0, volume: 300 } };
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("drinkit_cart", JSON.stringify(cart));
  }, [cart]);

  // Save prefs to localStorage
  useEffect(() => {
    localStorage.setItem("drinkit_prefs", JSON.stringify(userPrefs));
  }, [userPrefs]);

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("kk-KZ", { hour: "2-digit", minute: "2-digit" }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Save theme & language to localStorage
  useEffect(() => {
    localStorage.setItem("drinkit_theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("drinkit_language", language);
  }, [language]);

  const themeColors = themes[theme];
  const t = translations[language];

  function navigate(screen, data) {
    if (screen === "product" && data) {
      setSelectedProduct(data);
      setCurrentScreen("product");
    } else {
      setCurrentScreen(screen);
    }
  }

  function addToCart(item) {
    setCart(p => [...p, { ...item, qty: 1 }]);
    setUserPrefs(p => ({ ...p, [item.id]: { milkIdx: item.milkIdx || 0, volume: item.volume || 400, size: item.size } }));
    setCurrentScreen("cart");
  }

  function clearCart() {
    setCart([]);
  }

  function handleRegister(profile) {
    setUserProfile(profile);
  }

  function handleUpdateProfile(updatedProfile) {
    const updated = { ...userProfile, ...updatedProfile };
    localStorage.setItem("drinkit_user_profile", JSON.stringify(updated));
    setUserProfile(updated);
    navigate("profile");
  }

  function handleLogout() {
    localStorage.removeItem("drinkit_user_profile");
    setUserProfile(null);
    setCurrentScreen("home");
  }

  const scrollbarHidingCSS = `
    ::-webkit-scrollbar { display: none !important; }
    .hide-scrollbar { scrollbar-width: none; }
    .hide-scrollbar::-webkit-scrollbar { display: none; }
  `;

  const activeTab = currentScreen === "product" ? "home" : currentScreen;

  if (showOnboarding) return (
    <div style={{ width: "100%", maxWidth: 390, margin: "0 auto", background: WHITE, borderRadius: 28, border: `0.5px solid ${GRAY_200}`, overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif", height: 760 }}>
      <style>{scrollbarHidingCSS}</style>
      <OnboardingScreen onComplete={() => { setShowOnboarding(false); localStorage.setItem("drinkit_onboarded", "true"); }} />
    </div>
  );

  if (!userProfile) return (
    <div style={{ width: "100%", maxWidth: 390, margin: "0 auto", background: WHITE, borderRadius: 28, border: `0.5px solid ${GRAY_200}`, overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif", height: 760 }}>
      <style>{scrollbarHidingCSS}</style>
      <RegistrationScreen onComplete={handleRegister} theme={theme} language={language} />
    </div>
  );

  if (showShopPicker) return (
    <div style={{ width: "100%", maxWidth: 390, margin: "0 auto", background: themeColors.bg, borderRadius: 28, border: `0.5px solid ${themeColors.border}`, overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}>
      <style>{scrollbarHidingCSS}</style>
      <div style={{ height: 50, display: "flex", alignItems: "center", padding: "0 20px", borderBottom: `0.5px solid ${themeColors.border}` }}><span style={{ fontSize: 15, fontWeight: 600, color: themeColors.text }}>{currentTime}</span></div>
      <div style={{ height: 660, overflowY: "auto", background: themeColors.bg }}>
        <CoffeeShopPicker onSelect={c => { setSelectedShop(c); setShowShopPicker(false) }} onClose={() => setShowShopPicker(false)} theme={theme} language={language} onNavigate={navigate} />
      </div>
    </div>
  );

  if (showTinder) return (
    <div style={{ width: "100%", maxWidth: 390, margin: "0 auto", background: themeColors.bg, borderRadius: 28, border: `0.5px solid ${themeColors.border}`, overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif", height: 760 }}>
      <style>{scrollbarHidingCSS}</style>
      <div style={{ height: 50, display: "flex", alignItems: "center", padding: "0 20px", borderBottom: `0.5px solid ${themeColors.border}` }}><span style={{ fontSize: 15, fontWeight: 600, color: themeColors.text }}>{currentTime}</span></div>
      <div style={{ height: 710, overflowY: "auto", position: "relative", background: themeColors.bg }}>
        <CoffeeTinder drinks={allDrinks} onClose={() => setShowTinder(false)} onMatch={(d) => { setShowTinder(false); navigate("product", d); }} />
      </div>
    </div>
  );

  return (
    <div style={{ width: "100%", maxWidth: 390, margin: "0 auto", background: themeColors.bg, borderRadius: 28, border: `0.5px solid ${themeColors.border}`, overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif", position: "relative", color: themeColors.text }}>
      <style>{scrollbarHidingCSS}</style>

      {/* Status Bar */}
      <div style={{ height: 50, background: currentScreen === "product" ? (selectedProduct?.heroColor || "#D8C8B0") : themeColors.bg, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", borderBottom: `0.5px solid ${themeColors.border}` }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: currentScreen === "product" ? GRAY_900 : themeColors.text }}>{currentTime}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 12, color: currentScreen === "product" ? GRAY_900 : themeColors.text }}>4G</span>
          <div style={{ width: 25, height: 12, borderRadius: 3, border: `1px solid ${currentScreen === "product" ? GRAY_900 : themeColors.text}`, padding: 1 }}>
            <div style={{ width: "65%", height: "100%", background: currentScreen === "product" ? GRAY_900 : themeColors.text, borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ height: 660, overflowY: "auto", background: themeColors.bg }}>
        {currentScreen === "home" && <HomeScreen onNavigate={navigate} onAddToCart={addToCart} selectedShop={selectedShop} onChangeShop={() => setShowShopPicker(true)} onShowTinder={() => setShowTinder(true)} userPrefs={userPrefs} milkPrefsTracker={{}} currentScreenId="home" theme={theme} language={language} />}
        {currentScreen === "product" && selectedProduct && <ProductScreen product={selectedProduct} onBack={() => setCurrentScreen("home")} onAddToCart={addToCart} userPrefs={userPrefs} theme={theme} language={language} />}
        {currentScreen === "cart" && <CartScreen cart={cart} onRemove={i => setCart(p => p.filter((_, j) => j !== i))} onUpdateQty={(i, q) => setCart(p => p.map((it, j) => j === i ? { ...it, qty: q } : it))} onNavigate={navigate} selectedShop={selectedShop} onChangeShop={() => setShowShopPicker(true)} onAddToCart={addToCart} onClearCart={clearCart} theme={theme} language={language} />}

        {currentScreen === "coffeepass" && (
          <div style={{ padding: "16px", textAlign: "center", color: themeColors.text, overflowY: "auto", height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 56, marginBottom: 12 }}>☕</div>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{t.coffeepassTitle}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: BRAND, marginBottom: 16 }}>4,990 ₸/месяц</div>

            <div style={{ background: themeColors.bgSecondary, borderRadius: 14, padding: "14px", marginBottom: 16 }}>
              <div style={{ fontSize: 13, color: themeColors.textSecondary, lineHeight: 1.6 }}>
                ✓ {t.coffeepassDesc}
              </div>
            </div>

            <div style={{ background: themeColors.bgSecondary, borderRadius: 14, padding: "20px", marginBottom: 16, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: 12, color: themeColors.textSecondary, marginBottom: 12, fontWeight: 600 }}>{t.scanQR}</div>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://kaspi.kz/pay/coffee" alt="Kaspi QR" style={{ width: 160, height: 160, borderRadius: 12 }} />
            </div>

            <div style={{ background: themeColors.card, borderRadius: 14, padding: "14px", marginBottom: 16, border: `1px solid ${themeColors.border}`, flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>💎 Ыңғайлықтар:</div>
              <div style={{ fontSize: 12, color: themeColors.textSecondary, lineHeight: 1.8, textAlign: "left" }}>
                <div>• Барлық сусын ішімдіктер</div>
                <div>• Өндіктерді орта сайын</div>
                <div>• Туған күнінде тегін ішімдік</div>
              </div>
            </div>

            <button style={{ width: "100%", padding: "14px 32px", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>📱 {t.register}</button>
          </div>
        )}

        {currentScreen === "profile" && (
          <div style={{ padding: "16px", color: themeColors.text, overflow: "auto", height: "100%" }}>
            {/* Header Profile Card */}
            <div style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #F0E8FF 100%)`, borderRadius: 20, padding: "20px 16px", marginBottom: 16, border: `1.5px solid ${BRAND}30` }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                <WhaleLogo size={56} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: GRAY_900 }}>{userProfile?.name || "User"}</div>
                  <div style={{ fontSize: 13, color: BRAND, marginTop: 2, fontWeight: 500 }}>{userProfile?.phone || "---"}</div>
                  <div style={{ fontSize: 12, color: GRAY_600, marginTop: 4 }}>{t.membershipDuration}: 14 мес</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 14, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: BRAND }}>127</div>
                  <div style={{ fontSize: 11, color: GRAY_600, marginTop: 2 }}>{t.totalOrders}</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 14, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: BRAND }}>4.8⭐</div>
                  <div style={{ fontSize: 11, color: GRAY_600, marginTop: 2 }}>{t.rating}</div>
                </div>
              </div>
            </div>

            {/* Loyalty Card */}
            <div style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`, borderRadius: 18, padding: "16px", marginBottom: 16, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, fontSize: 120, opacity: 0.1 }}>☕</div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: WHITE }}>🎁 {t.freedrinkProgress}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: WHITE }}>7/10</div>
                </div>
                <div style={{ height: 8, background: "rgba(255,255,255,0.25)", borderRadius: 4, overflow: "hidden", marginBottom: 10 }}>
                  <div style={{ width: "70%", height: "100%", background: `linear-gradient(90deg, ${WHITE} 0%, #FFEB3B 100%)`, borderRadius: 4, transition: "width 0.5s" }} />
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.9)" }}>{t.nextDrink}</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
              <button onClick={() => navigate("orderHistory")} style={{ padding: "14px 12px", background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 14, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: themeColors.text, fontSize: 13, fontWeight: 600 }}>
                <span style={{ fontSize: 24 }}>📋</span>
                {t.orders}
              </button>
              <button onClick={() => navigate("support")} style={{ padding: "14px 12px", background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 14, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: themeColors.text, fontSize: 13, fontWeight: 600 }}>
                <span style={{ fontSize: 24 }}>💬</span>
                {t.support}
              </button>
              <button onClick={() => navigate("settings")} style={{ padding: "14px 12px", background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 14, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: themeColors.text, fontSize: 13, fontWeight: 600 }}>
                <span style={{ fontSize: 24 }}>⚙️</span>
                {t.settings}
              </button>
              <button style={{ padding: "14px 12px", background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 14, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: themeColors.text, fontSize: 13, fontWeight: 600 }}>
                <span style={{ fontSize: 24 }}>⭐</span>
                {t.favorites}
              </button>
            </div>

            {/* Menu Items */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: themeColors.textSecondary, marginBottom: 10, paddingLeft: 4 }}>{t.profile_section}</div>
              <button onClick={() => navigate("personal_info")} style={{ width: "100%", padding: "14px 14px", background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 12, marginBottom: 8, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", color: themeColors.text, fontSize: 14, fontWeight: 500 }}>
                <span>👤 {t.personalInfo}</span>
                <span style={{ color: themeColors.textSecondary }}>›</span>
              </button>
              <button onClick={() => navigate("payment_methods")} style={{ width: "100%", padding: "14px 14px", background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 12, marginBottom: 8, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", color: themeColors.text, fontSize: 14, fontWeight: 500 }}>
                <span>💳 {t.paymentMethods}</span>
                <span style={{ color: themeColors.textSecondary }}>›</span>
              </button>
              <button style={{ width: "100%", padding: "14px 14px", background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 12, marginBottom: 8, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", color: themeColors.text, fontSize: 14, fontWeight: 500 }}>
                <span>🔔 {t.notifications}</span>
                <span style={{ color: themeColors.textSecondary }}>›</span>
              </button>
            </div>

            {/* Preferences */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: themeColors.textSecondary, marginBottom: 10, paddingLeft: 4 }}>{t.preferences}</div>
              <div style={{ background: themeColors.card, border: `1px solid ${themeColors.border}`, borderRadius: 14, padding: "14px", marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>🌙 {t.theme}</span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => setTheme("light")} style={{ padding: "6px 12px", borderRadius: 8, border: theme === "light" ? `2px solid ${BRAND}` : `1px solid ${themeColors.border}`, background: theme === "light" ? BRAND_LIGHT : "transparent", color: theme === "light" ? BRAND : themeColors.text, fontWeight: 600, fontSize: 11, cursor: "pointer" }}>
                      ☀️
                    </button>
                    <button onClick={() => setTheme("dark")} style={{ padding: "6px 12px", borderRadius: 8, border: theme === "dark" ? `2px solid ${BRAND}` : `1px solid ${themeColors.border}`, background: theme === "dark" ? BRAND_LIGHT : "transparent", color: theme === "dark" ? BRAND : themeColors.text, fontWeight: 600, fontSize: 11, cursor: "pointer" }}>
                      🌙
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>🌐 {t.language}</span>
                  <div style={{ display: "flex", gap: 4 }}>
                    {["kz", "ru", "en"].map(lang => (
                      <button key={lang} onClick={() => setLanguage(lang)} style={{ padding: "5px 10px", borderRadius: 6, border: language === lang ? `2px solid ${BRAND}` : `1px solid ${themeColors.border}`, background: language === lang ? BRAND_LIGHT : "transparent", color: language === lang ? BRAND : themeColors.text, fontWeight: 600, fontSize: 10, cursor: "pointer" }}>
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <button onClick={handleLogout} style={{ width: "100%", padding: "14px", background: `${RED}15`, border: `1px solid ${RED}30`, borderRadius: 12, textAlign: "center", cursor: "pointer", color: RED, fontSize: 14, fontWeight: 600 }}>
              🚪 {t.logout}
            </button>
          </div>
        )}

        {currentScreen === "personal_info" && <PersonalInfoScreen userProfile={userProfile} onNavigate={navigate} onUpdate={handleUpdateProfile} theme={theme} language={language} />}
        {currentScreen === "payment_methods" && <PaymentMethodsScreen onNavigate={navigate} theme={theme} language={language} />}
        {currentScreen === "orderHistory" && <OrderHistoryScreen onNavigate={navigate} theme={theme} language={language} />}
        {currentScreen === "support" && <SupportChatScreen onNavigate={navigate} theme={theme} language={language} />}
        {currentScreen === "settings" && <SettingsPaymentScreen onNavigate={navigate} theme={theme} language={language} setLanguage={setLanguage} setTheme={setTheme} />}
        {currentScreen === "payment_card" && <PaymentCardScreen onNavigate={navigate} theme={theme} language={language} />}
        {currentScreen === "map_view" && <MapViewScreen onNavigate={navigate} onSelectShop={setSelectedShop} theme={theme} language={language} />}
      </div>

      {/* Bottom Navigation */}
      <div style={{ display: "flex", borderTop: `0.5px solid ${themeColors.border}`, background: themeColors.bg, paddingBottom: 4 }}>
        {[{ k: "home", l: t.menu, i: "▦" }, { k: "cart", l: t.cart, i: "🛒" }, { k: "coffeepass", l: t.coffeepass, i: "💳" }, { k: "profile", l: t.profile, i: "👤" }].map(tab => (
          <button key={tab.k} onClick={() => setCurrentScreen(tab.k)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, border: "none", background: "none", padding: "8px 0 4px", cursor: "pointer", color: activeTab === tab.k ? BRAND : themeColors.textSecondary, position: "relative" }}>
            <span style={{ fontSize: 20 }}>{tab.i}</span>
            <span style={{ fontSize: 10, fontWeight: 500 }}>{tab.l}</span>
            {tab.k === "cart" && cart.length > 0 && <div style={{ position: "absolute", top: 2, right: "calc(50% - 16px)", width: 16, height: 16, borderRadius: "50%", background: RED, color: WHITE, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{cart.length}</div>}
          </button>
        ))}
      </div>
    </div>
  );
}
