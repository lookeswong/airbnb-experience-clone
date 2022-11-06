import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--photo" src={`../../images/${props.coverImg}`}/>
      <div className="card--stats">
        <img className="card--star" src="../../images/star.png"/>
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) - </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><strong>From ${props.price}</strong> / person</p>
    </div>
  )
}