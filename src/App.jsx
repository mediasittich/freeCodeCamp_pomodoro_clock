import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <h1>Pomodoro Clock</h1>

      <div className="row">
        <div className="col text-center">
          <label id="break-label">Break Length</label>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-outline-dark" id="break-decrement">
              -
            </button>
            <div id="break-length" className="px-2">
              5
            </div>
            <button className="btn btn-outline-dark" id="break-increment">
              +
            </button>
          </div>
        </div>
        <div className="col text-center">
          <label id="session-label">Session Length</label>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-outline-dark" id="session-decrement">
              -
            </button>
            <div id="session-length" className="px-2">
              25
            </div>
            <button className="btn btn-outline-dark" id="session-increment">
              +
            </button>
          </div>
        </div>
      </div>

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
