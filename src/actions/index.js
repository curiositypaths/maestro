import userAdapter from '../adapters/userAdapter'
import trailAdapter from '../adapters/trailAdapter'
import categoryAdapter from '../adapters/categoryAdapter'
import sectionAdapter from '../adapters/sectionAdapter'
import resourceAdapter from '../adapters/resourceAdapter'

export const createUser = userParams => {
  let userObj = userAdapter.createUser(userParams)
  return {
    type: "CREATE_USER",
    payload: userObj
  }
}

export const loginUser = loginParams => {
  let userObj = userAdapter.loginUser(loginParams)
  return {
    type: "LOGIN_USER",
    payload: userObj
  }
}

export const logOutUser = () => {
  console.log('getting ready to logut user')
  let user = {data: {user: {user_id: null }}}
  let userObj = user
  sessionStorage.clear()
  return {
    type: "LOGIN_USER",
    payload: userObj
  }
}

export const authUser = jwt => {
  let user = userAdapter.authUser(jwt)
  return {
    type: "AUTH_USER",
    payload: user
  }
}

export const fetchUser = id => {
  let user = userAdapter.fetchUser(id)
  return {
    type: "FETCH_USER",
    payload: user
  }
}

export const createTrail = trailParams => {
  let trailObj = trailAdapter.createTrail(trailParams)
  return {
    type: "CREATE_TRAIL",
    payload: trailObj
  }
}

export const fetchTrail = trailId => {
  let trailObj = trailAdapter.fetchTrail(trailId)
  return {
    type: "FETCH_CURRENT_TRAIL",
    payload: trailObj
  }
}

export const deleteTrail = trailId => {
  let trailObj = trailAdapter.deleteTrail(trailId)
  return {
    type: "DELETE_TRAIL",
    payload: trailObj
  }
}

export const searchTrails = query => {
  let response = trailAdapter.searchTrails(query)
  return {
    type: "FILTER_TRAILS",
    payload: response
  }
}

export const fetchCategories = () => {
  let categories = categoryAdapter.fetchCategories()
  return {
    type: 'FETCH_CATEGORIES',
    payload: categories
  }
}

export const createSection = sectionParams => {
  let trailObj = sectionAdapter.createSection(sectionParams)
  return {
    type: "ADD_SECTION",
    payload: trailObj
  }
}

export const createResource = resourceParams => {
  let trailObj = resourceAdapter.createResource(resourceParams)
  return {
    type: "ADD_RESOURCE",
    payload: trailObj
  }
}

export const voteForTrack = (voteParams) => {
  let trailObj = trailAdapter.voteForTrack(voteParams)
  return {
    type: "VOTE_FOR_TRACK",
    payload: trailObj
  }
}
