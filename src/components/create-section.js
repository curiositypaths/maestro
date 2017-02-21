import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSection } from '../actions/'
import ResourceCreate from './create-resource'

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
    //this.props.currentTrail.sections.map( function(section, i) {debugger})
    return (
      <div className="section-create">
        {this.props.currentTrail.sections.map( (section, i) => <div key={i} className="section">
          <h3 className="section__title center">{section.title}</h3>
        <ResourceCreate sectionID={section.id} sectionIndex={i} className="section__resource" />
      </div>)}
        <form className="section-create__form center" onSubmit={this.handleSubmit} >
            <input type="text" ref="section_title" placeholder="Add a new section" className="section__new-section-input" />
            <button >Add a new section</button>
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
