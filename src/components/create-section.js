import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSection } from '../actions/'

class SectionCreate extends Component {

  handleSubmit(event) {
    event.preventDefault()
    let params = {
      section: {
        trail_id: this.props.trail,
        title: this.refs.section_title.value
      }
    }
    this.props.createSection(params)
  }

  render() {
    return (
      <form className="section_create" onSubmit={this.props.handleSubmit} >
        <label>Section title: <input type="text" ref="section_title" /></label>
        <br /><button>Save Trail</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { createSection }, dispatch)
}

const mapStateToProps = store => {
  return {
    trail: store.trail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionCreate)
