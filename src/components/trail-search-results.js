import React from 'react'
import { connect } from 'react-redux'
import TrailCard from './trail-card'

// stretch: Add a "no results shown" for props length 0

const TrailSearchResults = props => {
  return (
   <div className="filter-results">
     { props.trailResults.map( (trail, i) => <TrailCard trail={trail} key={i}/> ) }
   </div>
  )
}

const mapStateToProps = store => {
  return {
    trailResults: store.trailResults.search
  }
}

export default connect(mapStateToProps,null)(TrailSearchResults)
