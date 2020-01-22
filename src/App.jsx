import React from "react";
import "./App.css";

import Settings from "./components/Settings";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App container">
      <h1 className="text-center mb-5 mt-5">Pomodoro Clock</h1>
      <Settings />
      <Timer />
    </div>
  );
}

export default App;
