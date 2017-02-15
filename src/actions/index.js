import axios from 'axios'
import { browserHistory } from 'react-router'
axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.headers.common["AUTHORIZATION"] = sessionStorage.getItem('jwt')

export const createUser = userObj => {
  let resp = axios.post('/signup', userObj).then(userData => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    browserHistory.push("/")
    return userData
  })

  return {
    type: "CREATE_USER",
    payload: resp
  }
}

export const loginUser = userObj => {
  let resp = axios.post('/login', userObj).then( userData => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    browserHistory.push("/")
    return userData
  })
  return {
    type: "LOGIN_USER",
    payload: resp
  }
}

export const createTrail = trailObj => {
  let resp = axios.post(`/trails/new`, trailObj).then(trailData => {
    let trailId = trailData.data.id
    browserHistory.push(`/trails/${trailId}`)
    return trailId
  })
  return {
    type: "CREATE_TRAIL",
    payload: resp
  }
}

export const fetchTrail = trailId => {

  let resp = axios.get(`/trails/${trailId}/edit`).then(trail => {
    return trail.data
  })

  return {
    type: "FETCH_CURRENT_TRAIL",
    payload: resp
  }

}

export const createSection = sectionObj => {
  let resp = axios.post('/sections/new', sectionObj).then(
    sectionData => {
      console.log(sectionData)
      return sectionData.data.id
    }
  )

  return {
    type: "CREATE_SECTION",
    payload: resp
  }

}

export const fetchCategories = () => {
  let resp = axios.get('/categories/all').then(categories => categories.data)
  return {
    type: 'FETCH_CATEGORIES',
    payload: resp
  }
}

export const addCategories = (categories) => {
  return {
    type: 'ADD_CATEGORIES',
    payload: categories
  }
}

export const fetchSections = (trailId) => {
  let resp = axios.get(`/trails/${trailId}/sections`).then(response => response.data)
  return {
    type: 'FETCH_SECTIONS',
    payload: resp
  }
}
