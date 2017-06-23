import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Routes from './Routes/Routes';
import LoginReducer from './Store/Login/LoginReducer';
import AppReducer from './Store/App/AppBehaviour';

const middleware = applyMiddleware(thunk);
const rootReducers = combineReducers({
  auth: LoginReducer,
  app: AppReducer,
});

const store = createStore(rootReducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
