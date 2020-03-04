import CONFIG from '../config.js';
import Observable from './Observable.js';

const { filter, home } = CONFIG.selectors;

class FilterService {
  constructor() {
    this.checkboxes = [];
    this.homePageFilters = [];
    this.priceInput = null;
    this.resetFiltersBtn = null;
    this.filters = {};
    this.observable = new Observable();
  }

  init() {
    this.checkboxes = document.querySelectorAll(filter.checkbox);
    this.homePageFilters = document.querySelectorAll(home.img);
    this.resetFiltersBtn = document.querySelector(filter.reset);
    this.priceInput = document.querySelector(filter.price);

    this.resetFiltersBtn.addEventListener('click', () => {
      this.resetFilters();
    });

    this.priceInput.addEventListener('change', (e) => {
      this.onInputRangeChange(e.target.value);
      this.handleFilterChange();
      const currentVal = document.querySelector(filter.currentPrice);
      currentVal.textContent = e.target.value;
    });

    this.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.onCheckBoxChecked(e.target.name, e.target.value);
        } else {
          this.onCheckBoxUnChecked(e.target.name, e.target.value);
        }
        this.handleFilterChange();
      });
    });

    this.homePageFilters.forEach((img) => {
      img.addEventListener('click', (e) => {
        this.onCheckBoxChecked(e.target.name, e.target.dataset.value);
        this.handleFilterChange();
        this.initFilters();
      });
    });

    this.getFilters();
    this.initFilters();
  }

  subscribe(fn) {
    this.observable.subscribe(fn);
  }

  initFilters() {
    if (Object.keys(this.filters).length) {
      this.checkboxes.forEach((currentFilter) => {
        const { name, value } = currentFilter;
        if (this.filters[name] && this.filters[name].includes(value)) {
          currentFilter.checked = true;
          const container = currentFilter.closest(filter.content);
          container.style.display = 'block';
        }
      });
    }
    if (this.filters.price) {
      this.priceInput.value = this.filters.price;
      const currentVal = document.querySelector(filter.currentPrice);
      currentVal.textContent = this.filters.price;
    }
  }

  resetFilters() {
    this.filters = {};
    this.handleFilterChange();
    this.checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    this.priceInput.value = this.priceInput.max;
  }

  getFilters() {
    const filtersString = decodeURI(window.location.search);

    const filters = filtersString
      .replace('?', '')
      .split('&')
      .filter(Boolean)
      .reduce((filterObject, currenFilterValue) => {
        const [filterBase, filterValue] = currenFilterValue.split('=');
        if (!Object.prototype.hasOwnProperty.call(filterObject, filterBase)) {
          filterObject[filterBase] = [];
        }
        filterObject[filterBase].push(filterValue);

        return filterObject;
      }, {});

    this.filters = filters;

    return this.filters;
  }

  onInputRangeChange(value) {
    this.filters.price = [value];
  }

  onCheckBoxChecked(name, value) {
    if (!this.filters[name]) {
      this.filters[name] = [];
    }

    if (this.filters[name] && !this.filters[name].includes(value)) {
      this.filters[name].push(value);
    }
  }

  onCheckBoxUnChecked(name, value) {
    if (this.filters[name] && this.filters[name].includes(value)) {
      const index = this.filters[name].indexOf(value);
      this.filters[name].splice(index, 1);
    }

    if (this.filters[name] && this.filters[name].length < 1) {
      delete this.filters[name];
    }
  }

  handleFilterChange() {
    const query = this.createQuery();
    if (!Object.keys(this.filters).length) {
      this.observable.next('/catalogue');
    } else {
      this.observable.next(query);
    }
  }

  createQuery() {
    let queryString = '';
    for (const [key, values] of Object.entries(this.filters)) {
      values.forEach((value) => {
        const queryStringElement = `${key}=${value}&`;
        queryString += queryStringElement;
      });
    }

    return `/catalogue?${queryString}`;
  }
}

export default FilterService;
