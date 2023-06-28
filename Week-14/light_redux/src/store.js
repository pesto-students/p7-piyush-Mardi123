// store.js

import { createStore } from 'redux';

const initialState = {
  isLightOn: true
};

const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIP_LIGHT':
      return {
        ...state,
        isLightOn: !state.isLightOn
      };
    default:
      return state;
  }
};

const store = createStore(lightReducer);

export default store;