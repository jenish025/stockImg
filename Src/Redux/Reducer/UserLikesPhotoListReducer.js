import { USER_LIKES_LIST } from '../ReduxConst';

const initialState = {};

export const UserLikesPhotoListReducer = (state = initialState, payload) => {
  const { type, data } = payload;

  switch (type) {
    case USER_LIKES_LIST:
      return (state = data);

    default:
      return state;
  }
};
