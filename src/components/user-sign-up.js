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
    const user = {email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input ref="email" id="email"/><br />
          <label htmlFor="password">Password: </label>
          <input type="password" ref="userPassword" id="password" /><br />
          <label htmlFor="password-confirmation" >Password confirmation: </label>
          <input type="password" ref="passwordConfirmation" id='password-confirmation'/><br />
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
