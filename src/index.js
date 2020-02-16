import '../dist/index.html';
import '../dist/assets/styles/styles.css';
import Router from './main/Router.js';
import Renderer from './main/Renderer.js';
// import Carousel from './components/homePageComponents/carousel.js';

// const carousel = new Carousel();


class App {
  constructor() {
    this.router = new Router();
    this.renderer = new Renderer(this.router);
    this.init();
  }

  init() {
    this.initRouter();
    this.renderer.initApp();
    this.router.renderRouteContent('/');
  }

  initRouter() {
    this.router.createNewRoute('/', this.renderer.renderHomePageContent.bind(this.router));
  }
}

const app = new App();
