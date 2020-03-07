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
