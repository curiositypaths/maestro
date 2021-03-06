import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TrailCard from './trail-card'
import { authUser, getTrailsUserFollows } from '../actions'

class TrailsUserFollows extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.users.currentUser.id === null && nextProps.users.currentUser.id !== null) {
      this.props.getTrailsUserFollows({'id': nextProps.users.currentUser.id})
    }
  }

  trailsFollowedByUser() {
    let trailsFollowedByUser = this.props.followedTrails.length !== 0 ? this.props.followedTrails.map( (trail, i) => <TrailCard trail={trail} key={i}/> ) : <div>No trails</div>

    return (
      <div className="featured-trails">
        <h4 className="titleize center">My current trails:</h4>
        <div className="filter-results">
          {trailsFollowedByUser}
        </div>
      </div>
      )

  }

  render() {
    return (
      <div className="trail-feature">
        { this.props.users.currentUser.id ==! null ? this.trailsFollowedByUser() : <div></div>}
      </div>
    )
  }

}

const mapStateToProps = store => {
  return {
    users: store.users,
    followedTrails: store.followedTrails
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getTrailsUserFollows, authUser }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TrailsUserFollows)
