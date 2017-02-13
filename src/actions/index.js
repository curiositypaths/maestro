const URL = 'http://localhost:3000/api/v1'
import axios from 'axios'

export const createUser = userObj => {
  const resp = axios.post(`${URL}/signup`, userObj).then(data => {debugger})
  return {
    type: "CREATE_USER",
    payload: resp
  }
}
