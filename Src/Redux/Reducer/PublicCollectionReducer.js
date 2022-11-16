import { PUBLIC_COLLECTION_LIST, PUBLIC_COLLECTION_PHOTOS_LIST } from '../ReduxConst';

const initialState = {};

export const PublicCollectionReducer = (state = initialState, payload) => {
  const { type, data } = payload;
  switch (type) {
    case PUBLIC_COLLECTION_LIST:
      return (state = data);

    default:
      return state;
  }
};

export const PublicCollectionPhotosReducer = (state = initialState, payload) => {
  const { type, data } = payload;
  switch (type) {
    case PUBLIC_COLLECTION_PHOTOS_LIST:
      return (state = data);

    default:
      return state;
  }
};
