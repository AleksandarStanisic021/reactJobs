import React from "react";

const Fruits = () => {
  const fruits = [
    "banana",
    "paprika",
    "berry",
    "jagoda",
    "visnja",
    "tresnja",
    "redberry",
  ];

  return (
    <>
      <h1>Fruits</h1>
      <div>
        {fruits.map((fruit, index) => (
          <div key={index}>
            {
              <div
                style={{
                  background: "red",
                  color: "whitesmoke",
                  margin: "1rem",
                }}>
                {fruit}
              </div>
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default Fruits;
