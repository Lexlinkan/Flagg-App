import React from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/${props.name}`);
  };
  
  return (
    <div className="Container">
      <div onClick={handleNavigation} className="Card">
        <div className="flag">
        <img src={props.png} alt="" />
        </div>
        <div className="card-text">
        <h3>{props.name}</h3>
        <p>Capital: {props.capital}</p>
        <p>Population: {props.population}</p>
        </div>
      </div>
    </div>
    
  );
}



