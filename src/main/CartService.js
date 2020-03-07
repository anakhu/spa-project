import $ from 'jquery';
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
    const addButtons = document.querySelectorAll(catalogue.add);
    this.initAddButtons(addButtons);
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

  initAddButtons(addButtons) {
    addButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const itemId = e.target.closest(catalogue.item).dataset.id;
        this.addProductToCart(itemId);
        this.displayInCartFlag(e.target.closest(catalogue.item));
      });
    });
  }


  initDeleteButtons() {
    const deleteButtons = document.querySelectorAll(cart.delete);
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const { id } = e.target.dataset;
        this.deleteProductFromCart(id);
        this.displayInCartFlag(null, id);
        this.displayEmptyCartContent();
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

  displayInCartFlag(card = null, itemId = null) {
    if (card) {
      const { id } = card.dataset;

      if (this.productsInCart[id]) {
        $(card).find('.ok').css('opacity', '1');
      } else {
        $(card).find('.ok').css('opacity', '0');
      }
    }

    if (itemId) {
      const calalogueCards = document.querySelectorAll(catalogue.item);
      const targetCard = Array.from(calalogueCards)
        .find((item) => Number(item.dataset.id) === Number(itemId));
      if (targetCard) {
        $(targetCard).find('.ok').css('opacity', '0');
      }
    }
  }

  displayEmptyCartContent() {
    const cartItems = document.querySelectorAll(cart.item);
    if (!cartItems.length) {
      $(cart.linkToShop).css('display', 'block');
    }
  }
}

export default CartService;
