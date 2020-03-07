import { CATALOGUE_ITEM_TEMPLATE } from './catalogue-template.js';
import CONFIG from '../../config.js';

const { catalogue } = CONFIG.selectors;
const { route } = CONFIG.routes.productPage;

function renderCatalogueItem(product) {
  const catalogueContainer = document.querySelector(catalogue.wrapper);
  const catalogueItem = CATALOGUE_ITEM_TEMPLATE(product);
  catalogueContainer.insertAdjacentHTML('beforeend', catalogueItem);
}

function renderCatalogueBanner() {
  const catalogueContainer = document.querySelector(catalogue.page);
  catalogueContainer.insertAdjacentHTML('afterbegin',
    `<div class="lead__banner">
      <img src="/assets/img/products/catalogue.jpg" />
    </div>`);
}

function makeCatalogueItemsClickable(render) {
  const catalogueCards = document.querySelectorAll(catalogue.item);
  catalogueCards.forEach((card) => {
    const clickableArea = card.querySelector(catalogue.img);
    clickableArea.addEventListener('click', () => {
      const { id } = card.dataset;
      window.history.pushState(null, null, `/${route}/${id}`);
      render(window.location.pathname);
    });
  });
}

function renderCatalogue(data, render) {
  [...data].forEach((product) => {
    renderCatalogueItem(product);
  });
  makeCatalogueItemsClickable(render);
  renderCatalogueBanner();
}

export default renderCatalogue;
