//@flow
import types from './types.js';

export type UrlAction = {
  type: string,
  value: any
};

const setLeftUrl = (value: string): UrlAction => ({
  type: types.SET_LEFT_URL,
  value
});

const setRightUrl = (value: string): UrlAction => ({
  type: types.SET_RIGHT_URL,
  value
});

export default {
  setLeftUrl,
  setRightUrl
};
