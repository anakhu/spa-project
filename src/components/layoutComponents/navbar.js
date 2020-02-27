class Navbar {
  constructor(render) {
    this.navbar = document.getElementById('js-main-nav');
    this.render = render;
    this.initNavbar();
  }

  renderNavbar() {
    const navWrapper = document.createElement('div');
    navWrapper.setAttribute('class', 'nav__wrapper');

    const ulMain = document.createElement('ul');
    ulMain.insertAdjacentHTML('beforeend', '<li class="nav__link_home">Home</li>');
    ulMain.insertAdjacentHTML('beforeend', '<li class="nav__link_about">About</li>');
    ulMain.insertAdjacentHTML('beforeend', '<li class="nav__link_catalogue">Catalogue</li>');
    ulMain.insertAdjacentHTML('beforeend', '<li class="nav__link_contact">Contact</li>');

    const ulCart = document.createElement('ul');
    ulCart.insertAdjacentHTML('beforeend', '<li><img class="nav__link_cart" src="/assets/img/126083.png"></li>');

    navWrapper.appendChild(ulMain);
    navWrapper.appendChild(ulCart);

    this.navbar.appendChild(navWrapper);
  }

  initNavbar() {
    this.renderNavbar();

    this.navbar.addEventListener('click', (e) => {
      switch (e.target.className) {
      case 'nav__link_home':
        window.history.pushState(null, null, '/');
        this.render(window.location.pathname);
        break;
      case 'nav__link_about':
        window.history.pushState(null, null, '/about');
        this.render(window.location.pathname);
        break;
      case 'nav__link_catalogue':
        window.history.pushState(null, null, '/catalogue');
        this.render(window.location.pathname);
        break;
      case 'nav__link_contact':
        window.history.pushState(null, null, '/contact');
        this.render(window.location.pathname);
        break;
      case 'nav__link_cart':
        window.history.pushState(null, null, '/cart');
        this.render(window.location.pathname);
        break;
      default:
        break;
      }
    });
  }
}

export default Navbar;
