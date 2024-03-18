import React from "react";
import "./card.css";

const Card = ({ children, heading, bgClass }) => {
  return (
    <div className={`card-wrapper ${bgClass}`}>
      <h3>{heading}</h3>
      {children}
    </div>
  );
};

export default Card;
