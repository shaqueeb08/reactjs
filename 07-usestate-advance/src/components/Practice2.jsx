import React, { useState } from "react";

const Practice1 = () => {
  const [num, setNum] = useState([10, 20, 30]);
  const handleClick = () => {
    const newNum = [...num];
    newNum.push(40);
    setNum(newNum);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Practice1;
