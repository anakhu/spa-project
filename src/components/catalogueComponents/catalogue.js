class Catalogue {
  constructor() {
    this.catalogue = document.getElementById('js-catalogue');
  }

  renderCatalogue(data) {
    [...data].forEach((product) => {
      this.renderCatalogueItem(product);
    });
  }

  renderCatalogueItem(product) {
    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'catalogue__item');
    productCard.setAttribute('data-id', product.id);

    const productCardImageWrapper = document.createElement('div');
    productCardImageWrapper.setAttribute('class', 'catalogue__item_imgwrap');
    productCardImageWrapper.insertAdjacentHTML('beforeend', `<img class="catalogue__item_photo" src=${product.image}>`);
    productCard.appendChild(productCardImageWrapper);

    productCard.insertAdjacentHTML('beforeend', '<span class="catalogue__item_cart"><img src="assets/img/126083.png"></span>');

    productCard.insertAdjacentHTML('beforeend',
      `<div class="catalogue__item_info">
          <p>${product.name}</p>
          <p>${product.price}$</p>
      </div>`);

    this.catalogue.appendChild(productCard);
  }
}

export default Catalogue;
