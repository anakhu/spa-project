class AuthService {
  constructor() {
    this.user = {};
    this.isLoggedIn = false;
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
}

export default AuthService;
