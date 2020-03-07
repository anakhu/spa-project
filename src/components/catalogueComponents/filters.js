import $ from 'jquery';
import { PRICE_INPUT_TEMPLATE, CHECKBOX_TEMPLATE } from './filter-templates.js';
import CONFIG from '../../config.js';

const { filters } = CONFIG;
const { filter } = CONFIG.selectors;

class Filters {
  constructor() {
    this.filtersContaniner = document.querySelector(filter.wrapper);
    this.checkboxes = {};
  }

  drawFilters(data) {
    this.drawPriceInputRange(data);
    this.buildCheckboxes(data);
    this.drawCheckboxes();
    this.drawResetButton(this.filtersContaniner);
  }

  drawPriceInputRange(data) {
    const allPrices = data.map(({ price }) => price);
    const prices = {
      min: Math.floor(Math.min(...allPrices)),
      max: Math.floor(Math.max(...allPrices)),
    };
    this.filtersContaniner.insertAdjacentHTML('beforeend', PRICE_INPUT_TEMPLATE(prices.min, prices.max));
  }

  buildCheckboxes(data) {
    [...data].forEach((product) => {
      filters.forEach((filterBase) => {
        if (product[filterBase]
          && !Object.prototype.hasOwnProperty.call(this.checkboxes, filterBase)) {
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

  drawCheckboxes() {
    for (const [key, value] of Object.entries(this.checkboxes)) {
      const filterGroup = document.createElement('div');
      filterGroup.setAttribute('class', filter.container);
      filterGroup.insertAdjacentHTML('beforeend',
        `<div class="filter__group_label">${key.toUpperCase()}</div>`);

      const filterGroupContent = document.createElement('div');
      filterGroupContent.setAttribute('class', 'filter__group_content');

      value.sort().forEach((filterValue) => {
        filterGroupContent.insertAdjacentHTML('beforeend', CHECKBOX_TEMPLATE(key, filterValue));
      });

      filterGroup.appendChild(filterGroupContent);

      this.initFilterGroupContent(filterGroup, filterGroupContent);
      this.filtersContaniner.appendChild(filterGroup);
    }
  }

  drawResetButton(container) {
    container.insertAdjacentHTML('afterbegin', '<button class="filter__button_reset">Reset filters</button>');
  }

  initFilterGroupContent(group, content) {
    content.style.display = 'none';
    const label = group.getElementsByTagName('div')[0];
    label.addEventListener('click', () => {
      const { display } = content.style;
      if (display === 'block') {
        $(content).slideUp(500, () => {
          content.style.display = 'none';
        });
      } else {
        $(content).slideDown(500, () => {
          content.style.display = 'block';
        });
      }
    });
  }
}

export default Filters;
