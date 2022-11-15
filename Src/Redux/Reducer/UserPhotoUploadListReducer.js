import { USER_UPLOAD_PHOTOS_LIST } from '../ReduxConst';

const initialState = {};

export const UserPhotoUploadListReducer = (state = initialState, payload) => {
  const { type, data } = payload;

  switch (type) {
    case USER_UPLOAD_PHOTOS_LIST:
      return (state = data);

    default:
      return state;
  }
};
