import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './Routes/Routes';
import LoginReducer from './Store/Login/LoginReducer';

const store = createStore(LoginReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
