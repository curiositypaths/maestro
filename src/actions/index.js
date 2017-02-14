const URL = 'http://localhost:3000/api/v1'
import axios from 'axios'
import { browserHistory } from 'react-router'

export const createUser = userObj => {
  let resp = axios.post(`${URL}/signup`, userObj).then(userData => {
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
  let resp = axios.post(`${URL}/login`, userObj).then( userData => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    browserHistory.push("/")
    return userData
  })
  return {
    type: "LOGIN_USER",
    payload: resp
  }
}
