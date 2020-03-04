import CONFIG from '../config.js';
import Observable from './Observable.js';

const { cart, catalogue } = CONFIG.selectors;

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
    this.carts = document.querySelectorAll(catalogue.add);
    this.carts.forEach((cartItem) => {
      cartItem.addEventListener('click', (e) => {
        const itemId = e.target.closest(catalogue.item).dataset.id;
        this.addProductToCart(itemId);
      });
    });
    this.initProductCart();
    this.initCartInputHadlers();
  }

  initProductCart() {
    this.productsInCart = JSON.parse(window.localStorage.getItem('products')) || {};
  }

  updateLocalStorage() {
    window.localStorage.setItem('products', JSON.stringify(this.productsInCart));
    this.observable.next(JSON.stringify(this.productsInCart));
  }


  deleteProductFromCart(id) {
    const cartItems = document.querySelectorAll(cart.item);
    const itemToDelete = Array.from(cartItems).find((item) => Number(item.dataset.id) === Number(id));
    if (itemToDelete) {
      delete this.productsInCart[id];
      itemToDelete.remove();
      this.updateLocalStorage();
    }
  }

  addProductToCart(itemId) {
    if (!Object.prototype.hasOwnProperty.call(this.productsInCart, itemId)) {
      this.productsInCart[itemId] = 1;
    } else {
      this.productsInCart[itemId] += 1;
    }
    this.updateLocalStorage();
  }

  initCartInputHadlers() {
    this.initDeleteButtons();
    this.initCartNumberInput();
  }


  initDeleteButtons() {
    const deleteButtons = document.querySelectorAll(cart.delete);
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const { id } = e.target.dataset;
        this.deleteProductFromCart(id);
      });
    });
  }

  initCartNumberInput() {
    const numberInputs = document.querySelectorAll(cart.quantity);
    numberInputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        if (Number(e.target.value) < 1) {
          e.target.value = 1;
        }
        if (Number(e.target.value) > Number(e.target.max)) {
          e.target.value = e.target.max;
        }
        const { id } = e.target.dataset;
        this.productsInCart[id] = Number(e.target.value);

        this.updateLocalStorage();
      });
    });
  }
}

export default CartService;
