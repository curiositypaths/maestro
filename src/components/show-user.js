import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/index'
import { bindActionCreators } from 'redux'

class UserProfile extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.params.id)
  }

  renderProfile() {
    if (!!this.props.users.currentlyViewedUser) {
      let user = this.props.users.currentlyViewedUser
      return (
        <div className="container">
          <h2 className="trail-container__title">{`${user.first_name} ${user.last_name}`}</h2>
          <h3>Your posted { user.trails.length } trails</h3>
          <ul>{
            user.trails.length ?
            user.trails.map( (trail, i) => <li key={i}><a href={`/trails/${trail.id}`}>{ trail.title }</a></li> ) : <p>Nothing to show yet... <a href="/trails/new">add a trail</a> and it'll show up here!</p>
          }</ul>
          <h3>Your followed trails: </h3>
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
