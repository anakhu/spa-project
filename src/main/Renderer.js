/* eslint-disable no-param-reassign */
import Navbar from '../components/layoutComponents/navbar.js';
import Catalogue from '../components/catalogueComponents/catalogue.js';


class Renderer {
  constructor(router) {
    this.router = router;
  }

  initApp(data) {
    const navbar = new Navbar(this.router.renderRouteContent.bind(this.router));
    const catalogue = new Catalogue();
    catalogue.renderCatalogue(data);
    const appContent = document.getElementById('appContent-wrapper');
    appContent.style.display = 'block';
    this.displayPageContent(null);
  }

  displayPageContent(contentId) {
    const appContent = document.getElementById('appContent-wrapper');
    const appContentElements = Array.from(appContent.children);

    [...appContentElements].forEach((div) => {
      div.style.display = 'none';
    });

    if (contentId) {
      const pageContent = document.getElementById(contentId);
      pageContent.style.display = 'flex';
    }
  }
}

export default Renderer;
