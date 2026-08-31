import "./App.css";
import Welcome from "./comps/Welcome";

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
      <p>Sum: {2 + 3}</p>
    </>
  );
};
export default App;
