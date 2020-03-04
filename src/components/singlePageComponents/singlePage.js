import { SINGLE_PAGE_TEMPLATE } from '../templates.js';
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

  drawSinglePage(product) {
    if (product) {
      this.resetPage();
      this.singlePageContainer.insertAdjacentHTML('beforeend', SINGLE_PAGE_TEMPLATE(product));
    }
  }

  resetPage() {
    const pageContent = document.querySelector(page.content);
    if (pageContent) {
      pageContent.remove();
    }
  }
}

export default SinglePage;
