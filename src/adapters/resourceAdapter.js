import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.headers.common["AUTHORIZATION"] = sessionStorage.getItem('jwt')
import { browserHistory } from 'react-router'

export default {
  createResource: function(resourceParams) {
    return axios.post(`/trails/${resourceParams.resource.trail_id}/sections/${resourceParams.resource.section_id}/resources`, resourceParams).then(resourceData => {
      let trail = resourceData.data
      return trail
    })
  }
}
