import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTrail } from '../actions/'
import { bindActionCreators } from 'redux'

class ShowTrail extends Component {
  componentDidMount() {
    this.props.fetchTrail(this.props.params.id)
  }

  renderTrail() {
    if (!!this.props.currentTrail) {
      let currentTrail = this.props.currentTrail
      let author = this.props.currentTrail.author
      return (
        <div className="trail-container">
          <h1>{ currentTrail.title }</h1>
          <h4>{ currentTrail.description }</h4>
          <p>Put together by <a href={`/author/${author.id}`}>{ author.email }</a></p>
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

const mapStateToProps = store => { return { currentTrail: store.currentTrail }}

const mapDispatchToProps = dispatch => { return bindActionCreators({ fetchTrail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTrail)
