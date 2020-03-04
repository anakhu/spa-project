import CONFIG from '../../config.js';
import { ERROR_PAGE } from '../templates.js';

const { contentId } = CONFIG.routes.errorPage;

function renderErrorPage() {
  const errorPageContainer = document.getElementById(contentId);
  errorPageContainer.insertAdjacentHTML('beforeend', ERROR_PAGE());
}

export default renderErrorPage;
