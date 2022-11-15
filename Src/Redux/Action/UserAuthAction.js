import {
  ACCESS_CODE,
  ACCESS_TOKEN,
  USER_COLLECTION_LIST,
  USER_FOLLOWER_LIST,
  USER_FOLLOWING_LIST,
  USER_INFO,
  USER_UPLOAD_PHOTOS_LIST,
} from '../ReduxConst';

export const UserAccessCode = (accessCode) => {
  return {
    type: ACCESS_CODE,
    data: accessCode,
  };
};

export const UserAccessToken = (accessToken) => {
  return {
    type: ACCESS_TOKEN,
    data: accessToken,
  };
};

export const AllUserInfo = (info) => {
  return {
    type: USER_INFO,
    data: info,
  };
};

export const UserPhotoUploadLIst = (list) => {
  return {
    type: USER_UPLOAD_PHOTOS_LIST,
    data: list,
  };
};
export const UserFollowersList = (list) => {
  return {
    type: USER_FOLLOWER_LIST,
    data: list,
  };
};
export const UserFollowingsList = (list) => {
  return {
    type: USER_FOLLOWING_LIST,
    data: list,
  };
};

export const UserCollectionListAction = (collection) => {
  return {
    type: USER_COLLECTION_LIST,
    data: collection,
  };
};
