import React from "react";
import Button from "./Button";

const NameForm = () => {
  const [name, setName] = React.useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, my name is ${name}`);
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
        />
        <button type="submit">Submit</button>
      </form>

      <p>
        Hello, my name is <span id="name-display">{name} </span>.
      </p>
    </div>
  );
};

export default NameForm;
