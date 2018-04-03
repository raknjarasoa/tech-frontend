import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

/**
 * Enable HMR
 */
if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
