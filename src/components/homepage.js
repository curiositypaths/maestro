import React, { Component } from 'react'
import TrailFeature from './trail-feature'
import Hero from './hero'
import TrailSearchResults from './trail-search-results'
import Dashboard from './dashboard'

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <Hero />
        <Dashboard />
        <TrailSearchResults />
        <TrailFeature />
      </div>
    )
  }
}

export default Homepage
