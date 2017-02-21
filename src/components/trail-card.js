import React from 'react'

export default function TrailCard(props) {
  return (
  <div className="filter-results__trail-card">
    <div className="filter-results__trail-card__thumb"></div>
    <a href={`/trails/${props.trail.id}`}><h3 className="bold"> {props.trail.title}</h3></a>
    <p>{`${props.trail.description.split(" ").slice(0, 25).join(" ")}...`}</p>
  </div> )
}
