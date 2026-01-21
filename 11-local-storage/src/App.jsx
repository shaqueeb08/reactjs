import React from "react";

const App = () => {
  //localStorage.setItem("user", "shaqueeb");
  //localStorage.setItem("age", "18");
  //const age = localStorage.getItem("age");
  //const user = localStorage.getItem("user");
  //console.log(user, age);
  //localStorage.removeItem("user");
  //localStorage.clear();
  /*const user = {
    name: "shaqueeb",
    age: "25",
    city: "noida",
    nationality: "indian",
  };
  console.log(user);*/

  //localStorage.setItem("user", user);
  //localStorage.setItem("user", JSON.stringify(user));
  //const a = localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(typeof user);

  return (
    <div>
      <h1>Local Storage Example</h1>
    </div>
  );
};

export default App;
