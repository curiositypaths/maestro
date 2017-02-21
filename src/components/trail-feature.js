import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TrailCard from './trail-card'
import { fetchFeaturedTrails } from '../actions'

class TrailFeature extends Component {
  componentDidMount() {
    this.props.fetchFeaturedTrails()
  }

  render() {
    let featuredTrailsList = (this.props.featuredTrails) ? this.props.featuredTrails.map( (trail, i) => <TrailCard trail={trail} key={i}/> ) : <div></div>
    return (
      <div className="trail-feature">
        <h4>Featured Trails:</h4>
        { featuredTrailsList }
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
