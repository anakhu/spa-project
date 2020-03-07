import CONFIG from './config.js';
import '../dist/index.html';
import '../dist/assets/styles/scss/styles.scss';
import Router from './main/Router.js';
import Renderer from './main/Renderer.js';
import FilterService from './main/FilterService.js';
import CartService from './main/CartService.js';
import CartObserver from './main/CartObsever.js';
import FormService from './main/FormService.js';
import AuthService from './main/AuthService.js';
import { makeRequest } from './main/utils/makeRequest.js';


class App {
  constructor() {
    this.products = [];
    this.router = new Router();
    this.filterService = new FilterService();
    this.cartService = new CartService();
    this.cartObserver = new CartObserver(this.router);
    this.authService = new AuthService(this.router, this.cartService);
    this.formService = new FormService(this.router, this.authService);
    this.renderer = new Renderer(this.router, this.filterService, this.cartService, this.cartObserver);
    this.filterService.subscribe(this.onFilterChange.bind(this));
    this.cartService.subscribe(this.onCartChange.bind(this));
    this.init();
  }

  init() {
    makeRequest('products', 'GET')
      .then((data) => data.json())
      .then((products) => {
        this.products = products;
      })
      .then(() => {
        this.initRouter();
        this.renderer.initApp(this.products);
        this.router.renderRouteContent(window.location.pathname);
      })
      .then(() => {
        this.filterService.init();
        this.cartService.init();
        this.formService.initAuthForms();
        this.cartService.initCartInputHadlers();
        this.cartObserver.initObserver();
      })
      .catch((error) => console.log(error.message));
  }

  initRouter() {
    Object.keys(CONFIG.routes).forEach((entry) => {
      const { route, contentId } = CONFIG.routes[entry];
      if (route !== CONFIG.routes.authPage.route) {
        this.router.createNewRoute(route, this.renderer.renderPageContent.bind(this.renderer, contentId, this.products));
      } else {
        this.router.createNewRoute(route, () => {
          if (window.localStorage.getItem('user')) {
            const cartRoute = CONFIG.routes.cartPage.route;
            window.history.pushState(null, null, `/${cartRoute}`);
            this.router.renderRouteContent(window.location.pathname);
          } else {
            this.renderer.renderPageContent.call(this.renderer, contentId);
          }
        });
      }
    });
  }

  onFilterChange(data) {
    window.history.pushState(null, null, data);
    this.router.renderRouteContent(decodeURI(window.location.pathname));
  }

  onCartChange(data) {
    if (window.location.pathname.includes(CONFIG.routes.cataloguePage.route)
      || window.location.pathname.includes(CONFIG.routes.productPage.route)) {
      window.localStorage.setItem('products', data);
      this.renderer.renderCart(this.products);
      this.cartService.initCartInputHadlers();
      this.cartObserver.initObserver();
      this.renderer.initInCartFlags();
    }
  }
}

const app = new App();
