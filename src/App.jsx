import React from "react";
import "./App.css";

import Settings from "./components/Settings";

function App() {
  // const now = Date.now();
  // const later = Date.now() + 25 * 60 * 1000;

  // const difference = later - now;
  // const timeLeft = {
  //   minutes: Math.floor((difference / (1000 * 60)) % 60),
  //   seconds: Math.floor((difference / 1000) % 60)
  // };

  return (
    <div className="App container">
      <h1>Pomodoro Clock</h1>

      <Settings />

      <div className="d-flex flex-column align-items-center mt-5">
        <label id="timer-label">Session</label>
        <div id="time-left">25:00</div>
      </div>

      <div className="d-flex flex-row justify-content-center mt-3">
        <button className="btn btn-dark mx-1" id="start_stop">
          Start
        </button>
        <button className="btn btn-dark mx-1" id="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
