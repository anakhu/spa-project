export const CHECKBOX_TEMPLATE = (filterName, filterValue) => `
  <div class="filter__group_checkbox" value=${filterValue}>
    <label for="${filterValue}">${filterValue}</label>
    <input type="checkbox" name="${filterName}" value="${filterValue}" />
  </div>`;

export const PRICE_INPUT_TEMPLATE = (min, max) => `
  <div class="filter-group-label">
    <h3>PRICE:</h3>
    <div class="filter__group_content">
      <span>${min}</span>
      <input type="range" class="filter__group_price" name="price" 
        value="${max}" min="${min}" max="${max}">
      <span>${max}</span>
      <div class="filter__price_current"><div> 
    </div>
  </div>`;
