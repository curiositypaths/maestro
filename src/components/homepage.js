import React, { Component } from 'react'
import TrailFeature from './trail-feature'
import Hero from './hero'
import TrailSearchResults from './trail-search-results'

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <Hero />
        <TrailSearchResults />
        <TrailFeature />
      </div>
    )
  }
}

export default Homepage
