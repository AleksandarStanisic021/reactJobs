import { useState } from "react";
import Card from "../Card";

const UserCard = ({ name, role }) => {
  const [log, setLog] = useState(false);

  const greet = (name) => {
    console.log(`hi ${name}`);
  };

  return (
    <Card>
      <div
        style={{
          background: "black",
          margin: "1rem",
          border: "1px solid blue",
        }}>
        <p>Name {name}</p>
        <p>Position {role}</p>
      </div>
      <button
        onClick={() => {
          greet(name);
        }}>
        hello
      </button>

      {log && <h1>{name}</h1>}

      <div>
        <button onClick={() => setLog((prev) => !prev)}>
          {log ? "HIDE" : "SHOW"}
        </button>
      </div>
    </Card>
  );
};

export default UserCard;
