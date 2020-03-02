import renderNavbar from '../components/layoutComponents/navbar.js';
import renderHomePage from '../components/homePageComponents/homepage.js';
import renderCatalogue from '../components/catalogueComponents/catalogue.js';
import Filters from '../components/catalogueComponents/filters.js';
import Cart from '../components/cartComponents/cart.js';
import renderOrderCard from '../components/cartComponents/order.js';
import SinglePage from '../components/singlePageComponents/singlePage';
import renderAuthForms from '../components/authComponents/login.js';


class Renderer {
  constructor(router, checkboxService, cartService, cartObserver) {
    this.appContainer = document.getElementById('appContent-wrapper');
    this.router = router;
    this.checkboxService = checkboxService;
    this.cartService = cartService;
    this.cartObserver = cartObserver;
  }

  initApp(data) {
    renderHomePage(this.router.renderRouteContent.bind(this.router));
    renderNavbar(this.router.renderRouteContent.bind(this.router));
    renderCatalogue(data, this.router.renderRouteContent.bind(this.router));
    this.renderCart(data);
    this.renderFilters(data);
    renderOrderCard();
    renderAuthForms();
    this.appContainer.style.display = 'block';
  }

  renderCart(data) {
    const cart = new Cart();
    cart.init(this.cartService.productsInCart, data);
  }

  renderFilters(data) {
    const filters = new Filters();
    filters.drawFilters(data);
  }

  renderSinglePage(data) {
    const singlePage = new SinglePage();
    singlePage.drawSinglePage(data);

    const addBtn = document.querySelector('.singlePage__item_add');
    addBtn.addEventListener('click', () => {
      const itemId = window.location.pathname.split('/product/')[1];
      this.cartService.addProductToCart(itemId);
    });
  }

  displayPageContent(contentId) {
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
      console.log('includes product');
      this.displaySinglePageContent(data);
    }
    if (window.location.search && window.location.pathname.includes('catalogue')) {
      this.displayFilteredContent(data);
    } else {
      const productCards = Array.from(document.querySelectorAll('.catalogue__item'));
      productCards.forEach((productCard) => {
        productCard.style.display = 'flex';
      });
    }
  }

  displayFilteredContent(data) {
    const filters = this.checkboxService.getFilters();
    const productCards = Array.from(document.querySelectorAll('.catalogue__item'));
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
      this.renderSinglePage(product);
    } else {
      window.history.pushState(null, null, '/404');
      this.router.renderRouteContent(window.location.pathname);
    }
  }
}

export default Renderer;
