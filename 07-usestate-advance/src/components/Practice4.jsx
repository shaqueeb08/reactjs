import React, { useState } from "react";

const Practice1 = () => {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Practice1;
