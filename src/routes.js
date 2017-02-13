import React from 'react';
import { Route } from 'react-router'
import App from './App';
import UserSignUp from './components/user-sign-up'

export default (
  <Route path='/' component={App}>
    <Route path='/register' component={UserSignUp}/>
  </Route>
  )


