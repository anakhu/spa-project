import CONFIG from '../config.js';
import validate from './utils/validator.js';

const { cart, nav, forms } = CONFIG.selectors;

class FormService {
  constructor(router, auth) {
    this.router = router;
    this.signInForm = null;
    this.signUpForm = null;
    this.validationErrors = {};
    this.auth = auth;
  }

  initAuthForms() {
    this.initSignInForm();
    this.initSignUpForm();
    this.triggerOnInputChangeValidation();
    this.auth.init();
    this.auth.signUserIn();

    const logOutBtn = document.querySelector(nav.logout);
    logOutBtn.addEventListener('click', () => {
      this.auth.signUserOut();
    });

    const orderBtn = document.querySelector(cart.buy);
    orderBtn.addEventListener('click', () => {
      if (this.auth.isLoggedIn) {
        this.auth.processOrderRequest();
      } else {
        window.history.pushState(null, null, '/login');
        this.router.renderRouteContent(window.location.pathname);
      }
    });
  }

  initSignInForm() {
    this.signInForm = document.getElementById(forms.signIn);
    this.signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.auth.authErrors.textContent = '';
      const data = this.getFormData(e.target);

      if (!Object.keys(this.validationErrors).length) {
        this.auth.processSignInRequest(data);
      }
    });
  }

  initSignUpForm() {
    this.signUpForm = document.getElementById(forms.signUp);
    this.signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.auth.authErrors.textContent = '';
      const data = this.getFormData(e.target);

      if (!Object.keys(this.validationErrors).length) {
        this.auth.processSignUpRequest(data);
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
        errorString += `${message} `;

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
