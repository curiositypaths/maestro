import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.headers.common["AUTHORIZATION"] = sessionStorage.getItem('jwt')
import { browserHistory } from 'react-router'

export default {
  createSection: function(sectionParams) {
    return axios.post(`/trails/${sectionParams.section.trail_id}/sections`, sectionParams).then(sectionData => {
      let trail = sectionData.data
      //browserHistory.push(`/trails/${sectionParams.section.trail_id}/edit`)
      return trail
    })
  }
}
