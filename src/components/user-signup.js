import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions/'

class UserSignUp extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {user: {
      first_name: this.refs.firstName.value,
      last_name: this.refs.lastName.value,
      email: this.refs.email.value,
      password: this.refs.userPassword.value,
      password_confirmation: this.refs.passwordConfirmation.value
    }}
    this.props.createUser(user)
  }

  render() {
    return (
      <div className="container">
        <h3 className="trail-container__title">Register a new account</h3>
        <form onSubmit={this.handleSubmit} className="section-inner">
          <label className="section-inner__input"><strong>First Name: </strong> <input ref="firstName" className="max" /></label>
          <label className="section-inner__input"><strong>Last Name: </strong> <input ref="lastName" className="max" /></label>
          <label className="section-inner__input"><strong>Email: </strong> <input ref="email" id="email" className="max" /></label>
          <label className="section-inner__input"><strong>Password: </strong> <input type="password" ref="userPassword" id="password" className="max" /><br /></label>
          <label className="section-inner__input"><strong>Password confirmation:</strong> <input type="password" ref="passwordConfirmation" id='password-confirmation' className="max" /></label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
