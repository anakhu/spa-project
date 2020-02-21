class Cart {
  constructor() {
    this.cartPage = document.getElementById('js-cart-page');
    this.cartItemsContainer = null;

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
  }

  makeCartItemCard(productId, value, products) {
    const product = products.find((item) => String(item.id) === productId);

    if (product) {
      const cartItem = document.createElement('div');
      cartItem.setAttribute('class', 'cart__item_wrapper');
      cartItem.insertAdjacentHTML('beforeend',
        `<input type="checkbox" class="cart__item_choose"/>
         <h5 class="cart__item_name">${product.name}</h5>
         <img class="cart__item_image" src="${product.image}" />
         <p>Price: ${product.price}$</p>
         <input class="cart__item_quantity" type="number" value="${value}" min="1" max="${product.numberAvailable}">
         <button class="cart__item_delete" data-index="${product.id}">Delete</button>
         `);
      this.cartPage.appendChild(cartItem);
    }
  }

  resetCart() {
    const cartItem = document.querySelectorAll('.cart__item_wrapper');
    cartItem.forEach((item) => item.remove());
  }
}

export default Cart;
