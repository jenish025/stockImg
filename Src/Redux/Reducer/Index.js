import { combineReducers } from 'redux';
import { AccessCodeReducer } from './AccessCodeReducer';
import { AccessTokenReducer } from './AccessTokenReducer';
import { UserCollectionReducer } from './UserCollectionReducer';
import { UserFollowerReducer } from './UserFollowerReducer';
import { UserFollowingReducer } from './UserFollowingReducer';
import { UserInfoReducer } from './UserInfoReducer';
import { UserPhotoUploadListReducer } from './UserPhotoUploadListReducer';

const RootReducer = combineReducers({
  accessCode: AccessCodeReducer,
  accessToken: AccessTokenReducer,
  userInfo: UserInfoReducer,
  photoList: UserPhotoUploadListReducer,
  userFollower: UserFollowerReducer,
  userFollowings: UserFollowingReducer,
  userCollection: UserCollectionReducer,
});

export { RootReducer };
