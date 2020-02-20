import '../dist/index.html';
import '../dist/assets/styles/styles.css';
import Router from './main/Router.js';
import Renderer from './main/Renderer.js';
import CheckBoxService from './main/CheckBoxService.js';


class App {
  constructor() {
    this.products = [];
    this.router = new Router();
    this.checkboxService = new CheckBoxService();
    this.renderer = new Renderer(this.router, this.checkboxService);
    this.checkboxService.subscribe(this.onFilterChange.bind(this));
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
        this.checkboxService.init();
      })
      // .catch((error) => console.log(error.message));
  }

  initRouter() {
    this.router.createNewRoute('/', this.renderer.displayPageContent.bind(this.renderer, 'js-homepage'));
    this.router.createNewRoute('catalogue', this.renderer.displayPageContent.bind(this.renderer, 'js-catalogue-page', this.products));
    this.router.createNewRoute('about', this.renderer.displayPageContent.bind(this.renderer, 'js-about-page'));
    this.router.createNewRoute('contact', this.renderer.displayPageContent.bind(this.renderer, 'js-contact-page'));
    // this.router.createNewRoute('404', this.renderer.displayPageContent.bind(this.renderer, 'js-error-page'));
  }

  onFilterChange(data) {
    window.history.pushState(null, null, data);
    this.router.renderRouteContent(decodeURI(window.location.pathname));
  }
}

const app = new App();
