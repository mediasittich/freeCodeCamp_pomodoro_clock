import {
  INCREMENT_BREAK_TIMER,
  DECREMENT_BREAK_TIMER,
  INCREMENT_SESSION_TIMER,
  DECREMENT_SESSION_TIMER
} from "../actions/index";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timeLeft: 25
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_BREAK_TIMER:
      return {
        ...state,
        breakLength: state.breakLength + 1
      };
    case DECREMENT_BREAK_TIMER:
      return {
        ...state,
        breakLength: state.breakLength - 1
      };
    case INCREMENT_SESSION_TIMER:
      return {
        ...state,
        sessionLength: state.sessionLength + 1
      };
    case DECREMENT_SESSION_TIMER:
      return {
        ...state,
        sessionLength: state.sessionLength - 1
      };
    default:
      return state;
  }
}

export default rootReducer;
