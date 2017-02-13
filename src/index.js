import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './routes.js';
import App from './App';
import './index.css';

import { Router, Route, Link } from 'react-router'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
