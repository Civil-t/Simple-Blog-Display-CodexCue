import React from "react";
import "./Card.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Card = ({ logo, car, name, price, seat, speaker, speed }) => {
  return (
    <>
      <div className="container">
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <img
            src={car}
            alt={`${name} car`}
            style={{ width: "100%", height: "100%" }}
          />
          <img
            id="glowing-btn"
            src={logo}
            alt={`${name} logo`}
            style={{ position: "absolute", top: "0", left: "0" }}
          />
        </div>

        <div id="name">{name}</div>
        <div id="grid-container">
          <div className="grids">
            <i className="bi bi-speedometer2" id="icon"></i>
            <h5>{speed}</h5>
          </div>
          <div className="grids">
            <i className="bi bi-cash-stack" id="icon"></i>
            <h5>{price}</h5>
          </div>
          <div className="grids">
            <i className="bi bi-people" id="icon"></i>
            <h5> {seat}</h5>
          </div>
          <div className="grids">
            <i className="bi bi-soundwave" id="icon"></i>
            <h5>{speaker}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
