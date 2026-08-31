import "./App.css";

const styles = {
  backgroundColor: "red",
  color: "white",
};

const App = () => {
  n(
    <>
      <h1 style={styles}>Hi all</h1>
      <p>How's going?</p>
      <p>Sum: {2 + 3}</p>
    </>,
  );
};
export default App;
