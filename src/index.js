import '../dist/index.html';
import '../dist/assets/styles/styles.css';
import Router from './main/Router.js';
import Renderer from './main/Renderer.js';
// import Carousel from './components/homePageComponents/carousel.js';

// const carousel = new Carousel();


class App {
  constructor() {
    this.products = [];
    this.router = new Router();
    this.renderer = new Renderer(this.router);
    this.init();
  }

  init() {
    fetch('http://localhost:3000/products')
      .then((data) => data.json())
      .then((products) => {
        this.products = products;
      })
      .then(() => {
        console.log(this.products);
        this.initRouter();
        this.renderer.initApp(this.products);
        this.router.renderRouteContent(window.location.pathname);
      })
      .catch((error) => console.log(error.message));
  }

  initRouter() {
    this.router.createNewRoute('/', this.renderer.displayPageContent.bind(this.renderer, 'js-homepage'));
    this.router.createNewRoute('catalogue', this.renderer.displayPageContent.bind(this.renderer, 'js-catalogue-page'));
    this.router.createNewRoute('about', this.renderer.displayPageContent.bind(this.renderer, 'js-about-page'));
    this.router.createNewRoute('contact', this.renderer.displayPageContent.bind(this.renderer, 'js-contact-page'));
  }
}

const app = new App();
