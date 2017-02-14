import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from './App';
import UserSignUp from './components/user-signup'
import UserLogin from './components/user-login'
import CreateTrail from './components/create-trail'

export default (
  <Route path='/' component={App}>
    <Route path='/register' component={UserSignUp}/>
    <Route path='/login' component={UserLogin} />
    <Route path='/trails/new' component={CreateTrail} />
  </Route>
  )
