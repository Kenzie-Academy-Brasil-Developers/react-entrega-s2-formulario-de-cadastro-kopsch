import "./App.css";
import Routes from "./routes";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <Routes name={name} setName={setName} />
    </div>
  );
}

export default App;
