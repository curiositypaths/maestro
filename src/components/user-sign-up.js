import React, { Component } from 'react'

export default class UserSignUp extends Component {
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
          <input type="password" ref="userPassword" id ='password'/><br />
          <label htmlFor="password-confirmation">Password confirmation: </label>
          <input type="password" ref="passwordConfirmation" id='password-confirmation'/><br />
          <button type="submit">Submit</button>
        </form>
      </div>
      )
  }
}
