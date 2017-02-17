import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { fetchUser } from '../actions/index'
import { authUser, logOutUser } from '../actions/index'

class NavBar extends Component {
	constructor(props) {
		super(props)
    this.currentUserIsSet = this.currentUserIsSet.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
	}

	componentMounted() {
    this.setCurrentUser()
  }

  setCurrentUser() {
    this.props.authUser(sessionStorage.jwt)
  }

  currentUserIsSet() {
    if (this.props.users.currentUser === undefined)
      return true
    else if (this.props.users.currentUser.user_id === null) {
      return true
    } else {
      return false
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
      logInAndOutOutOptions = <p onClick={ this.handleLogout } className="btn btn-link">Logout</p>
    } else {
      logInAndOutOutOptions = <a href='login' className="btn btn-link">Login</a>
    }
    console.log('rendering navbar')
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
