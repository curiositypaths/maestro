import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchTrails } from '../actions/'
import _ from 'lodash'

class HeroSearch extends Component {

  componentWillMount() {
    this.handleSearch = _.debounce(this.handleSearch, 500)
  }

  handleSearch() {
    if (this.refs.search.value.trim()) {
      this.props.searchTrails(this.refs.search.value)
    }
  }

  render() {
    return <form onSubmit={e => e.preventDefault()}><input type="text" placeholder="Enter what you wanna learn" ref="search" onChange={this.handleSearch.bind(this)} className="hero__search" /></form>
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchTrails }, dispatch)
}

export default connect(null, mapDispatchToProps)(HeroSearch)
