import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchTrails } from '../actions/'
import _ from 'lodash'

class HeroSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keywords: ["JavaScript", "how to cook", "photography", "editing", "C++", "Redux", "color theory", "programming", "how to be human"],
      featured: "programming",
    }
  }

  componentWillMount() {
    this.handleSearch = _.debounce(this.handleSearch, 500)
  }

  componentDidMount() {
    this.interval = setInterval(this.shuffleFeatured.bind(this), 2500)
  }

  shuffleFeatured() {
    let rand = Math.floor(Math.random() * this.state.keywords.length)
    this.setState({...this.state, featured: this.state.keywords[rand]})
  }

  handleSearch() {
    if (this.refs.search.value.trim()) {
      this.props.searchTrails(this.refs.search.value)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

// FIXME: event handler callbacks to set and clear shuffler should be abstracted into functions

  render() {
    return <form className="hero__search" onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder={this.state.featured} ref="search" onClick={e => { e.target.placeholder = ""
      clearInterval(this.interval)
    }} onBlur={e => {
      e.target.placeholder = this.state.featured
      this.interval = setInterval(this.shuffleFeatured.bind(this), 2500)
    }} onChange={this.handleSearch.bind(this)} className="hero__search__input bold" />
  </form>
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchTrails }, dispatch)
}

export default connect(null, mapDispatchToProps)(HeroSearch)
