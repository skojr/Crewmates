import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import more from "./more.png";

const Card = (props) => {
  return (
    <div className="Card">
      <Link to={`edit/${props.id}`}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h1 className="name">Name: {props.name}</h1>
      <h4 className="speed">Speed: {props.speed}</h4>
      <h4 className="intellect">Intellect: {props.intellect}</h4>
      <Link to={`more-info/${props.id}`}>
        <h2 className="infoLink">More Info</h2>
      </Link>
    </div>
  );
};

export default Card;

