/* eslint-disable import/prefer-default-export */
export const FORM_TEMPLATE = () => `
  <div class="auth__form_wrapper">
  <ul>
    <li id="js-sign-in-link">Sign In</li>
    <li id="js-sign-up-link">Sign Up</li>
  </ul>
  <form id="js-sign-in-form" novalidate>
    <label for="email">Email:</label>
    <input type="email" name="email">
    <p class="email-error"></p>
    <label for="password">Password:</label>
    <input type="password" name="password">
    <p class="password-error"></p>
    <button type="submit">Sign in</button>
  </form>
  <form id="js-sign-up-form" novalidate style="display: none;">
    <label for="namel">Name:</label>
    <input type="text" name="name">
    <p class="name-error"></p>
    <label for="email">Email:</label>
    <input type="email" name="email">
    <p class="email-error"></p>
    <label for="password">Password:</label>
    <input type="password" name="password">
    <p class="password-error"></p>
    <button type="submit">Sign Up</button>
  </form>
  </div>`;

export const CARD_ORDER_TEMPLATE = () => `
<div class="cartPage__order_wrapper">
<div class="cartPage__user_info">
  <h3>User Info</h3>
  <div class="cartPage__user_data"></div>
</div>
<div>
  <h3>Total</h3>
  <div class="cartPage__total">No items chosen</div>
</div>
<div>
  <h3>Order details</h3>
  <div class="cartPage__details"></div>
</div>
</div>
<div>
  <button class="cartPage__order_buy">Buy</button>
</div>`;

export const CATALOGUE_ITEM_TEMPLATE = (id, image, name, price) => `
<div class="catalogue__item" data-id="${id}">
  <div class="catalogue__item_imgwrap">
    <img class="catalogue__item_photo" src=/${image}>
    <p class="catalogue__item_name">${name}</p>
  </div>
  <div class="catalogue__item_info">
    <p class="catalogue__item_price">${price}$</p>
    <button class="catalogue__item_add">Add to cart</button>
  </div>
</div>`;

export const PRICE_INPUT_TEMPLATE = (min, max) => `
  <div class="filter-group-label">
    <h3>PRICE:</h3>
    <div class="filter__group_content">
      <span>${min}</span>
      <input type="range" class="filter__group_price" name="price" 
        value="${max}" min="${min}" max="${max}">
      <span>${max}</span>
      <div class="filter__price_current"><div> 
    </div>
  </div>`;

export const CHECKBOX_TEMPLATE = (filterName, filterValue) => `
  <div class="filter__group_checkbox" value=${filterValue}>
    <label for="${filterValue}">${filterValue}</label>
    <input type="checkbox" name="${filterName}" value="${filterValue}" />
  </div>`;

export const CART_ITEM_TEMPLATE = (id, value, numberAvailable, image, name, price) => `
<div class="cart__item_wrapper" data-id="${id}">
  <form class="cart__item_input">
    <input class="cart__item_quantity" data-id="${id}" type="number" value="${value}" min="1" max="${numberAvailable}"/>
    <input type="checkbox" class="cart__item_choose"/>
  </form>
  <div class="cart__item_details">
    <img class="cart__item_image" src="/${image}" />
    <h5 class="cart__item_name">${name}</h5>
    <p class="cart__item_price" data-value="${price}">Price: ${price}$</p>
  </div>
    <button class="cart__item_delete" data-index="${id}">Delete</button>
  </div>`;

export const NAVBAR_TEMPLATE = () => `
<div class="nav__wrapper">
  <ul>
    <li class="nav__link_home">Home</li>
    <li class="nav__link_about">About</li>
    <li class="nav__link_catalogue">Catalogue</li>
    <li class="nav__link_contact">Contact</li>
  </ul>
  <ul>
    <li class="nav__link_login">Log in</li>
    <li class="nav__link_logout">Log out</li>
    <li><img class="nav__link_cart" src="/assets/img/126083.png"></li>
  </ul>
</div>`;

export const SINGLE_PAGE_TEMPLATE = (product) => `
  <div class="singlePage__content">
    <div class="singlePage__content_main"> 
    <div class="singlePage__img_container">
      <img class="singlePage_content_img" src="/${product.image}">
    </div>
    <h3>${product.name}</h3>
    <h3>${product.price}$</h3>
    <div class="singlePage__item_add">
      <button>Add to cart</button>
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
`;
