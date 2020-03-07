import { SINGLE_PAGE_TEMPLATE } from './single-page-template.js';
import { generateMoreProducts, makeItemsClickable } from '../layoutComponents/randomProducts.js';

import CONFIG from '../../config.js';

const { contentId } = CONFIG.routes.productPage;
const { page } = CONFIG.selectors;

class SinglePage {
  constructor() {
    this.singlePageContainer = document.getElementById(contentId);
    if (SinglePage.instance) {
      return SinglePage.instance;
    }

    SinglePage.instance = this;
  }

  drawSinglePage(product, data, render) {
    if (product) {
      this.resetPage();
      this.singlePageContainer.insertAdjacentHTML('beforeend', SINGLE_PAGE_TEMPLATE(product));
      this.drawMoreProducts(product, data);
      this.makeClickable(render);
    }
  }

  drawMoreProducts(product, data) {
    const someProductsContainer = document.querySelector(page.offer);
    generateMoreProducts(someProductsContainer, data, page.random, product);
  }

  makeClickable(render) {
    makeItemsClickable(page.offer, render);
  }

  resetPage() {
    const pageContent = document.querySelector(page.content);
    if (pageContent) {
      pageContent.remove();
    }
  }
}

export default SinglePage;
