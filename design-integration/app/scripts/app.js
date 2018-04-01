class Main {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {

  }
}

if (module.hot) {
  module.hot.accept();
}

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable */
  new Main();
  /* eslint-enable */
});
