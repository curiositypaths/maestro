import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createTrail } from '../actions/'
import CreateSection from './create-section'

class CreateTrail extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderCategories = this.renderCategories.bind(this)
    this.state = {
      sections: [{title: "", trail_id: 0}]
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const trail = {
      trail: {
        category_id: this.refs.category.value,
        title: this.refs.title.value,
        description: this.refs.description.value,
      },
      jwt: sessionStorage.getItem('jwt')
    }
    this.props.createTrail(trail)
  }

  renderCategories() {
    return this.props.categories.map( (category, i) => <option value={category} key={i} value={i} >{category}</option> )
    // remember to get rid of value and put in database id
  }

  renderSections() {
    return this.state.sections.map( (section, i) =>
      <CreateSection key={i} title={section.title} />
    )
  }
  // sections: [
  //   // this.refs.sectionTitle.value: ['1']
  //   {[this.refs.sectionTitle.value]:[
  //     {[this.refs.resourceTitle.value]: this.refs.resourceUrl.value}
  //   ]}
  // ]

  render() {

    let sections = this.renderSections()

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Create a new Trail</h1>
          <label>Select a category: </label>
          <select ref="category" placeholder="Select a category" required >
            { this.renderCategories() }
          </select><br />

          <label>Title: <input ref="title" required /></label><br />

          <label>Description: <textarea ref="description" required onBlur={this.handleSubmit} /></label>
          <br />
            <button>Add this trail</button>
        </form>

        <h2>Sections</h2>

        { sections }

      </div>

      )
  }
}
// <h2>Trail sections</h2>
// <label htmlFor="sectionTitle">Title: </label>
// <input ref="sectionTitle" id="sectionTitle"/><br />
//
// <h3>Trail resources</h3>
// <label htmlFor="resourceTitle">Resource title: </label>
// <input ref="resourceTitle" id="resourceTitle"/><br />
// <label htmlFor="resourceUrl">Resource link: </label>
// <input ref="resourceUrl" id="resourceUrl"/><br />

const mapStateToProps = store => {
  return {
    categories: store.categories
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createTrail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrail)
