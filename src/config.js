const CONFIG = {
  api: 'http://localhost:3000',
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
};

export default CONFIG;
