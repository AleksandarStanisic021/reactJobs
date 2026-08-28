import "./App.css";

const App = () => {
  const names = ["sasa", "pera", "mika"];
  const logenin = true;

  return (
    <>
      <h1 className="p-2">hello</h1>
      <h1 className="p-4">hello</h1>
      <h1 className="p-6">hello</h1>
      <div className="bg-center">
        {names.map((n) => (
          <li key={n}> {n}</li>
        ))}
      </div>
      {logenin && <h1>Sasa</h1>}
    </>
  );
};

export default App;
