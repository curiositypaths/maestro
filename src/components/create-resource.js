import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createResource } from '../actions/'

class ResourceCreate extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let idOfSection = this.props.sectionID

    let params = {
      resource: {
        section_id: idOfSection,
        title: this.refs.resource_title.value,
        url: this.refs.resource_url.value,
        notes: this.refs.resource_notes.value
      }
    }
    this.props.createResource(params)
    this.refs.resource_title.value = ''
    this.refs.resource_url.value = ''
    this.refs.resource_notes.value = ''

  }

  renderResources() {
    let resources =  this.props.currentTrail.sections[this.props.sectionIndex].resources
    return (
      <div className="resource-list">
        { resources.map( (resource, i) =>
          <div className="resource-card" key={i}><img className="resource-card__thumb" src={resource.image_url } alt={resource.description} /><div className="resource-card__details"><a href={ resource.url }><h4>{ resource.title }</h4></a><p>{ resource.notes }</p></div></div>
          )

        }
      </div>
    )
  }

  render() {
    return (
      <div className="section-inner">
        { this.renderResources.call(this) }
        <form className="resource-create" onSubmit={this.handleSubmit} >
          <label><strong>Resource title:</strong> &nbsp;
            <input type="text" ref="resource_title" /><br />
          </label>
          <label><strong>Resource URL:</strong> &nbsp;
            <input type="text" ref="resource_url" /><br />
          </label>
          <div className="resource-create__notes-container"><label><strong>What exactly will this resource teach you?</strong><br /><textarea ref="resource_notes" className="resource-create__notes" /><br /></label></div>
          <button>Add resource</button>
          <hr className="section__hr" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { createResource }, dispatch)
}

const mapStateToProps = store => {
  return {
    currentTrail: store.currentTrail,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceCreate)
