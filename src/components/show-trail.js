import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTrail, authUser, voteForTrack, followTrack, unFollowTrack } from '../actions/'
import { bindActionCreators } from 'redux'

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
    let voteParams = {trailId: this.props.currentTrail.id,userId: this.props.users.currentUser.user_id}
    console.log(voteParams)
    this.props.voteForTrack(voteParams)
  }

  handleFollow(event) {
    event.preventDefault()
    let followParams = {trailId: this.props.currentTrail.id,userId: this.props.users.currentUser.user_id}
    this.props.followTrack(followParams)
  }

  handleUnFollow(event) {
    event.preventDefault()
    let followParams = {trailId: this.props.currentTrail.id,userId: this.props.users.currentUser.user_id}
    this.props.unFollowTrack(followParams)
  }

  renderSections() {
    let sections = this.props.currentTrail.sections
    return sections.map( (section, i) =>
      <div key={i} className="trail-section">
        <h3>{ section.title }</h3>
        <ul>
          { section.resources.map( (resource, i) => <li key={i}>{resource.title}</li>) }
        </ul>
      </div>)
  }

  renderTrail() {
    if (!!this.props.currentTrail) {
      let currentTrail = this.props.currentTrail
      let author = this.props.currentTrail.author
      let currentUser = this.props.users.currentUser
      let trailVotes = this.props.currentTrail.votes.length
      let usersVotes = this.props.currentTrail.votes.filter(function(vote) {if (this.props.users.currentUser.user_id === vote.user_id) {return 'User voted for trail'} }.bind(this))
      let userVoteForTrack = usersVotes.length > 0
      let trailFollower = this.props.currentTrail.follows.filter(function(follower) {if (this.props.users.currentUser.user_id === follower.user_id) {return 'User voted for trail'} }.bind(this))
      let userFollowsTrail = trailFollower.length > 0

      return (
        <div className="trail-container">
          <h1>{ currentTrail.title } ({trailVotes})</h1>
          <h4>{ currentTrail.description }</h4>

          <h4>{userVoteForTrack ? <span></span> : <span onClick={this.handleVote} className="fa fa-thumbs-up" aria-hidden="true"></span>}</h4>
          <h4> {userFollowsTrail ? <button onClick={this.handleUnFollow}>Unfollow Trail</button> : <button onClick={this.handleFollow}>Follow trail</button> }</h4>
          <h5>AUTHOR ID: { author.id }</h5>
          <h5>CURRENT USER ID: { currentUser.id }</h5>
           {
             (currentUser.user_id === author.id) ?
               <a href={`/trails/${currentTrail.id}/edit`}>Edit this trail</a> : <p>Authored by <a href={`/users/${author.id}`}>{author.email}</a></p>
           }
           <div id="trail-sections">
             This trail has { currentTrail.sections.length } sections.
             { this.renderSections.call(this) }
           </div>
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
