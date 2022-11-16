// import axios from 'axios';

import { UserPhotoUploadLIst } from '../Redux/Action/UserAuthAction';
import {
  PUBLIC_COLLECTION_LIST,
  USER_COLLECTION_LIST,
  USER_FOLLOWER_LIST,
  USER_UPLOAD_PHOTOS_LIST,
} from '../Redux/ReduxConst';

export const getUserUploadPhotos = (url, token, path) => {
  console.log(path, 'path')
  return (dispatch) => {
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        dispatch(
          // UserPhotoUploadLIst(result)
          {
            type: path,
            data: JSON.parse(result),
          }
        );
        return result;
      })
      .catch((error) => console.log('error', error));
  };
};

export const getUserFollowerList = (url, token) => {
  return (dispatch) => {
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        dispatch(
          // UserPhotoUploadLIst(result)
          {
            type: USER_FOLLOWER_LIST,
            data: JSON.parse(result),
          }
        );
        return result;
      })
      .catch((error) => console.log('error', error));
  };
};

export const getUserCollectionList = (url, token) => {
  return (dispatch) => {
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        dispatch({
          type: USER_COLLECTION_LIST,
          data: JSON.parse(result),
        });
        return result;
      })
      .catch((error) => console.log('error', error));
  };
};

export const getPublicCollectionList = (url, token) => {
  return (dispatch) => {
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        dispatch({
          type: PUBLIC_COLLECTION_LIST,
          data: JSON.parse(result),
        });
        return result;
      })
      .catch((error) => console.log('error', error));
  };
};
