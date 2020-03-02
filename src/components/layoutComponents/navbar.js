import { NAVBAR_TEMPLATE } from '../templates.js';

function initNavbar(navbar, render) {
  navbar.addEventListener('click', (e) => {
    switch (e.target.className) {
    case 'nav__link_home':
      window.history.pushState(null, null, '/');
      break;
    case 'nav__link_about':
      window.history.pushState(null, null, '/about');
      break;
    case 'nav__link_catalogue':
      window.history.pushState(null, null, '/catalogue');
      break;
    case 'nav__link_contact':
      window.history.pushState(null, null, '/contact');
      break;
    case 'nav__link_cart':
      window.history.pushState(null, null, '/cart');
      break;
    case 'nav__link_login':
      window.history.pushState(null, null, '/login');
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
