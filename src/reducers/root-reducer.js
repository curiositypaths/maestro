import {combineReducers} from 'redux'
import usersReducer from './users-reducer'
import categoriesReducer from './categories-reducer'

export default combineReducers({
  users: usersReducer,
  categories: categoriesReducer
})
