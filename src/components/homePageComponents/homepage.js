import { HOMEPAGE_TEMPLATE } from '../templates.js';
import CONFIG from '../../config.js';

const { contentId } = CONFIG.routes.homePage;
const { home } = CONFIG.selectors;

function renderHomePage(render) {
  const homepage = document.getElementById(contentId);
  homepage.insertAdjacentHTML('beforeend', HOMEPAGE_TEMPLATE());
  initSeriveUrls(render);
}

function initSeriveUrls(renderFn) {
  const servicesUrls = document.querySelectorAll(home.services);
  servicesUrls.forEach((url) => {
    const route = url.className.split('homePage__link_')[1];
    url.addEventListener('click', () => {
      window.history.pushState(null, null, `/${route}`);
      renderFn(window.location.pathname);
    });
  });
}

export default renderHomePage;
