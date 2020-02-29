class OrderCard {
  constructor() {
    this.orderCardContainer = document.getElementById('js-order-card');
  }

  drawOrderCard() {
    this.makeCardTemplate();
  }

  makeCardTemplate() {
    this.orderCardContainer.insertAdjacentHTML('beforeend',
      `<div class="cartPage__order_wrapper">
        <div>
          <h3 class="cart__details_label">Total</h3>
          <div class="cartPage__total">No items chosen</div>
        </div>
        <div>
          <h3 class="cart__details_label">Order details</h3>
          <div class="cartPage__details"></div>
        </div>
      </div>
      <div>
          <button class="cartPage__order_buy">Buy</button>
      </div>`);
  }
}

export default OrderCard;
