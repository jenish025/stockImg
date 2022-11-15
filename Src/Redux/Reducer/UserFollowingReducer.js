import { USER_FOLLOWING_LIST } from "../ReduxConst";

const initialState = {};

export const UserFollowingReducer = (state = initialState, payload) => {
  const { type, data } = payload;

  switch (type) {
    case USER_FOLLOWING_LIST:
      return (state = data);

    default:
      return state;
  }
};