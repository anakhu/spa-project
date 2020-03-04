import { makeRequest } from './utils/makeRequest.js';

class AuthService {
  constructor(router, cartService) {
    this.router = router;
    this.cartService = cartService;
    this.user = {};
    this.isLoggedIn = false;
    this.authErrors = null;
    this.orderMesssages = null;

    this.init();
  }

  init() {
    this.authErrors = document.querySelector('.auth__form_error');
    this.orderMesssages = document.querySelector('.cartPage__order_message');
  }

  signUserIn() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user) {
      this.isLoggedIn = true;
    } else {
      this.user = {};
      this.isLoggedIn = false;
    }
    this.toggleAuthOnlyContent();
  }

  signUserOut() {
    this.user = {};
    this.isLoggedIn = false;
    window.localStorage.removeItem('user');
    this.toggleAuthOnlyContent();
  }

  logUserIn(data) {
    localStorage.setItem('user', JSON.stringify(data));
    this.user = data;
    this.isLoggedIn = true;
    this.toggleAuthOnlyContent();
  }

  toggleAuthOnlyContent() {
    const logOutBtn = document.querySelector('.nav__link_logout');
    const loginLink = document.querySelector('.nav__link_login');
    const userInfo = document.querySelector('.cartPage__user_info');
    const userData = userInfo.querySelector('.cartPage__user_data');

    userData.insertAdjacentHTML('beforeend',
      `<p>${this.user.name}</p>
      <p>${this.user.email}</p>`);

    if (this.isLoggedIn) {
      logOutBtn.style.display = 'block';
      loginLink.style.display = 'none';
      userInfo.style.display = 'block';
    } else {
      userData.textContent = '';
      logOutBtn.style.display = 'none';
      loginLink.style.display = 'block';
      userInfo.style.display = 'none';
    }
  }

  processSignInRequest(data) {
    makeRequest('users', 'GET', {})
      .then((res) => res.json())
      .then((res) => {
        const foundUser = res.find((user) => user.email === data.email && user.password === data.password);
        if (foundUser) {
          const { name, email } = foundUser;
          this.logUserIn({
            name,
            email,
          });
          window.history.pushState(null, null, '/cart');
          this.router.renderRouteContent(window.location.pathname);
        } else {
          this.authErrors.textContent = 'Login failed';
        }
      })
      .catch((err) => console.log(err));
  }

  processSignUpRequest(data) {
    makeRequest('users', 'POST', data)
      .then((res) => {
        if (res.status === 201) {
          const { name, email } = data;
          this.logUserIn({
            name,
            email,
          });
          window.history.pushState(null, null, '/cart');
          this.router.renderRouteContent(window.location.pathname);
        }
      })
      .catch((err) => console.log(err));
  }

  processOrderRequest() {
    if (this.isLoggedIn) {
      this.orderMesssages.textContent = '';
      const products = document.querySelectorAll('.cartPage__details div');
      if (products.length) {
        const { name, email } = this.user;
        const orderData = {
          name,
          email,
        };

        products.forEach((product) => {
          orderData[product.id] = product.dataset.value;
        });

        makeRequest('orders', 'POST', orderData)
          .then((res) => {
            if (res.status === 201) {
              const cards = document.querySelectorAll('.cart__item_wrapper');
              cards.forEach((card) => {
                const { id } = card.dataset;
                if (orderData[id]) {
                  this.cartService.deleteProductFromCart(id);
                  const total = document.querySelector('.cartPage__total');
                  total.textContent = '';
                  const details = document.querySelector('.cartPage__details');
                  details.textContent = '';
                }
              });
              this.orderMesssages.textContent = 'Your order was placed!';
            }
          })
          .catch((e) => {
            this.orderMesssages.textContent = 'Server problem. Please, try again later';
            console.log(e);
          });
      } else {
        this.orderMesssages.textContent = 'You haven\'t chosen anything yet';
      }
    }
  }
}

export default AuthService;
