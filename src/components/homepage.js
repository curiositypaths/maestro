import React, { Component } from 'react'
import Hero from './hero'

class Homepage extends Component {
  render() {
    return (
      <div id="homepage-container">
        <h1>Hello Homepage!</h1>
        <Hero />
      </div>
    )
  }
}

export default Homepage
