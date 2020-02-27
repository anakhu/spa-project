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
    this.carts = document.querySelectorAll('.catalogue__item_add');
    this.carts.forEach((cart) => {
      cart.addEventListener('click', (e) => {
        const itemId = e.target.closest('.catalogue__item').dataset.id;
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

  deleteProductFromCart(e) {
    const { index } = e.target.dataset;
    delete this.productsInCart[index];
    e.target.closest('.cart__item_wrapper').remove();
    this.updateLocalStorage();
    this.calculateTotal();
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
    this.initCartCalculator();
  }


  initDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.cart__item_delete');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (e) => this.deleteProductFromCart(e));
    });
  }

  initCartNumberInput() {
    const numberInputs = document.querySelectorAll('.cart__item_quantity');
    numberInputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        if (Number(e.target.value) < 1) {
          e.target.value = 1;
        }
        if (Number(e.target.value) > Number(e.target.max)) {
          e.target.value = e.target.max;
        }
        const { id } = e.target.dataset;
        this.productsInCart[id] = e.target.value;

        this.updateLocalStorage();
      });
    });
  }

  initCartCalculator() {
    const forms = document.querySelectorAll('.cart__item_input');

    forms.forEach((form) => {
      form.addEventListener('change', () => this.calculateTotal());
    });
  }

  calculateTotal() {
    const total = document.querySelector('.cartPage__total');

    const cartItems = document.querySelectorAll('.cart__item_wrapper');

    const priceTotal = Array.from(cartItems).reduce((totalSum, currentItem) => {
      const flag = currentItem.querySelector('.cart__item_choose');
      if (flag.checked) {
        const price = currentItem.querySelector('.cart__item_price').dataset.value;
        const quantity = currentItem.querySelector('.cart__item_quantity').value;
        totalSum += price * quantity;
      }

      return totalSum;
    }, 0);

    total.textContent = priceTotal > 0 ? priceTotal : '';
  }
}

export default CartService;
