import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSection } from '../actions/'

class SectionCreate extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let params = {
      section: {
        trail_id: this.props.currentTrail.id,
        title: this.refs.section_title.value
      }
    }
    this.props.createSection(params)
    this.refs.section_title.value = ''
  }

  render() {
    return (
      <div>
        {this.props.currentTrail.sections.map( (section, i) => <p id={i}>{section.title}</p>)
            }
        <form className="section_create" onSubmit={this.handleSubmit} >
          <label>Section title:
            <input type="text" ref="section_title" />
            <button >Add section</button>
          </label>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { createSection }, dispatch)
}

const mapStateToProps = store => {
  return {
    currentTrail: store.currentTrail,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionCreate)
