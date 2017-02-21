import React from 'react'

export default function TrailCard(props) {
  debugger
  return (
  <div className="filter-results__trail-card">
    <a href={`/trails/${props.trail.id}`}>
    <img src={`${props.trail.image_url}`} alt="props.trail.description" className="" /></a>
    <div className="filter-results__trail-card__copy">
      <a href={`/trails/${props.trail.id}`}>
        <h3 className="bold"> {props.trail.title}</h3>
      </a>
      <p>{`${props.trail.description.split(" ").slice(0, 25).join(" ")}...`}</p>
    </div>
  </div> )
}
