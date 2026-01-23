import React, { useEffect, useState } from "react";

const Practice2 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(30);

  const aChanging = () => {
    console.log("A is changing");
  };
  function bChanging() {
    console.log("B is changing");
  }

  useEffect(() => {
    bChanging();
    console.log("useEffect chal gya");
  }, [b]);

  useEffect(() => {
    aChanging();
    console.log("useEffect chal gya");
  }, [a]);

  return (
    <div>
      <h1>Practice 2</h1>
      <h2>A is {a}</h2>
      <h2>B is {b}</h2>
      <button onClick={() => setA(a + 1)}>Change A</button>
      <button onClick={() => setB(b - 1)}>Change B</button>
    </div>
  );
};

export default Practice2;
