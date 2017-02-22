import React from 'react'
import { connect } from 'react-redux'
import TrailCard from './trail-card'

// stretch: Add a "no results shown" for props length 0

const TrailSearchResults = props => {
  return (
   <div className="trail-feature">
      {props.trailResults.length ? <h4 className="titleize center">Search Results</h4> : "" }
     <div className="filter-results">
       { props.trailResults.map( (trail, i) => <TrailCard trail={trail} key={i}/> ) }
     </div>
   </div>
  )
}

const mapStateToProps = store => {
  return {
    trailResults: store.trailResults.search
  }
}

export default connect(mapStateToProps,null)(TrailSearchResults)
