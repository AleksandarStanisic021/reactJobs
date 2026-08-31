import React from "react";

const Card = ({ children }) => {
  return (
    <div style={{ color: "azure", background: "gray", margin: "5px" }}>
      <p>Wraper</p>
      {children}
      <p>Wraper</p>
    </div>
  );
};

export default Card;
