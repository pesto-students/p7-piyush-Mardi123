import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import Room from "./Room";

// Reducer
const reducer = (state = { isLightOn: true }, action) => {
  switch (action.type) {
    case "FLIP_LIGHT":
      return {
        ...state,
        isLightOn: !state.isLightOn
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Room />
  </Provider>,
  document.getElementById("root")
);
