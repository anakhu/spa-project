import $ from 'jquery';
import { makeRandom } from '../../main/utils/makeRandom.js';
import { RANDOM_PRODUCT_TEMPLATE } from './random-template.js';
import CONFIG from '../../config.js';

const { catalogue } = CONFIG.selectors;
const { route } = CONFIG.routes.productPage;

export function generateMoreProducts(container, data, max, product = null) {
  let otherProducts;

  if (product) {
    otherProducts = data
      .filter((item) => Number(item.id) !== Number(product.id));
  } else {
    otherProducts = data;
  }

  const makeUniqueIds = makeRandom(max, otherProducts);
  const uniqueIds = makeUniqueIds();

  const productsToDisplay = otherProducts
    .filter((prod) => uniqueIds.includes(prod.id));
  productsToDisplay.forEach((offer) => {
    container.insertAdjacentHTML('beforeend', RANDOM_PRODUCT_TEMPLATE(offer));
  });
}


export function makeItemsClickable(containerSelector, render) {
  const offerProducts = document.querySelectorAll(`${containerSelector} ${catalogue.item}`);
  offerProducts.forEach((product) => {
    product.addEventListener('click', (e) => {
      const { id } = e.target.closest(catalogue.item).dataset;
      window.history.pushState(null, null, `/${route}/${id}`);
      render(window.location.pathname);
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  });
}
