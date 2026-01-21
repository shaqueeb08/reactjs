import React from "react";
import Card from "./components/Card.jsx";
const App = () => {
  return (
    <div className="parent">
      <Card
        user="Shaqueeb Ahmad"
        age={24}
        para="software developer"
        img="https://images.unsplash.com/photo-1767072981417-db9ccdfd3b1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="John Doe"
        age={30}
        para="frontend developer"
        img="https://images.unsplash.com/photo-1767072981417-db9ccdfd3b1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Jane Smith"
        age={28}
        para="backend developer"
        img="https://images.unsplash.com/photo-1767072981417-db9ccdfd3b1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Bob Johnson"
        age={35}
        para="fullstack developer"
        img="https://images.unsplash.com/photo-1767072981417-db9ccdfd3b1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
