import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

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

// StepCounter component
class StepCounter extends React.Component {
  render() {
    const { count, addStep, resetSteps } = this.props;

    return (
      <div>
        <h2>Step Counter</h2>
        <p>Count: {count}</p>
        <button onClick={addStep}>Add Step</button>
        <button onClick={resetSteps}>Reset Steps</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  addStep,
  resetSteps
};

const ConnectedStepCounter = connect(mapStateToProps, mapDispatchToProps)(StepCounter);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedStepCounter />
  </Provider>,
  document.getElementById('root')
);
