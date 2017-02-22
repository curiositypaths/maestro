import axios from 'axios'
axios.defaults.baseURL = 'http://fs-maestro-api.herokuapp.com/api/v1/'
axios.defaults.headers.common["AUTHORIZATION"] = sessionStorage.getItem('jwt')

export default {
  createResource: function(resourceParams) {
    return axios.post(`/trails/${resourceParams.resource.trail_id}/sections/${resourceParams.resource.section_id}/resources`, resourceParams).then(resourceData => {
      let trail = resourceData.data
      return trail
    })
  }
}
