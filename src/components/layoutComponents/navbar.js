import $ from 'jquery';
import { NAVBAR_TEMPLATE } from './navbar-template.js';
import CONFIG from '../../config.js';

const { routes } = CONFIG;
const { nav } = CONFIG.selectors;

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

function initNavResize() {
  window.onresize = () => {
    if ($(window).width() > 600) {
      $(nav.main).css('display', 'block');
    }
  };
}

function addNavbarToggler(mainNavbar) {
  const header = document.querySelector('header');
  header.insertAdjacentHTML('beforeend', `
  <img class="nav__toggle" src="/assets/img/homepage/navbar.png" />`);

  const navToggler = document.querySelector(nav.toggle);
  navToggler.addEventListener('click', () => {
    const { display } = mainNavbar.style;

    if (display === 'block') {
      $(nav.main).slideUp(500, () => {
        mainNavbar.style.display = 'none';
      });
    } else {
      $(nav.main).slideDown(500, () => {
        mainNavbar.style.display = 'block';
      });
    }
  });
}

function renderNavbar(render) {
  const navbar = document.querySelector(nav.main);
  navbar.style.display = 'block';
  navbar.insertAdjacentHTML('beforeend', NAVBAR_TEMPLATE());
  initNavbar(navbar, render);
  addNavbarToggler(navbar);
  initNavResize();
}

export default renderNavbar;
