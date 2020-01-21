import React, { useState } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLeft, setTimerLeft] = useState(sessionLength);

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>

      <div>
        <label id="break-label">Break Length</label>
        <div>
          <button
            id="break-decrement"
            onClick={() => setBreakLength(breakLength - 1)}
          >
            -
          </button>
          <div id="break-length">{breakLength}</div>
          <button
            id="break-increment"
            onClick={() => setBreakLength(breakLength + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <label id="session-label">Session Length</label>
        <div>
          <button
            id="session-decrement"
            onClick={() => setSessionLength(sessionLength - 1)}
          >
            -
          </button>
          <div id="session-length">{sessionLength}</div>
          <button
            id="session-increment"
            onClick={() => setSessionLength(sessionLength + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label id="timer-label">Session</label>
        <div id="time-left">{timerLeft}</div>
      </div>

      <div>
        <button id="start_stop">Start</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
