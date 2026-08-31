import Button from "./comps/Button";

const Card = ({ children }) => {
  return (
    <div style={{ color: "azure", background: "gray", margin: "5px" }}>
      <p>Wraper</p>
      {children}
      <Button />
      <p>Wraper</p>
    </div>
  );
};

export default Card;
