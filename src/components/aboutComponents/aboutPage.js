import { ABOUT_PAGE_TEMPLATE } from './about-template.js';
import { generateMoreProducts } from '../layoutComponents/randomProducts.js';
import CONFIG from '../../config.js';

const { about } = CONFIG.selectors;
const { contentId } = CONFIG.routes.aboutPage;

function renderAboutPage(data) {
  const aboutPageWrapper = document.getElementById(contentId);
  aboutPageWrapper.insertAdjacentHTML('beforeend', ABOUT_PAGE_TEMPLATE());
  drawAboutOfferItems(data);
}

function drawAboutOfferItems(data) {
  const itemsContainer = document.querySelector(about.offer);
  generateMoreProducts(itemsContainer, data, about.random, null);
}
export default renderAboutPage;
