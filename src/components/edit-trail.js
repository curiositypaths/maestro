import React, { Component } from 'react'
import { fetchTrail, deleteTrail } from '../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SectionCreate from './create-section'

class EditTrail extends Component {
  componentWillMount() {
    this.props.fetchTrail(this.props.params.id)
  }

  deleteTrail() {
    this.props.deleteTrail(this.props.params.id)
  }

  renderCurrentTrail() {
    if (this.props.currentTrail === null) {
      return <h1></h1>
    } else {
      let currentTrail = this.props.currentTrail
      // let author = this.props.currentTrail.author
      return (
        <div id="trail_container">
          <h1>{currentTrail.title}</h1>
          <h3>{currentTrail.category}</h3>
          <h4>{currentTrail.description}</h4>
          <div className="trail-sections">
            <SectionCreate trailId={this.props.currentTrail.id} />
          </div>
          <button onClick={this.deleteTrail.bind(this)}>Delete this Trail</button>
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
  return bindActionCreators({fetchTrail, deleteTrail}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTrail)
