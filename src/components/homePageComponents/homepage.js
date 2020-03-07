import { HOMEPAGE_TEMPLATE } from './home-template.js';
import CONFIG from '../../config.js';

const { contentId } = CONFIG.routes.homePage;
const { home } = CONFIG.selectors;

function renderHomePage(render, data) {
  const homepage = document.getElementById(contentId);
  homepage.insertAdjacentHTML('beforeend', HOMEPAGE_TEMPLATE());
  initServiceUrl(render);
  renderLogos(data);
}

function renderLogos(data) {
  const logoContainer = document.querySelector(`${home.products} ul`);
  data.forEach((product) => {
    if (product.logo) {
      logoContainer.insertAdjacentHTML('beforeend',
        `<li><img src="/${product.logo}" name="brand" data-value="${product.brand}" /></li>`);
    }
  });
}

function initServiceUrl(renderFn) {
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
