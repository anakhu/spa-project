class SinglePage {
  constructor() {
    this.singlePageContainer = document.getElementById('js-single-page');
    if (SinglePage.instance) {
      return SinglePage.instance;
    }

    SinglePage.instance = this;
  }

  drawSinglePage(product) {
    if (product) {
      this.resetPage();
      const {
        brand, category, description, id, image, manufacturer, name, price, volume,
      } = product;

      const spiritType = product['spirit type'];
      const pack = product['package'];

      const singlePageContent = document.createElement('div');
      singlePageContent.setAttribute('class', 'singlePage__content');
      singlePageContent.insertAdjacentHTML('beforeend',
        `
        <div class="singlePage__content_main"> 
          <div class="singlePage__img_container">
            <img class="singlePage_content_img" src="/${image}">
          </div>
          <h3>${name}</h3>
          <h3>${price}$</h3>
          <div class="singlePage__item_add">
            <button>Add to cart</button>
          </div>
        </div>

        <div class="singlePage_content_info">
          <div class="singlePage_content_base">
            <p><b>Brand</b>: ${brand}</p>
            <p><b>Manufacturer</b>: ${manufacturer}</p>
            <p><b>Volume</b>: ${volume}</p>
          </div>
          <div class="singlePage_content_desc">
            <p>${description}</p>
          </div>
          <div class="singlePage_content_spec">
            <p><b>Spirit type</b>: ${spiritType}</p>
            <p><b>Category</b>: ${category}</p>
            <p><b>Package</b>: ${pack}</p>
          </div>
        </div>
        `);

      this.singlePageContainer.appendChild(singlePageContent);
    }
  }

  resetPage() {
    const pageContent = document.querySelector('.singlePage__content');
    if (pageContent) {
      pageContent.remove();
    }
  }
}

export default SinglePage;
