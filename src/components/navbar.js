import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authUser, logOutUser } from '../actions/index'

class NavBar extends Component {
	constructor(props) {
		super(props)
    this.currentUserIsSet = this.currentUserIsSet.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
		this.state = {
			userLoaded: false
		}
	}

	componentDidMount() {
    this.setCurrentUser()
  }

  setCurrentUser() {
    this.props.authUser(sessionStorage.jwt)
		this.setState({ userLoaded: !this.state.userLoaded })
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
		// this.setState({userLoaded: !this.state.userLoaded})
    // this.setCurrentUser()
  }

	render() {
		let logInAndOutOutOptions
		if (!this.state.usersLoaded) {
			logInAndOutOutOptions = <div className="loading" ></div>
		}
    if (this.currentUserIsSet() === true) {
      logInAndOutOutOptions = <div className="navbar__buttons__container"><a href={`/users/${this.props.users.currentUser.user_id}`}>My Profile</a><a href="#logout" onClick={ this.handleLogout }>Logout</a></div>
    } else {
      logInAndOutOutOptions = <div className="navbar__buttons__container"><a href='/login' className="btn btn-link">Login</a><a href='/register' className="btn btn-link">Register</a></div>
    }

		return (
		<nav className="navbar container">
			<section className="navbar__header">
				<a href="/"><h1>Maestro</h1></a>
			</section>
			<section className="navbar__buttons">
        {logInAndOutOutOptions}
			</section>
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
