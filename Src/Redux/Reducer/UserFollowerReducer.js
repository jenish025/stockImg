import { USER_FOLLOWER_LIST } from "../ReduxConst";

const initialState = {};

export const UserFollowerReducer = (state = initialState, payload) => {
  const { type, data } = payload;

  switch (type) {
    case USER_FOLLOWER_LIST:
      return (state = data);

    default:
      return state;
  }
};