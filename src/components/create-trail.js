import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createTrail } from '../actions/'

class CreateTrail extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const trail = {trail: {
      trailCategorie: this.refs.trailCategorie.value,
      trailTitle: this.refs.trailTitle.value,
      trailDescription: this.refs.trailDescription.value,
      sections: [
        // this.refs.sectionTitle.value: ['1']
        {[this.refs.sectionTitle.value]:[
          {[this.refs.resourceTitle.value]: this.refs.resourceUrl.value}
        ]}
      ]
      }
    }
    this.props.createTrail(trail)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Create a new Trail</h1>
          <label htmlFor="trailCategorie">Select a categorie: </label>
          <select ref="trailCategorie" name="trailCategorie">
            <option value="Design">Design</option>
            <option value="Programming" selected>Programming</option>
          </select><br />

          <label htmlFor="trailTitle">Title: </label>
          <input ref="trailTitle" id="trailTitle"/><br />

          <label htmlFor="trailDescription">Description: </label>
          <textarea  ref="trailDescription" id="trailDescription" /><br />

           <h2>Trail sections</h2>
           <label htmlFor="sectionTitle">Title: </label>
           <input ref="sectionTitle" id="sectionTitle"/><br />

           <h3>Trail resources</h3>
           <label htmlFor="resourceTitle">Resource title: </label>
           <input ref="resourceTitle" id="resourceTitle"/><br />
           <label htmlFor="resourceUrl">Resource link: </label>
           <input ref="resourceUrl" id="resourceUrl"/><br />

            <button type="submit">Submit</button>
        </form>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createTrail}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTrail)
