class Router {
  constructor() {
    this.routes = {
      404: () => {
        console.log('Page not found.');
      },
    };
  }

  createNewRoute(pathName, callback) {
    if (!pathName || typeof pathName !== 'string') {
      throw new Error('Valid path required');
    }

    if (!callback || typeof callback !== 'function') {
      throw new Error('Callback required');
    }

    if (Object.prototype.hasOwnProperty.call(this.routes, pathName)) {
      throw new Error('Route with this name already exists');
    }

    this.routes[pathName] = callback;
  }

  renderRouteContent(url) {
    const pathName = url.split('/')[1] || '/';

    if (Object.prototype.hasOwnProperty.call(this.routes, pathName)) {
      this.routes[pathName]();
    } else {
      this.routes['404']();
    }
  }
}

export default Router;
