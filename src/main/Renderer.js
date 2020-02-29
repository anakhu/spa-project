import Navbar from '../components/layoutComponents/navbar.js';
import Catalogue from '../components/catalogueComponents/catalogue.js';
import Filters from '../components/catalogueComponents/filters.js';
import Cart from '../components/cartComponents/cart.js';
import OrderCard from '../components/cartComponents/order.js';
import SinglePage from '../components/singlePageComponents/singlePage';
import LoginForm from '../components/authComponents/login.js';


class Renderer {
  constructor(router, checkboxService, cartService, cartObsever) {
    this.router = router;
    this.checkboxService = checkboxService;
    this.cartService = cartService;
    this.cartObserver = cartObsever;
  }

  initApp(data) {
    const navbar = new Navbar(this.router.renderRouteContent.bind(this.router));
    const catalogue = new Catalogue(this.router.renderRouteContent.bind(this.router));
    const filter = new Filters();
    const singlePage = new SinglePage();
    const loginForm = new LoginForm();

    filter.drawFilters(data);
    catalogue.renderCatalogue(data);
    loginForm.initAuthForms();

    this.renderCart(data);
    this.renderOrderCard();

    const appContent = document.getElementById('appContent-wrapper');
    appContent.style.display = 'block';

    this.cartObserver.initObserver();
  }

  renderCart(data) {
    const cart = new Cart();
    cart.init(this.cartService.productsInCart, data);
  }

  renderOrderCard() {
    const orderCard = new OrderCard();
    orderCard.drawOrderCard();
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

  displayPageContent(contentId, data = null) {
    if (!window.location.search) {
      if (contentId === 'js-catalogue-page' && Object.keys(this.checkboxService.filters).length) {
        window.history.pushState(null, null, this.checkboxService.createQuery());
      }
    }

    const appContent = document.getElementById('appContent-wrapper');
    const appContentElements = Array.from(appContent.children);

    [...appContentElements].forEach((div) => {
      div.style.display = 'none';
    });

    if (window.location.pathname.includes('product')) {
      this.displaySinglePageContent(data);
    }

    if (contentId) {
      const pageContent = document.getElementById(contentId);
      pageContent.style.display = 'block';
    }

    if (window.location.search) {
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

    data.forEach((product) => {
      const isFound = Object.keys(filters).every((key) => {
        if (key === 'price') {
          return Number(filters[key]) >= Number(product[key]);
        }

        return filters[key].includes(String(product[key]));
      });
      const card = productCards.find((productCard) => Number(productCard.dataset.id) === Number(product.id));
      if (isFound) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  displaySinglePageContent(data) {
    const productId = window.location.pathname.split('product/')[1];
    const product = data.find((item) => item.id === Number(productId));

    if (product) {
      this.renderSinglePage(product);
    }
  }
}

export default Renderer;
