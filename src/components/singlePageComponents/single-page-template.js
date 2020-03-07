export const SINGLE_PAGE_TEMPLATE = (product) => `
  <div class="singlePage__content">
  <div class="singlePage__main">
    <div class="singlePage__content_main">
      <div class="catalogue__item" data-id="${product.id}">
        <div class="catalogue__item_imgwrap">
          <img class="ok" src="/assets/img/done.png" />
          <img class="catalogue__item_photo" src=/${product.image}>
          <h5 class="catalogue__item_name">${product.name}</h5>
        </div>
      <div class="catalogue__item_info">
        <p class="catalogue__item_price">${product.price}$</p>
        <button class="singlePage__item_add">Add to cart</button>
      </div>
    </div>
  </div>

<div class="singlePage_content_info">
  <div class="singlePage_content_base">
    <p><b>Brand</b>: ${product.brand}</p>
    <p><b>Manufacturer</b>: ${product.manufacturer}</p>
    <p><b>Volume</b>: ${product.volume}</p>
  </div>
  <div class="singlePage_content_desc">
    <p>${product.description}</p>
  </div>
  <div class="singlePage_content_spec">
    <p><b>Spirit type</b>: ${product['spirit type']}</p>
    <p><b>Category</b>: ${product.category}</p>
    <p><b>Package</b>: ${product.package}</p>
  </div>
</div>
  </div>
    
    <h3>People also buy</h3>
    <div class="singlePage__offer"></div>
  </div>
`;
