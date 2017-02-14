import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from './App';
import UserSignUp from './components/user-sign-up'
import UserLogin from './components/userLogin'
import CreateTrail from './components/create-trail'

export default (
  <Route path='/' component={App}>
    <Route path='/register' component={UserSignUp}/>
    <Route path='/login' component={UserLogin} />
    <Route path='/trails/newtrail' component={CreateTrail} />
  </Route>
  )
