/* eslint-disable no-param-reassign */
import Navbar from '../components/layoutComponents/navbar.js';

class Renderer {
  constructor(router) {
    this.router = router;
  }

  initApp() {
    const navbar = new Navbar(this.router.renderRouteContent.bind(this.router));
    const appContent = document.getElementById('appContent-wrapper');
    const appContentElements = Array.from(appContent.children);
    [...appContentElements].forEach((div) => {
      div.style.display = 'none';
    });
  }

  renderHomePageContent() {
    console.log('homepage route');
    const homePageContent = document.getElementById('js-homepage');
    homePageContent.style.display = 'block';
  }
}

export default Renderer;
