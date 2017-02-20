import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/'

class UserLogin extends Component {
  handleLogin(event) {
    event.preventDefault()
    let userObj = {
      user: {
        email: this.refs.email.value,
        password: this.refs.password.value
      }
    }
    this.props.loginUser(userObj)
  }

  render() {
    return (
      <form className="login_form" onSubmit={this.handleLogin.bind(this)}>
        <h1>Log In</h1>
        <label>Email: <input type="text" placeholder="Enter email" ref="email" required /></label><br /><br />
        <label>Password: <input type="password" placeholder="Enter password" ref="password" required /></label><br /><br />
        <button>Log In</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loginUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserLogin)
