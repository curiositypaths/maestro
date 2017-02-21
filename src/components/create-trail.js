import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createTrail, fetchCategories, addCategories } from '../actions/'
import CreateSection from './create-section'

class CreateTrail extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderCategories = this.renderCategories.bind(this)
    this.state = {
      sections: []
    }
  }

  componentWillMount() {
    this.props.fetchCategories()
  }

  handleSubmit(event) {
    event.preventDefault()
    const trail = {
      trail: {
        category_id: this.refs.category.value,
        title: this.refs.title.value,
        description: this.refs.description.value,
        image_url: this.refs.image_url.value
      },
      jwt: sessionStorage.getItem('jwt')
    }
    this.props.createTrail(trail)
  }

  renderCategories() {
    return this.props.categories.map( (category, i) => <option value={category.id} key={i} >{ category.name }</option>)
  }

  renderSections() {
    return this.state.sections.map( (section, i) =>
      <CreateSection key={i} title={section.title} />
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="trail-container__title">Create a new Trail</h1>
        <p>Trails are a curated list of tutorials that help you learn a new skill. Think of all the resources and guides that helped you get to where you are today. How would you lead a friend down the same path, but <em>better</em>?</p>
        <form onSubmit={this.handleSubmit} className="section-inner">
          <label>Select a category: </label>
          <select ref="category" required >
            { this.renderCategories() }
          </select><br />
          <label><strong>Title:</strong> <input ref="title" required className="titleize elongate" /></label><br /><br />
          <label><strong>Description:</strong> <br /><textarea ref="description" className="max" required /></label><br /><br />
          <label><strong>Add a header image (via URL):</strong> <input type="text" ref="image_url" className="elongate" /></label>
          <br />
            <button>Add this trail</button>
        </form>
      </div>

      )
  }
}


const mapStateToProps = store => {
  return {
    categories: store.categories,
    trail: store.trail
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createTrail, fetchCategories, addCategories }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrail)
