import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PreviewCollectionPhotos from '../Componets/PreviewCollectionPhotos';
import MasonryPhotoList from '../Componets/MasonryPhotoList';
import { connect } from 'react-redux';
import { USER_LIKES_LIST, USER_UPLOAD_PHOTOS_LIST } from '../Redux/ReduxConst';
import {
  getUserCollectionList,
  getUserUploadPhotos,
} from '../Api/UserUploadPhotosApi';
import { Width } from '../../appConfigFile';

const FollowerProfileScreen = (props) => {
  const [activeIndex, setActiveIndex] = useState('photos');

  const {
    route,
    accessUserToken,
    userLikesPhotoList,
    userPhotoList,
    userCollection,
  } = props;
  const { params } = route;
  const { item } = params;

  console.log(item.links.followers)

  const getUserUploadPhotosList = (url, token) => {
    props.getUserUploadPhotos(url, token, USER_UPLOAD_PHOTOS_LIST);
    props?.getUserCollectionList(
      `https://api.unsplash.com/users/${item?.username}/collections`,
      token
    );
  };

  const getUserLikePhotoList = (url, token) => {
    props.getUserUploadPhotos(url, token, USER_LIKES_LIST);
  };

  const handleuserFollowerPage = () => {
    const authList = {
      uri: item?.links?.followers,
      token: accessUserToken,
      screenName: 'Followers',
    };

    props.navigation.navigate('FollowerScreen', {
      item: authList,
    });
  };

  const handleuserFollowingPage = () => {
    const authList = {
      uri: item?.links?.following,
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
    // setActiveIndex('photos');
    getUserUploadPhotosList(item?.links?.photos, accessUserToken?.access_token);
    getUserLikePhotoList(item?.links?.likes, accessUserToken?.access_token);
  }, [activeIndex]);

  return (
    <>
      <SafeAreaView style={styles.ProfileMainContainer}>
        <View style={styles.ProfileTopBarContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backIcon}>
            <Ionicons name="arrow-back-outline" size={28} />
          </TouchableOpacity>
          <Text style={styles.userNameFullText}>
            {item?.first_name} {item?.last_name}
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="reorder-three-outline" size={34} />
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileContainer}>
          <Image
            source={{ uri: item?.profile_image?.large }}
            style={styles.profileImg}
          />
          <Text style={styles.userNameText}>@{item?.username}</Text>
          <View style={styles.userStatusInfoContainer}>
            <View style={styles.userStatus}>
              <Text style={styles.textCounts}>{item?.total_photos}</Text>
              <Text style={styles.followersText}>Photos</Text>
            </View>
            <TouchableOpacity onPress={() => handleuserFollowerPage()}>
              <View style={styles.userStatus}>
                <Text style={styles.textCounts}>{item?.followers_count}</Text>
                <Text style={styles.followersText}>Followers</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleuserFollowingPage()}>
              <View style={styles.userStatus}>
                <Text style={styles.textCounts}>{item?.following_count}</Text>
                <Text style={styles.followersText}>Following</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ProfileOptionContainer}>
          <TouchableOpacity
            onPress={() => setActiveIndex('photos')}
            style={[
              styles.photosOption,
              activeIndex === 'photos' && styles.activeState,
            ]}>
            <Ionicons name="images-outline" size={25} />
            <Text style={[styles.followersText, { marginLeft: 5 }]}>
              Photos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveIndex('likes')}
            style={[
              styles.photosOption,
              activeIndex === 'likes' && styles.activeState,
            ]}>
            <Ionicons name="heart-outline" size={25} />
            <Text style={[styles.followersText, { marginLeft: 5 }]}>Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveIndex('collection')}
            style={[
              styles.photosOption,
              activeIndex === 'collection' && styles.activeState,
            ]}>
            <Ionicons name="bookmarks-outline" size={25} />
            <Text style={[styles.followersText, { marginLeft: 5 }]}>
              Collections
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ProfilePhotosContainer}>
          {activeIndex === 'photos' ? (
            <MasonryPhotoList
              photoList={userPhotoList}
              onMomentumScrollEnd={() => console.log('more img det')}
            />
          ) : activeIndex === 'likes' ? (
            <MasonryPhotoList
              photoList={userLikesPhotoList}
              onMomentumScrollEnd={() => console.log('more img det')}
            />
          ) : (
            activeIndex === 'collection' && (
              <FlatList
                style={styles.CollectionContainer}
                // horizontal={true}
                // showsHorizontalScrollIndicator={false}
                data={userCollection}
                keyExtractor={(item) => item?.id}
                renderItem={({ item }) => (
                  <PreviewCollectionPhotos item={item} widthFrom={'profile'} />
                )}
              />
            )
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    userInfoData: state.userInfo,
    accessUserToken: state.accessToken,
    userPhotoList: state.photoList,
    userLikesPhotoList: state.userLikeList,
    userCollection: state.userCollection,
  };
};

const mapDispatchtoProps = {
  getUserUploadPhotos,
  getUserCollectionList,
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(FollowerProfileScreen);

const styles = StyleSheet.create({
  ProfileMainContainer: {
    padding: 4,
    flex: 1,
    display: 'flex',
  },
  ProfileTopBarContainer: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    backgroundColor: '#babac0',
    borderRadius: 50,
    marginRight: 5,
    opacity: 0.6,
  },
  userNameFullText: {
    fontSize: 18,
    marginLeft: 2,
    fontWeight: '500',
    fontStyle: 'italic',
    marginBottom: 3,
  },
  ProfileContainer: {
    flex: 4,
    alignItems: 'center',
    padding: 5,
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  userNameText: {
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'italic',
    marginTop: 4,
  },
  userStatusInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 4,
  },
  userStatus: {
    alignItems: 'center',
    marginTop: 5,
  },
  textCounts: {
    fontSize: 16,
    fontWeight: '500',
  },
  followersText: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  ProfileOptionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  photosOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  activeState: {
    backgroundColor: '#babac0',
    borderRadius: 15,
  },
  ProfilePhotosContainer: {
    flex: 7,
  },
  CollectionContainer: {
    padding: 2,
    width: Width,
  },
});
