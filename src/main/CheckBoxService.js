import Observable from "./Observable.js";

class CheckBoxService {
  constructor() {
    this.checkboxes = [];
    this.filters = {};
    this.observable = new Observable();
  }

  init() {
    this.checkboxes = document.querySelectorAll('.filter__group_checkbox input');
    this.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', (e) => {
        if (e.target.hasAttribute('checked')) {
          e.target.removeAttribute('checked');
          this.onCheckBoxUnChecked(e.target.name, e.target.value);
        } else {
          e.target.setAttribute('checked', true);
          this.onCheckBoxChecked(e.target.name, e.target.value);
        }
        this.handleFilterChange();
      });
    });
    this.getFilters();
    this.initCheckBoxes();
  }

  subscribe(fn) {
    this.observable.subscribe(fn);
  }

  initCheckBoxes() {
    if (Object.keys(this.filters).length) {
      this.checkboxes.forEach((checkbox) => {
        if (this.filters[checkbox.name] && this.filters[checkbox.name].includes(checkbox.value)) {
          checkbox.setAttribute('checked', true);
          const container = checkbox.closest('.filter__group_content');
          container.style.display = 'block';
        }
      });
    }
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

export default CheckBoxService;
