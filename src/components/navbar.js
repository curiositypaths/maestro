import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

class NavBar extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
    //this.props.fetchTrail(this.props.params.id).then(() => this.authCurrentUser())
  }

	render() {
		debugger
		return (
		<nav className="navbar container">
			<div className="columns">
			<section className="navbar-section" id="logo">
				<a href="/"><h1>Maestro</h1></a>
			</section>
			<section className="navbar-section">
				<a href="/login" data-method='delete' className="btn btn-link">Hello</a>
				<a href="/logout" className="btn btn-link">Goodbye</a>
			</section>
		</div>
		</nav>
	)
	}
}

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchTrail}, dispatch)
}

export default connect(mapStateToProps,null)(NavBar)
