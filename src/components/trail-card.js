import React from 'react'

export default function TrailCard(props) {
  return (
  <div className="filter-results__trail-card" key={props.index}>
    <a href={`/trails/${props.trail.id}`}><h3>Title: {props.trail.title}</h3></a>
    <p>{props.trail.description}</p>
  </div> )
}
