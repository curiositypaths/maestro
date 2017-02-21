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
      <div className="container">
        <form className="section-inner" onSubmit={this.handleLogin.bind(this)}>
          <h1 className="trail-container__title" >Log In</h1>
          <label className="section-inner__input">Email: <input type="text" placeholder="Enter email" ref="email" required className="max" /></label><br /><br />
          <label className="section-inner__input">Password: <input type="password" placeholder="Enter password" ref="password" required className="max" /></label><br /><br />
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loginUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserLogin)
