class Catalogue {
  constructor(render) {
    this.catalogue = document.getElementById('js-catalogue');
    this.render = render;
  }

  renderCatalogue(data) {
    [...data].forEach((product) => {
      this.renderCatalogueItem(product);
    });
  }

  renderCatalogueItem(product) {
    const {
      id, image, name, price,
    } = product;

    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'catalogue__item');
    productCard.setAttribute('data-id', id);

    const productCardImageWrapper = document.createElement('div');
    productCardImageWrapper.setAttribute('class', 'catalogue__item_imgwrap');
    productCardImageWrapper.insertAdjacentHTML('beforeend',
      `<img class="catalogue__item_photo" src=/${image}>
        <p class="catalogue__item_name">${name}</p>
    `);

    productCard.appendChild(productCardImageWrapper);


    productCard.insertAdjacentHTML('beforeend',
      `<div class="catalogue__item_info">
        <p class="catalogue__item_price">${price}$</p>
        <button class="catalogue__item_add">Add to cart</button>
      </div>
      `);

    this.catalogue.appendChild(productCard);

    productCardImageWrapper.addEventListener('click', () => {
      window.history.pushState(null, null, `/product/${id}`);
      this.render(window.location.pathname);
    });
  }
}

export default Catalogue;
