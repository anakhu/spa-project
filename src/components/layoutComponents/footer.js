import { FOOTER_TEMPLATE } from './footer-template.js';

function renderFooter() {
  const container = document.querySelector('body');
  container.insertAdjacentHTML('beforeend', FOOTER_TEMPLATE());
}

export default renderFooter;
