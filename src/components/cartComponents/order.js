import { CARD_ORDER_TEMPLATE } from '../templates.js';
import CONFIG from '../../config.js';

const { cart } = CONFIG.selectors;

function renderOrderCard() {
  const orderCardContainer = document.querySelector(cart.order);
  orderCardContainer.insertAdjacentHTML('beforeend', CARD_ORDER_TEMPLATE());
}

export default renderOrderCard;
