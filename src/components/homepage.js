import React, { Component } from 'react'
import Hero from './hero'
import TrailSearchResults from './trail-search-results'

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <Hero />
        <TrailSearchResults />
      </div>
    )
  }
}

export default Homepage
