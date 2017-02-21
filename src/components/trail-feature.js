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
    return (
      <div className="trail-feature">
        <h4>Featured Trails:</h4>
        {/* {props.trails.map(trail => <TrailCard trail={trail} />)} */}
      </div>
    )
  }

}

const mapStateToProps = store => {
  return {
    featuredTrails: store.trailResults.featured
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFeaturedTrails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailFeature)
