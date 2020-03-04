const CONFIG = {
  api: 'https://my-json-server.typicode.com/anakhu/demo',
  routes: {
    homePage: { route: '/', contentId: 'js-homepage' },
    aboutPage: { route: 'about', contentId: 'js-about-page' },
    cataloguePage: { route: 'catalogue', contentId: 'js-catalogue-page' },
    productPage: { route: 'product', contentId: 'js-single-page' },
    errorPage: { route: '404', contentId: 'js-error-page' },
    authPage: { route: 'login', contentId: 'js-auth-page' },
    cartPage: { route: 'cart', contentId: 'js-cart-page' },
  },
  filters: ['brand', 'volume', 'manufacturer', 'category', 'package', 'spirit type'],
  validationRules: {
    name: {
      minLen: 3,
      maxLen: 20,
      onlyNumbersAndLetters: true,
      isNotEmpty: true,
    },
    email: {
      isNotEmpty: true,
      isValidEmail: true, 
    },
    password: {
      minLen: 6,
      maxLen: 20,
      onlyNumbersAndLetters: true,
      isNotEmpty: true,
    },
  },
  selectors: {
    cart: {
      wrapper: '.cartPage__cart_wrapper',
      order: '.cartPage__cart_order',
      content: '.cartPage__content',
      item: '.cart__item_wrapper',
      total: '.cartPage__total',
      details: '.cartPage__details',
      userInfo: '.cartPage__user_info',
      userData: '.cartPage__user_data',
      orderMessage: '.cartPage__order_message',
      input: '.cart__item_input',
      delete: '.cart__item_delete',
      choose: '.cart__item_choose',
      name: '.cart__item_name',
      price: '.cart__item_price',
      quantity: '.cart__item_quantity',
      buy: '.cartPage__order_buy',
    },
    catalogue: {
      item: '.catalogue__item',
      add: '.catalogue__item_add',
      img: '.catalogue__item_imgwrap',
      wrapper: '.productPage__catalogue',
    },
    filter: {
      wrapper: '.productPage__filter',
      container: '.catalogue__filter_group',
      label: '.filter__group_label',
      content: '.filter__group_content',
      currentPrice: '.filter__price_current',
      price: '.filter__group_price',
      checkbox: '.filter__group_checkbox input',
      reset: '.filter__button_reset',
    },
    nav: {
      logout: '.nav__link_logout',
      login: '.nav__link_login',
    },
    auth: {
      error: '.auth__form_error',
    },
    home: {
      services: '.homePage__services li',
      img: '.homePage__products img',
    },
    page: {
      content: '.singlePage__content',
    },
    forms: {
      signIn: 'js-sign-in-form',
      signUp: 'js-sign-up-form',
    },
  },
};

export default CONFIG;
