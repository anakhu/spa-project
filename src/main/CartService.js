import Observable from './Observable.js';

class CartService {
  constructor() {
    this.carts = [];
    this.productsInCart = {};
    this.observable = new Observable();
    this.init();
  }

  subscribe(fn) {
    this.observable.subscribe(fn);
  }

  init() {
    this.carts = document.querySelectorAll('.catalogue__item_cart img');
    this.carts.forEach((cart) => {
      cart.addEventListener('click', (e) => {
        const itemId = e.target.closest('.catalogue__item').dataset.id;
        this.addProductToCart(itemId);
      });
    });
    this.initProductCart();
    this.initDeleteButtons();
  }

  initProductCart() {
    this.productsInCart = JSON.parse(window.localStorage.getItem('products')) || {};
  }

  updateLocalStorage() {
    window.localStorage.setItem('products', JSON.stringify(this.productsInCart));
    this.observable.next(JSON.stringify(this.productsInCart));
  }

  initDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.cart__item_delete');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (e) => this.deleteProductFromCart(e));
    });
  }

  deleteProductFromCart(e) {
    const { index } = e.target.dataset;
    delete this.productsInCart[index];
    this.updateLocalStorage();
  }

  addProductToCart(itemId) {
    if (!Object.prototype.hasOwnProperty.call(this.productsInCart, itemId)) {
      this.productsInCart[itemId] = 1;
    } else {
      this.productsInCart[itemId] += 1;
    }
    this.updateLocalStorage();
  }
}

export default CartService;
