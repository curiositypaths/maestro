import React from 'react'
import { connect } from 'react-redux'
import TrailCard from './trail-card'


const TrailSearchResults = props => {
  return (
   <div className="filter-results">
     { props.trailResults.map( (trail, i) => <TrailCard trail={trail} key={i}/> ) }
   </div>
  )
}

const mapStateToProps = store => {
  return {
    trailResults: store.trailResults
  }
}

export default connect(mapStateToProps,null)(TrailSearchResults)
