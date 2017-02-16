import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.headers.common["AUTHORIZATION"] = sessionStorage.getItem('jwt')
import { browserHistory } from 'react-router'

export default {
  createTrail: function(trailParams) {
    return axios.post(`/trails`, trailParams).then(trailData => {
      let trailId = trailData.data.id
      browserHistory.push(`/trails/${trailId}/edit`)
      return trailId
    })
  },
  fetchTrail: function(trailId) {
    return axios.get(`/trails/${trailId}/edit`).then(trail => {
      return trail.data
    })
  }
}
