//@flow
import types from './types';

const INITIAL_STATE = {
  leftUrl: '',
  rightUrl: ''
};

const reducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
  case types.SET_LEFT_URL: {
    const { value } = action;
    return {
      ...state,
      leftUrl: value
    };
  }
  case types.SET_RIGHT_URL: {
    const { value } = action;
    return {
      ...state,
      rightUrl: value
    };
  }
  default: return state;
  }
};

export default reducer;
