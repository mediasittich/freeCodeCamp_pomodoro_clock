import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import SetTimer from "./SetTimer";

class SetTimers extends Component {
  incrementBreakTime = () => {
    this.props.dispatch({ type: "INCREMENT_BREAK_TIMER" });
  };
  decrementBreakTime = () => {
    this.props.dispatch({ type: "DECREMENT_BREAK_TIMER" });
  };
  incrementSessionTime = () => {
    this.props.dispatch({ type: "INCREMENT_SESSION_TIMER" });
  };
  decrementSessionTime = () => {
    this.props.dispatch({ type: "DECREMENT_SESSION_TIMER" });
  };

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <SetTimer
          prefix="break"
          breakLength={this.props.breakLength}
          increment={this.incrementBreakTime}
          decrement={this.decrementBreakTime}
        />
        <SetTimer
          prefix="session"
          breakLength={this.props.sessionLength}
          increment={this.incrementSessionTime}
          decrement={this.decrementSessionTime}
        />
      </div>
    );
  }
}

SetTimers.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  breakLength: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  sessionLength: state.sessionLength,
  breakLength: state.breakLength
});

export default connect(mapStateToProps)(SetTimers);
