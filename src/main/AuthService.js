import validate from './utils/validator.js';

const VALIDATION_RULES = {
  name: {
    minLen: 3,
    maxLen: 20,
    onlyNumbersAndLetters: true,
    isNotEmpty: true,
  },
  email: {
    isNotEmpty: true,
    isValidEmail: true,
  },
  password: {
    minLen: 6,
    maxLen: 20,
    onlyNumbersAndLetters: true,
    isNotEmpty: true,
  },
};

class AuthService {
  constructor() {
    this.signInForm = null;
    this.signUpForm = null;
  }

  initAuthForms() {
    this.initSignInForm();
    this.initSignUpForm();
    this.triggerOnInputChangeValidation();
  }

  initSignInForm() {
    this.signInForm = document.getElementById('js-sign-in-form');
    this.signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = this.getFormData(e.target);
      if (data) {
        this.makeRequest('GET', {})
          .then((res) => res.json())
          .then((res) => {
            const foundUser = res.find((user) => user.email === data.email && user.password === data.password);
            if (foundUser) {
              console.log(foundUser);
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
      if (data) {
        this.makeRequest('POST', data)
          .then((res) => console.log(res));
      }
    });
  }

  validateInputField(field) {
    const activeForm = field.parentElement;
    const { name, value } = field;
    const validationResult = validate(name, value, VALIDATION_RULES[name]);
    this.displayErrors(activeForm, name, validationResult[name]);
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
      const validationResult = this.validateInputField(input);
      if (validationResult) {
        const { name, value } = input;
        authData[name] = value;
      }
    });

    return authData;
  }

  makeRequest(requestType, dataObj = {}) {
    const config = {
      method: requestType,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (Object.keys(dataObj).length) {
      config.body = JSON.stringify(dataObj);
    }

    return fetch('http://localhost:3000/users', config);
  }
}

export default AuthService;
