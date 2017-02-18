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
        url: this.refs.resource_url.value
      }
    }
    this.props.createResource(params)
    this.refs.resource_title.value = ''
    this.refs.resource_url.value = ''
  }

  render() {
    let resources =  this.props.currentTrail.sections[this.props.sectionIndex].resources
    return (
      <div>
        {
          resources.map( (resource, i) => <p key={i}>{resource.title} / {resource.url}</p>) // Update the resources to display reference
        }
        <form className="resource_create" onSubmit={this.handleSubmit} >
          <label>Resource title:
            <input type="text" ref="resource_title" /><br />
          </label>
          <label>Resource URL:
            <input type="text" ref="resource_url" /><br />
          </label>
          <button >Add resource</button>
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
