import React from "react";

const Card5 = () => {
  const pageScrolling = (e) => {
    console.log("page is scrolling at a speed...", e.deltaY);
  };
  return (
    <div onWheel={pageScrolling}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default Card5;
