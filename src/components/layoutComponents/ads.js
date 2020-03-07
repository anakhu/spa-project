const ADVERT_TEMPLATE = () => `
  <div class="ads_item">
    <div></div>
    <p>Your ads can be here</p>
  </div>
`;


export function renderAdComponent(container, max) {
  for (let i = 1; i <= max; i += 1) {
    container.insertAdjacentHTML('beforeend', ADVERT_TEMPLATE());
  }
}
