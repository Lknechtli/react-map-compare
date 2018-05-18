import types from './types.js';

const setLeftUrl = (value) => ({
  type: types.SET_LEFT_URL,
  value
});

const setRightUrl = (value) => ({
  type: types.SET_RIGHT_URL,
  value
});

export default {
  setLeftUrl,
  setRightUrl
};
