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
    return axios.get(`/trails/${trailId}`).then(trail => {
      return trail.data
    })
  },

  deleteTrail: function(trailId) {
    return axios.delete(`/trails/${trailId}`, trailId).then( trail => {
      browserHistory.push(`/`)
      return trail.data
    })
  },

  voteForTrack: function(voteParams) {
    return axios.post(`/trails/${voteParams.trailId}/votes/${voteParams.userId}`).then(trail => {
      return trail.data
    })
  },

  searchTrails: function(query) {
    return axios.post(`/search/trails/`, {query: query}).then( response => {
    return response.data
  })
}}
