const UserCard = ({ name, role }) => {
  return (
    <div style={{ background: "gray", color: "wheat", margin: "0.5rem" }}>
      <p>Name {name}</p>
      <p>Position {role}</p>
    </div>
  );
};

export default UserCard;
