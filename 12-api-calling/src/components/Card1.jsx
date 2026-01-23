import React from "react";
const App = () => {
  /*async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );*/
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <h1>Basics of Api Calling</h1>
      <button onClick={getData}>GetData</button>
    </div>
  );
};

export default App;
