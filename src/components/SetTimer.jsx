import React from "react";

export default function SetTimer({
  prefix,
  breakLength,
  increment,
  decrement
}) {
  return (
    <div className="col text-center">
      <label id={`${prefix}-label`}>{prefix} length</label>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-outline-dark"
          id={`${prefix}-decrement`}
          onClick={decrement}
        >
          -
        </button>
        <div id={`${prefix}-length`} className="px-2">
          {breakLength}
        </div>
        <button
          className="btn btn-outline-dark"
          id={`${prefix}-increment`}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
