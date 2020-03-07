import $ from 'jquery';
import CONFIG from '../config.js';
import renderNavbar from '../components/layoutComponents/navbar.js';
import renderFooter from '../components/layoutComponents/footer.js';
import renderHomePage from '../components/homePageComponents/homepage.js';
import renderCatalogue from '../components/catalogueComponents/catalogue.js';
import Filters from '../components/catalogueComponents/filters.js';
import Cart from '../components/cartComponents/cart.js';
import renderOrderCard from '../components/cartComponents/order.js';
import SinglePage from '../components/singlePageComponents/singlePage';
import renderAuthForms from '../components/authComponents/login.js';
import renderAboutPage from '../components/aboutComponents/aboutPage.js';
import renderErrorPage from '../components/errorComponents/errorPage.js';
import { renderAdComponent } from '../components/layoutComponents/ads.js';

const { catalogue, page, cart } = CONFIG.selectors;

class Renderer {
  constructor(router, checkboxService, cartService, cartObserver) {
    this.appContainer = document.getElementById('appContent-wrapper');
    this.router = router;
    this.checkboxService = checkboxService;
    this.cartService = cartService;
    this.cartObserver = cartObserver;
  }

  initApp(data) {
    renderNavbar(this.router.renderRouteContent.bind(this.router));
    renderHomePage(this.router.renderRouteContent.bind(this.router), data);
    renderAboutPage(data);
    renderFooter();
    renderOrderCard();
    renderAuthForms();
    renderErrorPage();

    this.initCataloguePage(data);
    this.renderCart(data);
    this.renderFilters(data);
    this.renderAds();
    this.renderBackToTopBtn();

    this.appContainer.style.display = 'block';
  }

  initCataloguePage(data) {
    renderCatalogue(data, this.router.renderRouteContent.bind(this.router));
    this.initInCartFlags();
  }

  initInCartFlags() {
    const catalogueCards = document.querySelectorAll(catalogue.item);
    catalogueCards.forEach((card) => {
      this.cartService.displayInCartFlag(card);
    });
  }

  renderCart(data) {
    const orderCart = new Cart();
    orderCart.init(this.cartService.productsInCart, data, this.router.renderRouteContent.bind(this.router));
  }

  renderFilters(data) {
    const filters = new Filters();
    filters.drawFilters(data);
  }

  renderSinglePage(product, data, render) {
    const singlePage = new SinglePage();
    singlePage.drawSinglePage(product, data, render);


    const addBtn = document.querySelector(page.add);

    this.cartService.displayInCartFlag(addBtn.closest(catalogue.item));

    addBtn.addEventListener('click', () => {
      const itemId = window.location.pathname.split('/product/')[1];
      this.cartService.addProductToCart(itemId);
      this.cartService.displayInCartFlag(addBtn.closest(catalogue.item));
    });
  }

  displayPageContent(contentId) {
    $('html, body').animate({ scrollTop: 0 }, 0);
    const appContentElements = Array.from(this.appContainer.children);
    [...appContentElements].forEach((div) => {
      div.style.display = 'none';
    });
    const pageContent = document.getElementById(contentId);
    pageContent.style.display = 'block';
  }

  renderPageContent(contentId, data) {
    this.displayPageContent(contentId);
    if (!window.location.search) {
      if (contentId === 'js-catalogue-page' && Object.keys(this.checkboxService.filters).length) {
        window.history.pushState(null, null, this.checkboxService.createQuery());
      }
    }
    if (window.location.pathname.includes('product')) {
      this.displaySinglePageContent(data);
    }
    if (window.location.search && window.location.pathname.includes('catalogue')) {
      this.displayFilteredContent(data);
    } else {
      const productCards = Array.from(document.querySelectorAll(catalogue.item));
      productCards.forEach((productCard) => {
        productCard.style.display = 'flex';
      });
    }
  }

  displayFilteredContent(data) {
    const filters = this.checkboxService.getFilters();
    const productCards = Array.from(document.querySelectorAll(catalogue.item));
    [...data].forEach((product) => {
      const isFound = Object.keys(filters).every((key) => {
        if (key === 'price') {
          return Number(filters[key]) >= Number(product[key]);
        }

        return filters[key].includes(String(product[key]));
      });
      const card = productCards
        .find((productCard) => Number(productCard.dataset.id) === Number(product.id));
      card.style.display = isFound ? 'flex' : 'none';
    });
  }

  displaySinglePageContent(data) {
    const productId = window.location.pathname.split('product/')[1];
    const product = data.find((item) => Number(item.id) === Number(productId));

    if (product) {
      this.renderSinglePage(product, data, this.router.renderRouteContent.bind(this.router));
    } else {
      window.history.pushState(null, null, '/404');
      this.router.renderRouteContent(window.location.pathname);
    }
  }

  renderAds() {
    const catalogueAds = document.querySelector(catalogue.adverts);
    const cartPageAds = document.querySelector(cart.adverts);
    renderAdComponent(catalogueAds, catalogue.advertsMax);
    renderAdComponent(cartPageAds, cart.advertsMax);
  }

  renderBackToTopBtn() {
    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `
    <div class="up">
      <img class="up" src="/assets/img/up.png" alt="up">
    </div>`);

    const up = document.querySelector('.up');
    up.addEventListener('click', () => {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  }
}

export default Renderer;
