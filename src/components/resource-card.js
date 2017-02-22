import React from 'react'

const ResourceCard = props => {
  let resource = props.resource
  return (
  <div className="resource-card"><img className="resource-card__thumb" src={resource.image_url } alt={resource.description} /><div className="resource-card__details"><a href={ resource.url }><h4>{ resource.title }</h4></a><p>{ resource.notes }</p></div></div>
)}

export default ResourceCard
