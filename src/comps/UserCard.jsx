const UserCard = ({ name, role }) => {
  return (
    <div
      style={{
        background: "black",
        color: "wheat",
        margin: "1rem",
        border: "1px solid blue",
      }}>
      <p>Name {name}</p>
      <p>Position {role}</p>
    </div>
  );
};

export default UserCard;
