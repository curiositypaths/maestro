import React, { Component } from 'react'
import { fetchTrail } from '../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class EditTrail extends Component {

  // before the component mounts, you should take the id from params
  // you should fire a mapped dispatch that fetches the current trail
  // after receiving the response, via the promise resolution
  // you should be able to set the currentTrail store key to the entire trail object

  componentWillMount() {
    this.props.fetchTrail(this.props.params.id)
  }

  renderCurrentTrail() {
    if (this.props.currentTrail === null) {
      return <h1>Loading...</h1>
    } else {
      console.log(this.props.currentTrail)
      let currentTrail = this.props.currentTrail
      let author = this.props.currentTrail.author
      return (
        <div id="trail_container">
          <h1>{currentTrail.title}</h1>
          <h3>{currentTrail.category}</h3>
          <h4>{currentTrail.description}</h4>

        </div>
      )
    }
  }

  render() {
    return (
      this.renderCurrentTrail.call(this)
    )
  }
}

const mapStateToProps = store => {
  return {
    currentTrail: store.currentTrail
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchTrail}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTrail)
