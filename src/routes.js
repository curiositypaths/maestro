import React from 'react';
import { Route } from 'react-router'
import App from './App';
import UserSignUp from './components/user-signup'
import UserLogin from './components/user-login'
import CreateTrail from './components/create-trail'

import EditTrail from './components/edit-trail'
import ShowTrail from './components/show-trail'

export default (
  <Route path='/' component={ App }>
    <Route path='/register' component={ UserSignUp }/>
    <Route path='/login' component={ UserLogin } />
    <Route path='/trails/new' component={ CreateTrail } />
    <Route path='/trails/:id/edit' component={ EditTrail } />
    <Route path='/trails/:id' component={ ShowTrail } />
  </Route>
  )
