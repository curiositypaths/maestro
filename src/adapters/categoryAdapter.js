import axios from 'axios'
axios.defaults.baseURL = 'http://fs-maestro-api.herokuapp.com/api/v1/'
axios.defaults.headers.common["AUTHORIZATION"] = sessionStorage.getItem('jwt')
// import { browserHistory } from 'react-router'

export default {
  fetchCategories: function() {
    return axios.get('/categories/all').then(categories => categories.data)
  }
}
