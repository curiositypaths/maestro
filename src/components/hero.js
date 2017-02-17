import React from 'react'
import HeroSearch from './hero-search'
import TrailCard from './trail-card'
import { connect } from 'react-redux'


const Hero = props => {
  return (
    <div id="hero">
      <h4>Learn new skills from the best.</h4>
      <HeroSearch />
      <div>{ props.trailResults.map( (trail, i) => <div className="trail-card" key={i}>
        <h3>Title: {trail.title}</h3>
        <p>{trail.description}</p>
      </div>) }</div>
    </div>

  )
}

const mapStateToProps = store => {
  return {
    trailResults: store.trailResults
  }
}

export default connect(mapStateToProps)(Hero)
