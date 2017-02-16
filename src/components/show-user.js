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
        <div className="user-profile">
          <h1>{user.email}</h1>
          <h4>User ID: {user.id}</h4>
          <h2>This user has { user.trails.length } trails</h2>
          <ul>{
            user.trails.map( (trail, i) => <li key={i}><a href={`/trails/${trail.id}`}>{ trail.title }</a></li> )
          }</ul>
      </div>
    )} else {
      return <h1>Loading...</h1>
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
