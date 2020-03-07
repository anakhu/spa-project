import { FORM_TEMPLATE } from './login-template.js';
import CONFIG from '../../config.js';

const { contentId } = CONFIG.routes.authPage;

function initAuthForms(formContainer) {
  const formLinks = formContainer.querySelector('ul');
  const forms = formContainer.querySelectorAll('form');

  formLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const formId = `${e.target.id.split('link')[0]}form`;
      forms.forEach((form) => {
        form.style.display = form.id === formId ? 'block' : 'none';
      });
    }
  });
}

function renderAuthForms() {
  const authFormsContainer = document.getElementById(contentId);
  authFormsContainer.insertAdjacentHTML('beforeend', FORM_TEMPLATE());

  initAuthForms(authFormsContainer);
}

export default renderAuthForms;
