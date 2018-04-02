import D3Impl from './components/d3';

class Main {
  constructor() {
    this.bindEvents();
    D3Impl.initChart();
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
