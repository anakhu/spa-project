class Cart {
  constructor() {
    this.cartPageContent = document.querySelector('.cartPage__content');
    this.cartWrapper = document.querySelector('.cartPage__cart_wrapper');
    this.cartTotal = document.querySelector('.cartPage__total');

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

      const cartItem = document.createElement('div');
      cartItem.setAttribute('class', 'cart__item_wrapper');
      cartItem.dataset.id = id;


      cartItem.insertAdjacentHTML('beforeend',
        `<form class="cart__item_input">
          <input class="cart__item_quantity" data-id="${id}" type="number" value="${value}" min="1" max="${numberAvailable}"/>
          <input type="checkbox" class="cart__item_choose"/>
        </form>
          <div class="cart__item_details">
          <img class="cart__item_image" src="/${image}" />
          <h5 class="cart__item_name">${name}</h5>
          <p class="cart__item_price" data-value="${price}">Price: ${price}$</p>
        </div>
          <button class="cart__item_delete" data-index="${id}">Delete</button>
         `);
      this.cartWrapper.appendChild(cartItem);
    }
  }

  resetCart() {
    const cartItem = document.querySelectorAll('.cart__item_wrapper');
    cartItem.forEach((item) => item.remove());
    this.cartTotal.textContent = '';
  }
}

export default Cart;
