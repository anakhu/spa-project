import { SINGLE_PAGE_TEMPLATE } from '../templates.js';

class SinglePage {
  constructor() {
    this.singlePageContainer = document.getElementById('js-single-page');
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
    const pageContent = document.querySelector('.singlePage__content');
    if (pageContent) {
      pageContent.remove();
    }
  }
}

export default SinglePage;
