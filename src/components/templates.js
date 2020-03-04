/* eslint-disable import/prefer-default-export */
export const FORM_TEMPLATE = () => `
  <div class="auth__form_wrapper">
  <ul>
    <li id="js-sign-in-link">Sign In</li>
    <li id="js-sign-up-link">Sign Up</li>
  </ul>
  <p class="auth__form_error"></p>
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
  <p class="cartPage__order_message"></p>
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
  <button class="cartPage__order_buy">Buy</button>
</div>`;

export const CATALOGUE_ITEM_TEMPLATE = (id, image, name, price) => `
<div class="catalogue__item" data-id="${id}">
  <div class="catalogue__item_imgwrap">
    <img class="catalogue__item_photo" src=/${image}>
    <h5 class="catalogue__item_name">${name}</h5>
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
  <div class="cart__item_details">
    <img class="cart__item_image" src="/${image}" />
    <h5 class="cart__item_name">${name}</h5>
    <p class="cart__item_price" data-value="${price}">Price: ${price}$</p>
  </div>
  <form class="cart__item_input">
    <input type="checkbox" class="cart__item_choose"/>
    <input class="cart__item_quantity" data-id="${id}" type="number" value="${value}" min="1" max="${numberAvailable}"/>
  </form>
  <button class="cart__item_delete" data-id="${id}">Delete</button>
  </div>`;

export const NAVBAR_TEMPLATE = () => `
<div class="nav__wrapper">
  <ul>
    <li class="nav__link_home">Home</li>
    <li class="nav__link_about">About</li>
    <li class="nav__link_catalogue">Catalogue</li>
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
    <h5>${product.name}</h5>
    <p>${product.price}$</p>
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

export const HOMEPAGE_TEMPLATE = () => `
  <div class="lead__banner">
    <img src="/assets/img/homepage/lead-banner.jpg" />
    <div class="banner__content">
      <div class="wrapper">
        <span class="title">Only trusted suppliers</span>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  </div>
  <section class="homePage__services">
      <div class="wrapper">
      <h1>Our services</h1>
        <ul>
          <li class="homePage__link_about">
            <img src="/assets/img/homepage/about.png" />
            <p>About us</p>
          </li>
          <li class="homePage__link_catalogue">
            <img src="/assets/img/homepage/shop.png" />
            <p>Shop now</p>
          </li>
          <li class="homePage__link_login">
            <img src="/assets/img/homepage/join.png" />
            <p>Join</p>
          </li>
        </ul>
      </div>
    </section>
  <div class="second__banner">
    <img src="/assets/img/homepage/second-banner.jpg" />
    <div class="banner__content">
       <div class="wrapper">
        <span class="title">Excellent service</span>
        <span class="title">Fast delivery</span>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  </div>
  <section class="homePage__products">
    <div class="wrapper">
      <h1>Popular brands</h1>
      <ul>
        <li><img src="/assets/img/homepage/ballantines.jpg" name="brand" data-value="Ballantine's" /></li>
        <li><img src="/assets/img/homepage/black-velvet.jpg" name="brand" data-value="Black Velvet" /></li>
        <li><img src="/assets/img/homepage/jack-daniels.jpg" name="brand" data-value="Jack Daniel's" /></li>
        <li><img src="/assets/img/homepage/jameson.jpg" name="brand" data-value="Jameson"/></li>
        <li><img src="/assets/img/homepage/lauders.jpg" name="brand" data-value="Lauder's" /></li>
        <li><img src="/assets/img/homepage/jim-beam.jpg" name="brand" data-value="Jim Beam"/></li>
        <li><img src="/assets/img/homepage/jagermeister.jpg" name="brand" data-value="Jagermeister"/></li>
      </ul>
    </div>
  </section>`;


export const ABOUT_PAGE_TEMPLATE = () => `
  <div class="second__banner">
    <img src="/assets/img/about/about.jpg" />
    <div class="banner__content">
      <div class="wrapper">
        <span class="title">Another lorem!</span>
      </div>
    </div>
  </div>
  <section class="aboutPage__content">
    <h1>About us</h1>
    <div>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
     atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
      similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
       optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
        omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe 
        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
         ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    </div>
  </section>
  <section class="aboutPage__articles">
    <div class="wrapper">
      <h1>Popular drinks</h1>
      <ul>
        <li>
          <img src="/assets/img/about/wine.jpg"></img>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </li>
        <li>
          <img src="/assets/img/about/whiskey.png"></img>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </li>
        <li>
          <img src="/assets/img/about/martini.jpg"></img>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </li>
        <li>
        <img src="/assets/img/about/tequila.jpg"></img>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </li>
      <li>
        <img src="/assets/img/about/beer.jpg"></img>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </li>
      <li>
        <img src="/assets/img/about/cognac.jpg"></img>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </li>
      </ul>
    </div>
  </section>`;
