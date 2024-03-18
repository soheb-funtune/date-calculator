import React from "react";
import "./card.css";

const Card = ({ children, heading }) => {
  return (
    <div className="card-wrapper">
      <h3>{heading}</h3>
      {children}
    </div>
  );
};

export default Card;
