import Card from "../Card";

const UserCard = ({ name, role }) => {
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
    </Card>
  );
};

export default UserCard;
