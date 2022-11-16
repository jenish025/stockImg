import { USER_COLLECTION_LIST } from '../ReduxConst';

const initialState = {};

export const UserCollectionReducer = (state = initialState, payload) => {
  const { type, data } = payload;
  switch (type) {
    case USER_COLLECTION_LIST:
      return (state = data);

    default:
      return state;
  }
};
