import React from "react";

const Card3 = () => {
  const handleInputClick = () => {
    console.log("Input is clicked");
  };

  const handleInputChange = (val) => {
    console.log(val.target.value);
  };

  return (
    <div>
      <input
        onClick={handleInputClick}
        onChange={handleInputChange}
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        autoComplete="email"
      />
    </div>
  );
};

export default Card3;
