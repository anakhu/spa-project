import { CATALOGUE_ITEM_TEMPLATE } from '../templates.js';

function renderCatalogueItem(product) {
  const catalogueContainer = document.getElementById('js-catalogue');
  const {
    id, image, name, price,
  } = product;

  const catalogueItem = CATALOGUE_ITEM_TEMPLATE(id, image, name, price);
  catalogueContainer.insertAdjacentHTML('beforeend', catalogueItem);
}

function makeCatalogueItemsClickable(render) {
  const catalogueCards = document.querySelectorAll('.catalogue__item');
  catalogueCards.forEach((card) => {
    const clickableArea = card.querySelector('.catalogue__item_imgwrap');
    clickableArea.addEventListener('click', () => {
      const { id } = card.dataset;
      window.history.pushState(null, null, `/product/${id}`);
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
