import { PUBLIC_PHOTOS_LIST } from '../ReduxConst';

const initialState = {};

export const PublicPhotosReducer = (state = initialState, payload) => {
  const { type, data } = payload;
  switch (type) {
    case PUBLIC_PHOTOS_LIST:
      return (state = data);

    default:
      return state;
  }
};
