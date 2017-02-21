import React from 'react'
import HeroSearch from './hero-search'
import { connect } from 'react-redux'


const Hero = props => {
  return (
    <div className="hero">
      <h4 className="hero__header">Learn from the best. Type to see what tutorials experts think are worth your time. <br /><br /> I want to learn <HeroSearch className="hero__search" /> today.</h4>

    </div>

  )
}

export default connect()(Hero)
