import React, { Component } from 'react'
import { connect } from 'react-redux'


class TrailSection extends Component {
  render() {
    return (
      <h1>Trail Section</h1>
    )
  }
}

const mapStateToProps = store => {return { currentTrail: store.currentTrail }}
export default connect(mapStateToProps)(TrailSection)
