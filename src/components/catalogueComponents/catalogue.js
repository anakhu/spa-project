import { CATALOGUE_ITEM_TEMPLATE } from '../templates.js';
import CONFIG from '../../config.js';

const { catalogue } = CONFIG.selectors;
const { route } = CONFIG.routes.productPage;

function renderCatalogueItem(product) {
  const catalogueContainer = document.querySelector(catalogue.wrapper);
  const {
    id, image, name, price,
  } = product;

  const catalogueItem = CATALOGUE_ITEM_TEMPLATE(id, image, name, price);
  catalogueContainer.insertAdjacentHTML('beforeend', catalogueItem);
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
}

export default renderCatalogue;
