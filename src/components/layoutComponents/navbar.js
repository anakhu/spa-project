class Navbar {
  constructor(render) {
    this.navbar = document.getElementById('js-main-nav');
    this.render = render;
    this.initNavbar();
  }

  renderNavbar() {
    const navWrapper = document.createElement('div');
    navWrapper.setAttribute('class', 'nav__wrapper');
    const ul = document.createElement('ul');
    ul.insertAdjacentHTML('beforeend', '<li class="nav__link_home">Home</li>');
    ul.insertAdjacentHTML('beforeend', '<li class="nav__link_about">About</li>');
    ul.insertAdjacentHTML('beforeend', '<li class="nav__link_catalogue">Catalogue</li>');
    ul.insertAdjacentHTML('beforeend', '<li class="nav__link_contact">Contact</li>');
    navWrapper.appendChild(ul);
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
      default:
        break;
      }
    });
  }
}

export default Navbar;
