import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.headers.common["AUTHORIZATION"] = sessionStorage.getItem('jwt')
import { browserHistory } from 'react-router'

export default {
  createUser: function(userParams) {
    return axios.post('/signup', userParams).then(userData => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    browserHistory.push("/")
    return userData
  })},

  loginUser: function(loginParams) {
    return axios.post('/login', loginParams).then( userData => {
      sessionStorage.setItem("jwt", userData.data.jwt)
      browserHistory.push("/")
      return userData
    })
  }
}
