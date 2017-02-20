import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import routes from './routes.js';
import './App.css';
import rootReducer from './reducers/root-reducer'

import { Router, browserHistory } from 'react-router'

const store = applyMiddleware(promiseMiddleware)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
)
