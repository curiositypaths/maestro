import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTrail, authUser } from '../actions/'
import { bindActionCreators } from 'redux'

class ShowTrail extends Component {
  componentDidMount() {
    this.props.fetchTrail(this.props.params.id).then(() => this.authCurrentUser())
  }

  authCurrentUser() {
    (sessionStorage.jwt) ? this.props.authUser(sessionStorage.jwt) : null
  }

  renderSections() {
    let sections = this.props.currentTrail.sections
    return sections.map( section =>
      <div className="trail-section">
        <h3>{ section.title }</h3>
        <ul>
          <li>Hello</li>
        </ul>
      </div>)
  }

  renderTrail() {
    if (!!this.props.currentTrail) {
      let currentTrail = this.props.currentTrail
      let author = this.props.currentTrail.author
      let currentUserId = this.props.currentUser
      return (
        <div className="trail-container">
          <h1>{ currentTrail.title }</h1>
          <h4>{ currentTrail.description }</h4>
          <h5>AUTHOR ID: { author.id }</h5>
          <h5>CURRENT USER ID: { this.props.currentUser}</h5>
           {
             (currentUserId == author.id) ?
               <a href={`/trails/${currentTrail.id}/edit`}>Edit this trail</a> : <p>Authored by <a href={`/users/${author.id}`}>{author.email}</a></p>
           }
           <div id="trail-sections">
             This trail has { currentTrail.sections.length } sections.
             { this.renderSections.call(this) }
           </div>
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }

  render() {
    return (
      this.renderTrail.call(this)
    )
  }
}

const mapStateToProps = store => { return {
  currentTrail: store.currentTrail,
  currentUser: store.currentUser
  }
}

const mapDispatchToProps = dispatch => { return bindActionCreators({ fetchTrail, authUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTrail)
