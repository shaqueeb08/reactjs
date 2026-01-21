import React from "react";
const Card1 = () => {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          click
        </button>
        <button
          onClick={() => {
            console.log("explore");
          }}
        >
          explore
        </button>
      </div>
    </div>
  );
};

export default Card1;
