import { CART_ITEM_TEMPLATE } from '../templates.js';

class Cart {
  constructor() {
    this.cartPageContent = document.querySelector('.cartPage__content');
    this.cartWrapper = document.querySelector('.cartPage__cart_wrapper');

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
    const cartItem = document.querySelectorAll('.cart__item_wrapper');
    cartItem.forEach((item) => item.remove());
  }
}

export default Cart;
