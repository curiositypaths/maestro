import React from 'react'
import HeroSearch from './hero-search'
import TrailSearchResults from './trail-search-results'
import { connect } from 'react-redux'


const Hero = props => {
  return (
    <div id="hero">
      <h4>Learn new skills from the best.</h4>
      <HeroSearch />
      <TrailSearchResults />
    </div>

  )
}

export default connect()(Hero)
