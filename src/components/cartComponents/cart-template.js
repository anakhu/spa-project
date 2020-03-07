export const CART_ITEM_TEMPLATE = (product, value) => `
<div class="cart__item_wrapper" data-id="${product.id}">
  <div class="cart__item_details">
    <img class="cart__item_image" src="/${product.image}" />
    <h5 class="cart__item_name">${product.name}</h5>
    <p class="cart__item_price" data-value="${product.price}">Price: ${product.price}$</p>
  </div>
  <form class="cart__item_input">
    <input type="checkbox" class="cart__item_choose"/>
    <input class="cart__item_quantity" 
      data-id="${product.id}" 
      type="number" value="${value}"
      min="1" max="${product.numberAvailable}"/>
  </form>
  <button class="cart__item_delete" data-id="${product.id}">Delete</button>
  </div>`;

export const CART_LINK_TEMPLATE = () => `
  <ul>
    <li class="cartPage__link_catalogue">
      <h5>Your cart is empty!</h5>
      <img src="/assets/img/homepage/shop.png" />
      <h5>Shop now!</h5>
    </li>
  </ul>`;
