import CONFIG from '../config.js';

const { cart } = CONFIG.selectors;

class CartObserver {
  constructor(router) {
    this.router = router;
    this.cartOrderContainer = document.querySelector(cart.order);
    this.orderMesssages = null;
  }

  initObserver() {
    const nodesToObserve = document.querySelectorAll(cart.input);
    if (nodesToObserve) {
      this.initCartCalculator();
      this.calculateTotal();
    }
  }

  initCartCalculator() {
    const forms = document.querySelectorAll(cart.input);
    const deleteBtns = document.querySelectorAll(cart.delete);

    forms.forEach((form) => {
      form.addEventListener('change', () => this.calculateTotal());
    });

    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.deleteCardOrderNote(e.target.dataset.id);
        this.calculateTotal();
      });
    });
  }

  calculateTotal() {
    const total = document.querySelector(cart.total);

    const cartItems = document.querySelectorAll(cart.item);

    if (cartItems.length) {
      const priceTotal = Array.from(cartItems).reduce((totalSum, currentItem) => {
        const flag = currentItem.querySelector(cart.choose);
        const { id } = currentItem.dataset;

        if (flag.checked) {
          const name = currentItem.querySelector(cart.name).textContent;
          const price = currentItem.querySelector(cart.price).dataset.value;
          const quantity = currentItem.querySelector(cart.quantity).value;
          totalSum += price * quantity;
          this.renderCartOrderDetails(id, name, quantity);
        } else {
          this.deleteCardOrderNote(id);
        }

        return totalSum;
      }, 0);

      total.textContent = priceTotal > 0 ? priceTotal.toFixed(2) : 'No items chosen';
    } else {
      total.textContent = 'No items chosen';
    }
  }

  renderCartOrderDetails(id, name, quantity) {
    const cartDetails = document.querySelector(cart.details);
    if (cartDetails.children) {
      const found = Array.from(cartDetails.children)
        .find((item) => Number(item.id) === Number(id));

      if (found) {
        found.textContent = `${name} : ${quantity}`;

        return;
      }
    }
    const details = document.createElement('div');
    details.setAttribute('id', id);
    details.dataset.value = quantity;

    details.textContent = `${name} : ${quantity}`;
    cartDetails.appendChild(details);
  }

  deleteCardOrderNote(id) {
    const cartDetails = document.querySelector(cart.details);
    const found = Array.from(cartDetails.children)
      .find((item) => Number(item.id) === Number(id));

    if (found) {
      found.remove();
    }
  }
}

export default CartObserver;
