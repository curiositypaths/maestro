import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authUser, logOutUser } from '../actions/index'

class NavBar extends Component {
	constructor(props) {
		super(props)
    this.currentUserIsSet = this.currentUserIsSet.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
	}

	componentDidMount() {
    this.setCurrentUser()
  }

  setCurrentUser() {
    this.props.authUser(sessionStorage.jwt)
  }

  currentUserIsSet() {
    if (this.props.users.currentUser === undefined)
      return false
    else if (this.props.users.currentUser.user_id === 'null' || this.props.users.currentUser.user_id === null) {
      return false
    } else {
      return true
    }
  }

  handleLogout() {
    event.preventDefault()
    this.props.logOutUser()
    this.setCurrentUser()
  }

	render() {
    let logInAndOutOutOptions = null
    if (this.currentUserIsSet() === true) {
      logInAndOutOutOptions = <div className="nav"><a href={`/users/${this.props.users.currentUser.user_id}`}>My Profile</a><p onClick={ this.handleLogout } className="btn btn-link">Logout</p></div>
    } else {
      logInAndOutOutOptions = <div><a href='/login' className="btn btn-link">Login</a><a href='/register' className="btn btn-link">Register</a></div>
    }

		return (
		<nav className="navbar container">
			<div className="columns">
			<section className="navbar-section" id="logo">
				<a href="/"><h1>Maestro</h1></a>
			</section>
			<section className="navbar-section">
        {logInAndOutOutOptions}
			</section>
		</div>
		</nav>
	)
	}
}

const mapStateToProps = store => {
  return {
    users: store.users
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({authUser, logOutUser}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
