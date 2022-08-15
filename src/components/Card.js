import React from "react";
import star from "../images/star.png";

//object props
const Card = ({ img, rating, reviewCount, location, title, price, openSpots }) => {

  let badgeText 
  if(openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(location==="Online"){
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {openSpots === 0 && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={img} />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{rating}</span>
        <span className="gray"> ({reviewCount}) •</span>
        <span className="gray">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <span className="bold">From ${price} </span> / person
      </p>
    </div>
  );
};

export default Card;
