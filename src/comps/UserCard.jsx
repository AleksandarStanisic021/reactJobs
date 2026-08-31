import Card from "../Card";

const UserCard = ({ name, role }) => {
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
        onClick={(e) => {
          greet(name);
        }}>
        hello
      </button>
    </Card>
  );
};

export default UserCard;
