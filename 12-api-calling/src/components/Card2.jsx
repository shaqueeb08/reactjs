import React from "react";
import axios from "axios";
const Card2 = () => {
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    console.log(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default Card2;
