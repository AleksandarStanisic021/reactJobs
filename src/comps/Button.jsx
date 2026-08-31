import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log(`Im kliked`);
  };
  return (
    <div>
      <button onClick={handleClick}>Klik me!</button>
    </div>
  );
};

export default Button;
