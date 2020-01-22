import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import TimerCtrls from "./TimerCtrls";

function Timer({ timeLeft }) {
  const now = Date.now();
  const later = +Date.now() + timeLeft * 60 * 1000;

  const difference = later - now;
  const remainingTime = {
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };

  const timeString =
    remainingTime.minutes.toString().padStart(2, "0") +
    ":" +
    remainingTime.seconds.toString().padStart(2, "0");
  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-5">
        <label id="timer-label">Session</label>
        <div id="time-left">{timeString}</div>
      </div>
      <TimerCtrls />
    </div>
  );
}

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  timeLeft: state.timeLeft
});

export default connect(mapStateToProps)(Timer);
