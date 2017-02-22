import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/index'
import { bindActionCreators } from 'redux'
import TrailCard from './trail-card'

class UserProfile extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.params.id)
  }

  renderTrails(trails) {
    return (
      <div className="resource-list">
       { trails.map((trail, i) => <TrailCard trail={trail} key={i} />) }
     </div>
    )
  }

  renderProfile() {
    if (!!this.props.users.currentlyViewedUser) {
      let user = this.props.users.currentlyViewedUser
      return (
        <div className="featured-list">
          <h2 className="trail-container__title">{`${user.first_name} ${user.last_name}`}</h2>
          <h3 className="trail-container__title">You posted { user.trails.length } trails</h3>
          {
            user.trails.length ? this.renderTrails.call(this, user.trails) : <p>Nothing to show yet... <a href="/trails/new">add a trail</a> and it'll show up here!</p>
          }
          <h3 className="trail-container__title">Your followed trails: </h3>
      </div>
    )} else {
      return <h1></h1>
    }
  }

  render(){
    var els = this.renderProfile.call(this)
    return (
      <div>{ els }</div>
    )
  }
}

const mapStateToProps = function(store) { return { users: store.users }}

const mapDispatchToProps = function(dispatch){ return bindActionCreators({fetchUser}, dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
