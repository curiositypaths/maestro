import React from 'react'
import HeroSearch from './hero-search'
import { connect } from 'react-redux'


const Hero = props => {
  return (
    <div className="hero">
      <h4 className="hero__header">Learn new skills from the best.</h4>
      <HeroSearch className="hero__search" />
    </div>

  )
}

export default connect()(Hero)
