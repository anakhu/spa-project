import { ABOUT_PAGE_TEMPLATE } from '../templates.js';
import CONFIG from '../../config.js';

const { contentId } = CONFIG.routes.aboutPage;

function renderAboutPage() {
  const aboutPageWrapper = document.getElementById(contentId);
  aboutPageWrapper.insertAdjacentHTML('beforeend', ABOUT_PAGE_TEMPLATE());
}

export default renderAboutPage;
