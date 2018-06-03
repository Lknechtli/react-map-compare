//@flow
import types from './types';
import type {UrlAction} from './actions';

type State = {
  leftUrl: string,
  rightUrl: string
};

const INITIAL_STATE = {
  leftUrl: '',
  rightUrl: ''
};

const reducer = (state: State = INITIAL_STATE, action: UrlAction) => {
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
