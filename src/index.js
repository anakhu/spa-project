import '../dist/index.html';
// import '../dist/assets/styles/styles.css';
import '../dist/assets/styles/scss/styles.scss';
import Router from './main/Router.js';
import Renderer from './main/Renderer.js';
import FilterService from './main/FilterService.js';
import CartService from './main/CartService.js';


class App {
  constructor() {
    this.products = [];
    this.router = new Router();
    this.filterService = new FilterService();
    this.cartService = new CartService();
    this.renderer = new Renderer(this.router, this.filterService, this.cartService);
    this.filterService.subscribe(this.onFilterChange.bind(this));
    this.cartService.subscribe(this.onCartChange.bind(this));
    this.init();
  }

  init() {
    fetch('http://localhost:3000/products')
      .then((data) => data.json())
      .then((products) => {
        this.products = products;
      })
      .then(() => {
        this.initRouter();
        this.renderer.initApp(this.products);
        this.router.renderRouteContent(window.location.pathname);
        this.filterService.init();
        this.cartService.init();
      })
      // .catch((error) => console.log(error.message));
  }

  initRouter() {
    this.router.createNewRoute('/', this.renderer.displayPageContent.bind(this.renderer, 'js-homepage'));
    this.router.createNewRoute('catalogue', this.renderer.displayPageContent.bind(this.renderer, 'js-catalogue-page', this.products));
    this.router.createNewRoute('about', this.renderer.displayPageContent.bind(this.renderer, 'js-about-page'));
    this.router.createNewRoute('contact', this.renderer.displayPageContent.bind(this.renderer, 'js-contact-page'));
    this.router.createNewRoute('cart', this.renderer.displayPageContent.bind(this.renderer, 'js-cart-page'));
    this.router.createNewRoute('product', this.renderer.displayPageContent.bind(this.renderer, 'js-single-page', this.products));
    this.router.createNewRoute('404', this.renderer.displayPageContent.bind(this.renderer, 'js-error-page'));
  }

  onFilterChange(data) {
    window.history.pushState(null, null, data);
    this.router.renderRouteContent(decodeURI(window.location.pathname));
  }

  onCartChange(data) {
    if (window.location.pathname.includes('catalogue') || window.location.pathname.includes('product')) {
      window.localStorage.setItem('products', data);
      this.renderer.renderCart(this.products);
      this.cartService.initCartInputHadlers();
    }
  }
}

const app = new App();
