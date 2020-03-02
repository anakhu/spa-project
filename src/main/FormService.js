import AuthService from './AuthService.js';
import CONFIG from '../config.js';
import validate from './utils/validator.js';
import { makeRequest } from './utils/makeRequest.js';

class FormService {
  constructor(router) {
    this.router = router;
    this.signInForm = null;
    this.signUpForm = null;
    this.validationErrors = {};
    this.auth = new AuthService();
  }

  initAuthForms() {
    this.initSignInForm();
    this.initSignUpForm();
    this.triggerOnInputChangeValidation();
    this.auth.signUserIn();

    const logOutBtn = document.querySelector('.nav__link_logout');
    logOutBtn.addEventListener('click', () => {
      this.auth.signUserOut();
    });

    const orderBtn = document.querySelector('.cartPage__order_buy');
    orderBtn.addEventListener('click', () => {
      if (this.auth.isLoggedIn) {
        console.log('order is being placed');
      } else {
        window.history.pushState(null, null, '/login');
        this.router.renderRouteContent(window.location.pathname);
      }
    });
  }

  initSignInForm() {
    this.signInForm = document.getElementById('js-sign-in-form');
    this.signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = this.getFormData(e.target);

      if (!Object.keys(this.validationErrors).length) {
        makeRequest('users', 'GET', {})
          .then((res) => res.json())
          .then((res) => {
            const foundUser = res.find((user) => user.email === data.email && user.password === data.password);
            if (foundUser) {
              const { name, email } = foundUser;
              this.auth.logUserIn({
                name,
                email,
              });
              window.history.pushState(null, null, '/cart');
              this.router.renderRouteContent(window.location.pathname);
            } else {
              console.log('user not found');
            }
          })
          .catch((err) => console.log(err));
      }
    });
  }

  initSignUpForm() {
    this.signUpForm = document.getElementById('js-sign-up-form');
    this.signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = this.getFormData(e.target);

      if (!Object.keys(this.validationErrors).length) {
        makeRequest('users', 'POST', data)
          .then((res) => {
            if (res.status === 201) {
              const { name, email } = data;
              this.auth.logUserIn({
                name,
                email,
              });
              window.history.pushState(null, null, '/cart');
              this.router.renderRouteContent(window.location.pathname);
            }
          });
      }
    });
  }

  validateInputField(field) {
    const activeForm = field.parentElement;
    const { name, value } = field;
    const validationResult = validate(name, value, CONFIG.validationRules[name]);
    this.displayErrors(activeForm, name, validationResult[name]);
    this.updateValidationErrors(validationResult, name);
  }

  updateValidationErrors(validationResult, fieldName) {
    if (!Object.keys(validationResult).length) {
      delete this.validationErrors[fieldName];
    } else {
      this.validationErrors = Object.assign(this.validationErrors, validationResult);
    }
  }

  displayErrors(activeForm, name, errors) {
    const errorField = activeForm.querySelector(`.${name}-error`);

    if (errors) {
      errorField.textContent = errors.reduce((errorString, message) => {
        errorString += `${message}\n`;

        return errorString;
      }, '');
    } else {
      errorField.textContent = '';
    }
  }

  triggerOnInputChangeValidation() {
    this.signInForm.addEventListener('keyup', (e) => {
      this.validateInputField(e.target);
    });
    this.signUpForm.addEventListener('keyup', (e) => {
      this.validateInputField(e.target);
    });
  }

  getFormData(form) {
    const authData = {};
    const inputs = form.getElementsByTagName('input');
    Array.from(inputs).forEach((input) => {
      this.validateInputField(input);
      const { name, value } = input;
      authData[name] = value;
    });

    return authData;
  }
}

export default FormService;
