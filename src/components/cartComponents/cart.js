import $ from 'jquery';
import { CART_ITEM_TEMPLATE, CART_LINK_TEMPLATE } from './cart-template.js';
import CONFIG from '../../config.js';

const { cart } = CONFIG.selectors;
const { route } = CONFIG.routes.cataloguePage;

class Cart {
  constructor() {
    this.cartPageContent = document.querySelector(cart.content);
    this.cartWrapper = document.querySelector(cart.wrapper);

    if (Cart.instance) {
      return Cart.instance;
    }

    Cart.instance = this;
  }

  init(data, products, render) {
    this.resetCart();

    const shopLink = document.querySelector(cart.linkToShop);
    if (!shopLink) {
      this.renderShopLink(render);
    }

    const productsInCart = Object.keys(data);
    if (productsInCart.length) {
      productsInCart.forEach((id) => this.makeCartItemCard(id, data[id], products));
      $(cart.linkToShop).css('display', 'none');
    } else {
      $(cart.linkToShop).css('display', 'block');
    }

    this.cartPageContent.appendChild(this.cartWrapper);
  }

  makeCartItemCard(productId, value, products) {
    const product = products
      .find((item) => String(item.id) === String(productId));

    if (product) {
      this.cartWrapper.insertAdjacentHTML('beforeend',
        CART_ITEM_TEMPLATE(product, value));
    }
  }

  renderShopLink(render) {
    this.cartWrapper.insertAdjacentHTML('beforeend', CART_LINK_TEMPLATE());
    const linkToShop = document.querySelector(cart.linkToShop);

    linkToShop.addEventListener('click', () => {
      window.history.pushState(null, null, `/${route}`);
      render(window.location.pathname);
    });
  }


  resetCart() {
    const cartItemWrapper = document.querySelectorAll(cart.item);
    cartItemWrapper.forEach((item) => item.remove());
  }
}

export default Cart;
