import React from "react";

const Card2 = () => {
  return (
    <div>
      <input
        onClick={() => {
          console.log("Input is clicked");
        }}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        id="text"
        name="text"
        type="text"
        placeholder="Enter your full name"
        autoComplete="text"
      />
    </div>
  );
};

export default Card2;
