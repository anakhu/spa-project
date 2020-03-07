export const CATALOGUE_ITEM_TEMPLATE = (product) => `
<div class="catalogue__item" data-id="${product.id}">
  <img class="ok" src="/assets/img/done.png" />
  <div class="catalogue__item_imgwrap">
    <img class="catalogue__item_photo" src=/${product.image}>
    <h5 class="catalogue__item_name">${product.name}</h5>
  </div>
  <div class="catalogue__item_info">
    <p class="catalogue__item_price">${product.price}$</p>
    <button class="catalogue__item_add">Add to cart</button>
  </div>
</div>`;
