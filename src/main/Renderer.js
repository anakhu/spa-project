/* eslint-disable no-param-reassign */
import Navbar from '../components/layoutComponents/navbar.js';
import Catalogue from '../components/catalogueComponents/catalogue.js';
import CheckBoxFilter from '../components/catalogueComponents/checkBoxes.js';


class Renderer {
  constructor(router, checkboxService) {
    this.router = router;
    this.checkboxService = checkboxService;
  }

  initApp(data) {
    const navbar = new Navbar(this.router.renderRouteContent.bind(this.router));
    const catalogue = new Catalogue();
    const filter = new CheckBoxFilter();
    filter.drawCheckboxes(data);
    catalogue.renderCatalogue(data);
    const appContent = document.getElementById('appContent-wrapper');
    appContent.style.display = 'block';
  }

  displayPageContent(contentId, data = null) {
    if (!window.location.search) {
      if (contentId === 'js-catalogue-page' && Object.keys(this.checkboxService.filters).length) {
        window.history.pushState(null, null, this.checkboxService.createQuery());
      }
    }

    const appContent = document.getElementById('appContent-wrapper');
    const appContentElements = Array.from(appContent.children);

    [...appContentElements].forEach((div) => {
      div.style.display = 'none';
    });

    if (contentId) {
      const pageContent = document.getElementById(contentId);
      pageContent.style.display = 'block';
    }

    if (window.location.search) {
      this.displayFilteredContent(data);
    } else {
      const productCards = Array.from(document.querySelectorAll('.catalogue__item'));
      productCards.forEach((productCard) => {
        productCard.style.display = 'flex';
      });
    }
  }

  displayFilteredContent(data) {
    const filters = this.checkboxService.getFilters();

    const productCards = Array.from(document.querySelectorAll('.catalogue__item'));

    data.forEach((product) => {
      const isFound = Object.keys(filters).every((key) => filters[key].includes(String(product[key])));
      const card = productCards.find((productCard) => Number(productCard.dataset['id']) === Number(product.id));
      if (isFound) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }
}

export default Renderer;
