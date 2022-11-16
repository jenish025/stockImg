import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import UserUploadImgCard from '../Componets/UserUploadImgCard';
import {
  getUserUploadPhotos,
  getUserCollectionList,
} from '../Api/UserUploadPhotosApi';
import { USER_UPLOAD_PHOTOS_LIST } from '../Redux/ReduxConst';

const ProfileScreen = (props) => {
  const { userInfoData, accessUserToken, userPhotoList } = props;

  const [barStatus, setBarStatus] = useState('photos');

  const getUserUploadPhotosList = (url, token) => {
    props.getUserUploadPhotos(url, token, USER_UPLOAD_PHOTOS_LIST);
    props?.getUserCollectionList(
      `https://api.unsplash.com/users/${userInfoData?.username}/collections`,
      token
    );
  };

  const handleuserFollowerPage = () => {
    const authList = {
      uri: userInfoData?.links?.followers,
      token: accessUserToken,
      screenName: 'Followers',
    };

    props.navigation.navigate('FollowerScreen', {
      item: authList,
    });
  };

  const handleuserFollowingPage = () => {
    const authList = {
      uri: userInfoData?.links?.following,
      token: accessUserToken,
      screenName: 'Followings',
    };
    props.navigation.navigate('FollowerScreen', {
      item: authList,
    });
  };

  const handlePhotoCollectionBar = (status) => {
    setBarStatus(status);
  };

  useEffect(() => {
    getUserUploadPhotosList(
      userInfoData?.links?.photos,
      accessUserToken?.access_token
    );
  }, []);

  return (
    <SafeAreaView style={styles.profileMainContainer}>
      <View style={styles.profileUser}>
        <Image
          source={{ uri: userInfoData?.profile_image?.large }}
          style={styles.profileImg}
        />
        <TouchableOpacity style={styles.justifyContent}>
          <Text>Post</Text>
          <Text style={styles.textAlign}>{userInfoData?.total_photos}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleuserFollowerPage}>
          <Text>Followers</Text>
          <Text style={styles.textAlign}>{userInfoData?.followers_count}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleuserFollowingPage}>
          <Text>Following</Text>
          <Text style={styles.textAlign}>{userInfoData?.following_count}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userNameContainer}>
        <Text style={styles.userFullName}>
          {userInfoData?.first_name} {userInfoData?.last_name}
        </Text>
        <Text style={styles.userUserName}> {userInfoData?.username} </Text>
        <Text style={styles.userBio}> {userInfoData?.bio} </Text>
      </View>
      <View style={styles.photocollectionBar}>
        <TouchableOpacity onPress={() => handlePhotoCollectionBar('photos')}>
          <Text>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePhotoCollectionBar('Collection')}>
          <Text>Collection</Text>
        </TouchableOpacity>
      </View>

      {barStatus === 'photos' ? (
        <View style={styles.userPhotoList}>
          {!userPhotoList.errors ? (
            <FlatList
              style={styles.photoListContainer}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              data={userPhotoList}
              keyExtractor={(item) => item?.id}
              renderItem={({ item }) => <UserUploadImgCard item={item} />}
            />
          ) : (
            <Text> The access token is invalid</Text>
          )}
        </View>
      ) : (
        <View>
          <Text>Coolection</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const mapStatetoProps = (state) => {
  return {
    userInfoData: state.userInfo,
    accessUserToken: state.accessToken,
    userPhotoList: state.photoList,
  };
};

const mapDispatchtoProps = {
  getUserUploadPhotos,
  getUserCollectionList,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProfileScreen);

const styles = StyleSheet.create({
  profileMainContainer: {
    flex: 1,
    margin: 10,
  },
  profileUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  textAlign: {
    textAlign: 'center',
  },
  userNameContainer: {
    marginTop: 10,
  },
  userFullName: {
    fontSize: 18,
    fontWeight: '600',
  },
  userUserName: {
    fontSize: 12,
  },
  userBio: {
    marginTop: 5,
    fontSize: 10,
  },
  userPhotoList: {
    marginTop: 10,
  },
  photoListContainer: {},
  photocollectionBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    textAlign: 'center',
    width: '100%',
    borderColor: '#babac0',
    borderWidth: 1,
  },
});
