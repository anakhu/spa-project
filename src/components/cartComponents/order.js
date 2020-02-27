class OrderCard {

  constructor() {
    this.orderCardContainer = document.querySelector('.cartPage__cart_order');
  }

  drawOrderCard() {
    const orderCardWrapper = document.createElement('div');
    orderCardWrapper.setAttribute('class', 'order__wrapper');
    orderCardWrapper.textContent = 'Some content';
    this.orderCardContainer.appendChild(orderCardWrapper);
  }

  // drawOrderCardContent(data) {
  //   data.forEach
  // }
}

export default OrderCard;
