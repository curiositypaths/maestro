import React, { Component } from 'react'
import { connect } from 'react-redux'

class TrailSection extends Component {
  // addSection() {
  // }

  render() {
    return (
      <div>
        {this.props.currentTrail.sections.map( (section, i) => <form className="section" key={i} ><label>Section: <input type="text" className="section_input" placeholder="Enter section title here" /></label></form>)}
        <button onClick={this.addSection.bind(this)}>Add Section</button>
      </div>
    )
  }
}

const mapStateToProps = store => {return { currentTrail: store.currentTrail }}
export default connect(mapStateToProps)(TrailSection)
