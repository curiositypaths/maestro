import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authUser, logOutUser, getTrailsUserFollows } from '../actions/index'
import { Router, Route, Link } from 'react-router'

class NavBar extends Component {
	constructor(props) {
		super(props)
    this.currentUserIsSet = this.currentUserIsSet.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleGetUserTrails = this.handleGetUserTrails.bind(this)
	}

  componentDidMount() {
    this.setCurrentUser()
  }

  setCurrentUser() {
    this.props.authUser(sessionStorage.jwt)
  }

  currentUserIsSet() {
    if (this.props.users.currentUser === undefined || this.props.users.currentUser === null)
      return false
    else if (this.props.users.currentUser.id === 'null' || this.props.users.currentUser.id === null) {
      return false
    } else {
      return true
    }
  }

  handleLogout(event) {
    event.preventDefault()
    this.props.logOutUser()
  }

  handleGetUserTrails() {
    event.preventDefault()
    let user = {'userId': this.props.users.currentUser.user_id}
    this.props.getTrailsUserFollows(user)
  }

	render() {
		let logInAndOutOutOptions = ''
    if (this.currentUserIsSet() === true) {
      logInAndOutOutOptions = <div className="navbar__buttons__container"><a href={`/trails/new`}>Post a new trail</a><a href={`/users/${this.props.users.currentUser.id}`}>Profile</a><a href="" onClick={ this.handleLogout }>Logout</a></div>
    } else {
      logInAndOutOutOptions = <div className="navbar__buttons__container"><a href='/login'>Login</a><Link to={'/register'}>Register</Link></div>
    }
		return (
		<nav className="navbar container">
      {/* <a onClick={ this.handleGetUserTrails }>Get user trails</a> */}
			<div className="columns">
			<section className="navbar__header">
				<a href="/"><h1 className="bold">Maestro</h1></a>
			</section>
			<section className="navbar__buttons">
        {logInAndOutOutOptions}
			</section>
		</div>
		</nav>
	)
	}
}

const mapStateToProps = store => {
  return {
    users: store.users,
    followedTrails: store.followedTrails
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({authUser, logOutUser, getTrailsUserFollows}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
