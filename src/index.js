import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import asyncComponent from './helpers/asyncComponent';

const AsyncApp = asyncComponent(() => {
  return import('./containers/App');
});

ReactDom.render(
  <Provider store={store}>
    <AsyncApp />
  </Provider>,
  document.getElementById('root'));