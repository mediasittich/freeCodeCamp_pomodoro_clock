import React, { useState } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLeft, setTimerLeft] = useState(sessionLength);

  return (
    <div className="App container">
      <h1>Pomodoro Clock</h1>

      <div className="row">
        <div className="col text-center">
          <label id="break-label">Break Length</label>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-outline-dark"
              id="break-decrement"
              onClick={() => setBreakLength(breakLength - 1)}
            >
              -
            </button>
            <div id="break-length" className="px-2">
              {breakLength}
            </div>
            <button
              className="btn btn-outline-dark"
              id="break-increment"
              onClick={() => setBreakLength(breakLength + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col text-center">
          <label id="session-label">Session Length</label>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-outline-dark"
              id="session-decrement"
              onClick={() => setSessionLength(sessionLength - 1)}
            >
              -
            </button>
            <div id="session-length" className="px-2">
              {sessionLength}
            </div>
            <button
              className="btn btn-outline-dark"
              id="session-increment"
              onClick={() => setSessionLength(sessionLength + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center mt-5">
        <label id="timer-label">Session</label>
        <div id="time-left">{timerLeft}</div>
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
