import { ABOUT_PAGE_TEMPLATE } from '../templates.js';

function renderAboutPage() {
  const aboutPageWrapper = document.getElementById('js-about-page');
  aboutPageWrapper.insertAdjacentHTML('beforeend', ABOUT_PAGE_TEMPLATE());
}

export default renderAboutPage;
