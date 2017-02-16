import React, { Component } from 'react'
import { fetchTrail } from '../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TrailSection from './trail-section'

class EditTrail extends Component {

  componentWillMount() {
    this.props.fetchTrail(this.props.params.id)
    // this.props.fetchSections()
  }

  addSection() {

  }

  renderSections() {
    return this.state.sections.map( (section, i) => <form className="section" key={i} ><label>Section: <input type="text" className="section_input" placeholder="Enter section title here" /></label></form>)
  }

  renderCurrentTrail() {
    if (this.props.currentTrail === null) {
      return <h1>Loading...</h1>
    } else {
      let currentTrail = this.props.currentTrail
      let author = this.props.currentTrail.author
      return (
        <div id="trail_container">
          <h1>{currentTrail.title}</h1>
          <h3>{currentTrail.category}</h3>
          <h4>{currentTrail.description}</h4>
          <div className="trail-sections">
            <button onClick={this.addSection.bind(this)}>Add Section</button>
          </div>
        </div>
      )
    }
  }

  render() {
    console.log(this.props.currentTrail)
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
