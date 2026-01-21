import React, { useState } from "react";

const Practice1 = () => {
  const [num, setNum] = useState({ user: "Shaqueeb Ahmad", age: 28 });
  const handleClick = () => {
    const newNum = { ...num };
    newNum.user = "Afzal Hussain";
    newNum.age = 31;
    setNum(newNum);
  };
  return (
    <div>
      <h1>
        {num.user}, {num.age}
      </h1>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Practice1;
