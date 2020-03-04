import { NAVBAR_TEMPLATE } from '../templates.js';
import CONFIG from '../../config.js';

const { routes } = CONFIG;

function initNavbar(navbar, render) {
  navbar.addEventListener('click', (e) => {
    switch (e.target.className) {
    case 'nav__link_home':
      window.history.pushState(null, null, `${routes.homePage.route}`);
      break;
    case 'nav__link_about':
      window.history.pushState(null, null, `/${routes.aboutPage.route}`);
      break;
    case 'nav__link_catalogue':
      window.history.pushState(null, null, `/${routes.cataloguePage.route}`);
      break;
    case 'nav__link_cart':
      window.history.pushState(null, null, `/${routes.cartPage.route}`);
      break;
    case 'nav__link_login':
      window.history.pushState(null, null, `/${routes.authPage.route}`);
      break;
    default:
      break;
    }
    render(window.location.pathname);
  });
}

function renderNavbar(render) {
  const navbar = document.getElementById('js-main-nav');
  navbar.insertAdjacentHTML('beforeend', NAVBAR_TEMPLATE());
  initNavbar(navbar, render);
}

export default renderNavbar;
