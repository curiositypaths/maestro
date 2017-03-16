import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TrailCard from './trail-card'
import { fetchFeaturedTrails } from '../actions'

class TrailFeature extends Component {
  componentDidMount() {
    this.props.fetchFeaturedTrails()
  }

  displayFeaturedTrails() {
    let featuredTrailsList = (this.props.featuredTrails) ? this.props.featuredTrails.map( (trail, i) => <TrailCard trail={trail} key={i}/> ) : <div></div>
    return (
      <div>
        <h4 className="titleize center">Featured Trails:</h4>
        { featuredTrailsList }
      </div>
      )
  }

  render() {

    return (

      <div className="featured-trails">
        <div className="filter-results">
          { this.displayFeaturedTrails() }
        </div>
      </div>
    )
  }

}

const mapStateToProps = store => {
  return {
    featuredTrails: store.trailResults.featured,
    trails: store.trails
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFeaturedTrails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailFeature)
