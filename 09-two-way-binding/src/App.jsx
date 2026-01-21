import React from "react";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted! by:", val);
    setVal("");
  };
  return (
    <div>
      <h1>Form Handling in React</h1>
      <div className="container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            onChange={(e) => {
              setVal(e.target.value);
            }}
            type="text"
            placeholder="Enter your name"
            value={val}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
