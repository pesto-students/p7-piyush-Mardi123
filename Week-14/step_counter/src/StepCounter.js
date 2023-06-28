// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StepCounter from './StepCounter';

// Action types
const ADD_STEP = 'ADD_STEP';
const RESET_STEPS = 'RESET_STEPS';

// Action creators
const addStep = () => {
  return { type: ADD_STEP };
};

const resetSteps = () => {
  return { type: RESET_STEPS };
};

// Reducer
const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STEP:
      return {
        ...state,
        count: state.count + 1
      };
    case RESET_STEPS:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <StepCounter />
  </Provider>,
  document.getElementById('root')
);
