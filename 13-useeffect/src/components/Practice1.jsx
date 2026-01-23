import React, { useEffect, useState } from "react";

const practice1 = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(10);

  useEffect(() => {
    console.log("useEffect called");
  }, [num]);

  return (
    <div>
      <h2>num is {num}</h2>
      <h2>num2 is {num2}</h2>
      <button
        onMouseEnter={() => setNum(num + 1)}
        onMouseLeave={() => setNum2(num2 - 1)}
      >
        hover
      </button>
    </div>
  );
};

export default practice1;
