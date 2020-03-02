class CartObserver {
  constructor() {
    this.cartOrderContainer = document.getElementById('js-order-card');
  }

  initObserver() {
    const nodesToObserve = document.querySelectorAll('.cart__item_input');
    if (nodesToObserve) {
      this.initCartCalculator();
      this.calculateTotal();
    }
  }

  initCartCalculator() {
    const forms = document.querySelectorAll('.cart__item_input');
    const deleteBtns = document.querySelectorAll('.cart__item_delete');

    forms.forEach((form) => {
      form.addEventListener('change', () => this.calculateTotal());
    });

    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.deleteCardOrderNote(e.target.dataset.index);
        this.calculateTotal();
      });
    });
  }

  calculateTotal() {
    const total = document.querySelector('.cartPage__total');

    const cartItems = document.querySelectorAll('.cart__item_wrapper');

    if (cartItems.length) {
      const priceTotal = Array.from(cartItems).reduce((totalSum, currentItem) => {
        const flag = currentItem.querySelector('.cart__item_choose');
        const { id } = currentItem.dataset;

        if (flag.checked) {
          const name = currentItem.querySelector('.cart__item_name').textContent;
          const price = currentItem.querySelector('.cart__item_price').dataset.value;
          const quantity = currentItem.querySelector('.cart__item_quantity').value;
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
    const cartDetails = document.querySelector('.cartPage__details');
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

    details.textContent = `${name} : ${quantity}`;
    cartDetails.appendChild(details);
  }

  deleteCardOrderNote(id) {
    const cartDetails = document.querySelector('.cartPage__details');
    const found = Array.from(cartDetails.children)
      .find((item) => Number(item.id) === Number(id));

    if (found) {
      found.remove();
    }
  }
}

export default CartObserver;
