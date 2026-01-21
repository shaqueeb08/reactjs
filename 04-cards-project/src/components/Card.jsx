import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="logo" />
          <button>Save</button>
        </div>
        <div className="middle">
          <h2>
            {props.companyName} <span>{props.posted}</span>
          </h2>
          <h1>{props.post}</h1>
          <div className="tag">
            <p>{props.type}</p>
            <p>{props.level}</p>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div>
            <h3>{props.price}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
