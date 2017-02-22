import axios from 'axios'
axios.defaults.baseURL = 'https://fs-maestro-api.herokuapp.com/api/v1/'
axios.defaults.headers.common["AUTHORIZATION"] = sessionStorage.getItem('jwt')
// import { browserHistory } from 'react-router'

export default {
  createSection: function(sectionParams) {
    return axios.post(`/trails/${sectionParams.section.trail_id}/sections`, sectionParams).then(sectionData => {
      let trail = sectionData.data
      return trail
    })
  }
}
