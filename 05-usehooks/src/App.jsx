import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increase() {
    setNum(num + 1);
  }

  function decrease() {
    setNum(num - 1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
};

export default App;
