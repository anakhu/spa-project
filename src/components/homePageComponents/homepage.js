const HOMEPAGE_TEMPLATE = () => `
  <div class="lead__banner">
    <img src="assets/img/homepage/lead-banner.jpg" />
    <div class="banner__content">
      <div class="wrapper">
        <span class="title">Only trusted suppliers</span>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  </div>
  <section class="homePage__services">
      <div class="wrapper">
        <ul>
          <li>
            <img src="assets/img/homepage/about.png" />
            <p class="homePage__link_about" ><br />About us</p>
          </li>
          <li>
            <img src="assets/img/homepage/shop.png" />
            <p class="homePage__link_catalogue"><br />Shop now</p>
          </li>
          <li>
            <img src="assets/img/homepage/join.png" />
            <p class="homePage__link_login"><br />Join</p>
          </li>
        </ul>
      </div>
    </section>
  <div class="second__banner">
    <img src="assets/img/homepage/second-banner.jpg" />
    <div class="banner__content">
       <div class="wrapper">
        <span class="title">Excellent service</span>
        <span class="title">Fast delivery</span>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  </div>
  <section class="homePage__products">
    <div class="wrapper">
      <h1>Popular brands</h1>
      <ul>
        <li><img src="assets/img/homepage/ballantines.jpg" name="brand" data-value="Ballantine's" /></li>
        <li><img src="assets/img/homepage/black-velvet.jpg" name="brand" data-value="Black Velvet" /></li>
        <li><img src="assets/img/homepage/jack-daniels.jpg" name="brand" data-value="Jack Daniel's" /></li>
        <li><img src="assets/img/homepage/jameson.jpg" name="brand" data-value="Jameson"/></li>
        <li><img src="assets/img/homepage/lauders.jpg" name="brand" data-value="Lauder's" /></li>
        <li><img src="assets/img/homepage/jim-beam.jpg" name="brand" data-value="Jim Beam"/></li>
        <li><img src="assets/img/homepage/jagermeister.jpg" name="brand" data-value="Jagermeister"/></li>
      </ul>
    </div>
  </section>`;


function renderHomePage(render) {
  const homepage = document.getElementById('js-homepage');
  homepage.insertAdjacentHTML('beforeend', HOMEPAGE_TEMPLATE());
  initSeriveUrls(render);
}

function initSeriveUrls(renderFn) {
  const servicesUrls = document.querySelectorAll('.homePage__services p');
  servicesUrls.forEach((url) => {
    const route = url.className.split('homePage__link_')[1];
    url.addEventListener('click', () => {
      window.history.pushState(null, null, `/${route}`);
      renderFn(window.location.pathname);
    });
  });
}

export default renderHomePage;
