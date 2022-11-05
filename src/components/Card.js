import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--photo" src={`../../images/${props.img}`}/>
      <div className="card--stats">
        <img className="card--star" src="../../images/star.png"/>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) - </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><strong>From ${props.price}</strong> / person</p>
    </div>
  )
}