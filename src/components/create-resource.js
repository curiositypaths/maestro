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
          <div className="resource-card"><div className="resource-thumb" style={{ backgroundImage: `url('${ resource.image_url }')` }}></div><div className="resource-details"><a href={ resource.url }><h4>{ resource.title }</h4></a><p>{ resource.notes }</p></div></div>
          )

        }
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderResources.call(this) }
        <form className="resource_create" onSubmit={this.handleSubmit} >
          <label>Resource title:
            <input type="text" ref="resource_title" /><br />
          </label>
          <label>Resource URL:
            <input type="text" ref="resource_url" /><br />
          </label>
          <label>What exactly will this resource teach you?<br /><textarea ref="resource_notes" /><br /></label>
          <button>Add resource</button>
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
