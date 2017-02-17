import {combineReducers} from 'redux'
import usersReducer from './users-reducer'
import categoriesReducer from './categories-reducer'
import trailsReducer from './trails-reducer'
// import sectionsReducer from './sections-reducer'
import currentTrailReducer from './current-trail-reducer'
import searchTrailsReducer from './search-trails-reducer'

export default combineReducers({
  users: usersReducer,
  categories: categoriesReducer,
  trails: trailsReducer,
  currentTrail: currentTrailReducer,
  trailResults: searchTrailsReducer
})
