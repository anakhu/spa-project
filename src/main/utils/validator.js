/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-control-regex
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function validate(fieldName, fieldValue, rules = {}, callback = () => {}) {
  const validators = {
    minLen: (val, min) => val.length >= min,
    maxLen: (val, max) => val.length <= max,
    onlyNumbersAndLetters: (val) => /^[A-Za-z0-9]+$/.test(val),
    isValidEmail: (val) => EMAIL_REGEX.test(val),
    isNotEmpty: (val) => val.trim().length,
  };

  const messages = {
    minLen: (field, val) => `${field} must contain at least ${val} characters`,
    maxLen: (field, val) => `${field} must contain ${val} characters  at most`,
    onlyNumbersAndLetters: (field) => `${field} must include only numbers and letters`,
    isValidEmail: (field) => `${field} should be valid`,
    isNotEmpty: (field) => `${field} mustn't be empty`,
  };

  const errors = {};

  for (const rule in rules) {
    if (Object.prototype.hasOwnProperty.call(validators, rule)) {
      const result = validators[rule](fieldValue, rules[rule]);
      if (!result) {
        const errorMessage = messages[rule](fieldName, rules[rule]);
        callback(errorMessage);
        !Object.prototype.hasOwnProperty.call(errors, fieldName)
          ? errors[fieldName] = [errorMessage]
          : errors[fieldName].push(errorMessage);
      }
    }
  }

  return errors;
}

export default validate;
