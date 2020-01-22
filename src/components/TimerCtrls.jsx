import React from "react";

function TimerCtrls() {
  return (
    <div className="d-flex flex-row justify-content-center mt-3">
      <button className="btn btn-dark mx-1" id="start_stop">
        Start
      </button>
      <button className="btn btn-dark mx-1" id="reset">
        Reset
      </button>
    </div>
  );
}

export default TimerCtrls;
