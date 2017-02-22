import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTrail, authUser, voteForTrack, followTrack, unFollowTrack } from '../actions/'
import { bindActionCreators } from 'redux'
import ResourceCard from './resource-card'

class ShowTrail extends Component {
  constructor() {
    super()
    this.handleVote = this.handleVote.bind(this)
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnFollow = this.handleUnFollow.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrail(this.props.params.id)
    .then(() => this.authCurrentUser())
  }

  authCurrentUser() {
    return (sessionStorage.jwt) ? this.props.authUser(sessionStorage.jwt) : null
  }

  handleVote() {
    let voteParams = {trailId: this.props.currentTrail.id, userId: this.props.users.currentUser.id}
    console.log(voteParams)
    this.props.voteForTrack(voteParams)
  }

  handleFollow(event) {
    event.preventDefault()
    let followParams = {trailId: this.props.currentTrail.id,userId: this.props.users.currentUser.id}
    this.props.followTrack(followParams)
  }

  handleUnFollow(event) {
    event.preventDefault()
    let followParams = {trailId: this.props.currentTrail.id,userId: this.props.users.currentUser.id}
    this.props.unFollowTrack(followParams)
  }

  renderSections() {
    let sections = this.props.currentTrail.sections
    return sections.map( (section, i) =>
      <div key={i} className="trail-section">
        <h3 className="section__title center">{ section.title }</h3>
          { section.resources.map( (resource, i) => <ResourceCard resource={resource} key={i} />)}
      </div>)
  }

  renderTrail() {
    if (!!this.props.currentTrail) {
      let currentTrail = this.props.currentTrail
      let author = this.props.currentTrail.author
      let currentUser = this.props.users.currentUser
      let trailVotes = this.props.currentTrail.votes.length
      let usersVotes = this.props.currentTrail.votes.filter(function(vote) {if (this.props.users.currentUser && this.props.users.currentUser.id === vote.user_id) {return 'User voted for trail'} }.bind(this))
      let userVoteForTrack = usersVotes.length > 0
      let trailFollower = this.props.currentTrail.follows.filter(function(follower) {if (this.props.users.currentUser.id === follower.user_id) {return 'User voted for trail'} }.bind(this))
      let userFollowsTrail = trailFollower.length > 0

      return (
        <div className="container">
          <h1 className="trail-container__title trail-show__title bold">
            { currentTrail.title }
          </h1>

          <h4 className="trail-container__title">
            By { author.first_name } { author.last_name }
          </h4>

          <section className="trail-container__description">
            { currentTrail.description }
          </section>

          <div className="trail-container__title">
            <button className="inline-margin">{userVoteForTrack ? <span className="fa fa-thumbs-up" onClick={this.handleVote}></span> : <span onClick={this.handleVote} className="fa fa-thumbs-o-up" aria-hidden="true"></span>}</button>

            {userFollowsTrail ? <button onClick={this.handleUnFollow} className="inline-margin">Unfollow Trail</button> : <button onClick={this.handleFollow} className="inline-margin">Follow trail</button> }
          </div>


          <div className="section-inner">
          <div className="resource-list">
             {
               (currentUser && currentUser.id === author.id) ?
                 <form action={`/trails/${currentTrail.id}/edit`}><button>Edit this trail</button></form> : <div></div>
             }
             <div className="trail-sections">
               { this.renderSections.call(this) }
             </div>
           </div></div>
        </div>
      )
    } else {
      return <h1></h1>
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
  users: store.users
  }
}

const mapDispatchToProps = dispatch => { return bindActionCreators({ fetchTrail, authUser, voteForTrack, followTrack, unFollowTrack }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTrail)
