import { CARD_ORDER_TEMPLATE } from '../templates.js';

function renderOrderCard() {
  const orderCardContainer = document.getElementById('js-order-card');
  orderCardContainer.insertAdjacentHTML('beforeend', CARD_ORDER_TEMPLATE());
}

export default renderOrderCard;
