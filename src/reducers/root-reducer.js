import {combineReducers} from 'redux'
import usersReducer from './users-reducer'
import categoriesReducer from './categories-reducer'
import trailsReducer from './trails-reducer'
import currentTrailReducer from './current-trail-reducer'
import currentUserReducer from './current-user-reducer'

export default combineReducers({
  users: usersReducer,
  categories: categoriesReducer,
  trails: trailsReducer,
  currentTrail: currentTrailReducer,
  currentUser: currentUserReducer
})
