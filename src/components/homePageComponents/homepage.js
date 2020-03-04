import { HOMEPAGE_TEMPLATE } from '../templates.js';

function renderHomePage(render) {
  const homepage = document.getElementById('js-homepage');
  homepage.insertAdjacentHTML('beforeend', HOMEPAGE_TEMPLATE());
  initSeriveUrls(render);
}

function initSeriveUrls(renderFn) {
  const servicesUrls = document.querySelectorAll('.homePage__services li');
  servicesUrls.forEach((url) => {
    const route = url.className.split('homePage__link_')[1];
    url.addEventListener('click', () => {
      window.history.pushState(null, null, `/${route}`);
      renderFn(window.location.pathname);
    });
  });
}

export default renderHomePage;
