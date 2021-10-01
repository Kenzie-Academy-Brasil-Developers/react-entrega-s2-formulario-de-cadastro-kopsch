import "./App.css";
import Routes from "./routes";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <Routes username={username} setUsername={setUsername} />
    </div>
  );
}

export default App;
