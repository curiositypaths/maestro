import React from 'react'

export default function TrailCard(props) {
  return (
  <div className="trail-card" key={props.index}>
    <h3>Title: {props.trail.title}</h3>
    <p>{props.trail.description}</p>
  </div> )
}
