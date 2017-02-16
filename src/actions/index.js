import userAdapter from '../adapters/userAdapter'
import trailAdapter from '../adapters/trailAdapter'
import categoryAdapter from '../adapters/categoryAdapter'

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

export const authUser = jwt => {
  let userId = userAdapter.authUser(jwt)
  return {
    type: "AUTH_USER",
    payload: userId
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

export const fetchCategories = () => {
  let categories = categoryAdapter.fetchCategories()
  return {
    type: 'FETCH_CATEGORIES',
    payload: categories
  }
}

// export const createSection = sectionObj => {
//   let resp = axios.post('/sections/new', sectionObj).then(
//     sectionData => {
//       console.log(sectionData)
//       return sectionData.data.id
//     }
//   )

//   return {
//     type: "CREATE_SECTION",
//     payload: resp
//   }

// }

// export const addCategories = (categories) => {
//   return {
//     type: 'ADD_CATEGORIES',
//     payload: categories
//   }
// }

// export const fetchSections = (trailId) => {
//   let resp = axios.get(`/trails/${trailId}/sections`).then(response => response.data)
//   return {
//     type: 'FETCH_SECTIONS',
//     payload: resp
//   }
// }
