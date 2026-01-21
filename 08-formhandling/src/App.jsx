import React from "react";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
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
          <input type="text" placeholder="Enter your name" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
