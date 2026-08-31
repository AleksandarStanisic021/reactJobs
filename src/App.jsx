import "./App.css";
import Welcome from "./comps/Welcome";
import UserCard from "./comps/UserCard";
import Fruits from "./comps/Fruits";

const styles = {
  backgroundColor: "red",
  color: "white",
};

const App = () => {
  return (
    <>
      <h1 style={styles}>Hi all</h1>
      <Welcome name="Sasa" />
      <Welcome name="Pera" />
      <Welcome name="Mika" />
      <p>How's going?</p>
      <UserCard name={"Sasa"} role={"Art"} />
      <UserCard name={"Mika"} role={"Sound"} />
      <UserCard name={"Pera"} role={"Actor"} />
      <p>Sum: {2 + 3}</p>
      <Fruits />
    </>
  );
};
export default App;
