export const RANDOM_PRODUCT_TEMPLATE = (product) => `
  <div class="catalogue__item" data-id="${product.id}">
    <div class="catalogue__item_imgwrap">
      <img class="catalogue__item_photo" src=/${product.image}>
      <h5 class="catalogue__item_name">${product.name}</h5>
    </div>
    <div class="catalogue__item_info">
      <p class="catalogue__item_price">${product.price}$</p>
    </div>
  </div>`;
