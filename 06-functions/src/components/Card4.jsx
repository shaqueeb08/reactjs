import React from "react";

const Card4 = () => {
  const handleMouseMove = (e) => {
    console.log(e.clientX);
  };
  const handleMouseLeave = () => {
    console.log("Mouse is leaved");
  };
  return (
    <div>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="box"
      ></div>
    </div>
  );
};

export default Card4;
