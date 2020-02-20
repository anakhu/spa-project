/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
const filters = ['brand', 'volume', 'manufacturer', 'category', 'package', 'spirit type'];

class CheckBoxFilter {
  constructor() {
    this.checkBoxesContaniner = document.getElementById('js-catalogue-filter');
    this.checkboxes = {};
  }

  drawCheckboxes(data) {
    this.buildCheckboxes(data);

    for (const [key, value] of Object.entries(this.checkboxes)) {
      const checkboxGroup = document.createElement('div');
      checkboxGroup.setAttribute('class', 'catalogue__filter_group');
      checkboxGroup.insertAdjacentHTML('beforeend', `<div class="filter__group_label">${key.toUpperCase()}</div>`);

      const checkboxGroupContent = document.createElement('div');
      checkboxGroupContent.setAttribute('class', 'filter__group_content');

      value.sort().forEach((filterValue) => {
        const checkBoxEntry = document.createElement('div');
        checkBoxEntry.setAttribute('class', 'filter__group_checkbox');
        checkBoxEntry.setAttribute('value', filterValue);

        checkBoxEntry.insertAdjacentHTML('beforeend', `<label for="${filterValue}">${filterValue}</label>`);
        checkBoxEntry.insertAdjacentHTML('beforeend', `<input type="checkbox" name="${key}" value="${filterValue}" />`);
        checkboxGroupContent.appendChild(checkBoxEntry);
      });

      checkboxGroup.appendChild(checkboxGroupContent);
      checkboxGroupContent.style.display = 'none';

      const label = checkboxGroup.getElementsByTagName('div')[0];

      label.addEventListener('click', () => {
        if (checkboxGroupContent.style.display === 'none') {
          checkboxGroupContent.style.display = 'block';
        } else {
          checkboxGroupContent.style.display = 'none';
        }
      });

      this.checkBoxesContaniner.appendChild(checkboxGroup);
    }
  }

  buildCheckboxes(data) {
    [...data].forEach((product) => {
      filters.forEach((filterBase) => {
        if (product[filterBase] && !this.checkboxes.hasOwnProperty(filterBase)) {
          this.checkboxes[filterBase] = [];
          this.checkboxes[filterBase].push(product[filterBase]);
        }

        if (product[filterBase]
          && Object.prototype.hasOwnProperty.bind(this.checkboxes, filterBase)
          && !this.checkboxes[filterBase].includes(product[filterBase])) {
          this.checkboxes[filterBase].push(product[filterBase]);
        }
      });
    });
  }
}

export default CheckBoxFilter;
