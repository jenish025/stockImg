import { ACCESS_TOKEN } from '../ReduxConst';

const initialState = {};

export const AccessTokenReducer = (state = initialState, payload) => {
  const { type, data } = payload;

  switch (type) {
    case ACCESS_TOKEN:
      return (state = data);

    default:
      return state;
  }
};
