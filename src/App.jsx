import { useState } from "react";
import "./App.css";

const App = () => {
  const names = ["sasa", "pera", "mika"];
  const [logedin, setLogedin] = useState(false);

  return (
    <>
      <h1 className="p-2">hello</h1>

      <div className="bg-center">
        {names.map((n) => (
          <li key={n}> {n}</li>
        ))}
        <button onClick={() => setLogedin(!logedin)}>SHOW/HIDE</button>
      </div>
      {logedin && <h1>Sasa</h1>}
    </>
  );
};

export default App;
