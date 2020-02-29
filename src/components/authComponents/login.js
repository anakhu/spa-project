class LoginForm {
  constructor() {
    this.authPage = document.getElementById('js-auth-page');
    this.formsWrapper = null;
    this.signInForm = null;
    this.signUpForm = null;
  }

  initAuthForms() {
    this.renderFormsWrapper();
    this.renderSignInForm();
    this.rendeSignUpForm();
    this.initFormWrapperListeners();
  }

  renderSignInForm() {
    this.signInForm = document.createElement('form');
    this.signInForm.setAttribute('id', 'js-sign-in-form');

    this.signInForm.insertAdjacentHTML('beforeend',
      `<label for="email">Email:</label>
      <input type="email" name="email" required>
      <label for="password">Password:</label>
      <input type="password" name="password" required>
      <button type="submit">Sign in</button>
      `);

    this.formsWrapper.appendChild(this.signInForm);
  }

  rendeSignUpForm() {
    this.signUpForm = document.createElement('form');
    this.signUpForm.setAttribute('id', 'js-sign-up-form');

    this.signUpForm.insertAdjacentHTML('beforeend',
      `<label for="namel">Name:</label>
      <input type="text" name="name" required>
      <label for="email">Email:</label>
      <input type="email" name="email" required>
      <label for="password-1">Password:</label>
      <input type="password" name="password-1" required>
      <label for="password-2">Confirm password:</label>
      <input type="password" name="password-2" required>
      <button type="submit">Sign Up</button>
      `);

    this.formsWrapper.appendChild(this.signUpForm);
  }

  renderFormsWrapper() {
    this.formsWrapper = document.createElement('div');
    this.formsWrapper.setAttribute('class', 'auth__form_wrapper');
    this.formsWrapper.insertAdjacentHTML('beforeend',
      `<ul>
        <li class="signIn_link">Sign In</li>
        <li class="signUp_link">Sign Up</li>
      </ul>`);

    this.authPage.appendChild(this.formsWrapper);
  }

  initFormWrapperListeners() {
    const formLinks = this.formsWrapper.querySelector('ul');
    formLinks.addEventListener('click', (e) => {
      if (e.target.classList.contains('signIn_link')) {
        this.signInForm.style.display = 'block';
        this.signUpForm.style.display = 'none';
      } else {
        this.signInForm.style.display = 'none';
        this.signUpForm.style.display = 'block';
      }
    });

    this.signUpForm.style.display = 'none';
  }
}

export default LoginForm;
