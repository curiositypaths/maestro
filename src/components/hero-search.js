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
    return <form className="hero__search" onSubmit={e => e.preventDefault()}><input type="text" placeholder="What will you learn today?" ref="search" onClick={e => e.target.placeholder = ""} onBlur={e => e.target.placeholder = "What will you learn today?"} onChange={this.handleSearch.bind(this)} className="hero__search__input bold" /></form>
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchTrails }, dispatch)
}

export default connect(null, mapDispatchToProps)(HeroSearch)
