import { CART_ITEM_TEMPLATE } from '../templates.js';
import CONFIG from '../../config.js';

const { cart } = CONFIG.selectors;

class Cart {
  constructor() {
    this.cartPageContent = document.querySelector(cart.content);
    this.cartWrapper = document.querySelector(cart.wrapper);

    if (Cart.instance) {
      return Cart.instance;
    }

    Cart.instance = this;
  }

  init(data, products) {
    this.resetCart();
    if (data) {
      Object.keys(data).forEach((id) => this.makeCartItemCard(id, data[id], products));
    }
    this.cartPageContent.appendChild(this.cartWrapper);
  }

  makeCartItemCard(productId, value, products) {
    const product = products.find((item) => String(item.id) === productId);

    if (product) {
      const {
        id, numberAvailable, image, name, price,
      } = product;
      this.cartWrapper.insertAdjacentHTML('beforeend', CART_ITEM_TEMPLATE(id, value, numberAvailable, image, name, price));
    }
  }

  resetCart() {
    const cartItem = document.querySelectorAll(cart.item);
    cartItem.forEach((item) => item.remove());
  }
}

export default Cart;
