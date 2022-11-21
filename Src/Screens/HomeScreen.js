import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getPublicCollectionList,
  getUserUploadPhotos,
} from '../Api/UserUploadPhotosApi';
import PreviewCollectionPhotos from '../Componets/PreviewCollectionPhotos';
import { size } from 'lodash';
import UserUploadImgCard from '../Componets/UserUploadImgCard';
import { PUBLIC_PHOTOS_LIST } from '../Redux/ReduxConst';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MasonryList from '@react-native-seoul/masonry-list';
import { Width } from '../../appConfigFile';
import MasonryPhotoList from '../Componets/MasonryPhotoList';

const HomeScreen = (props) => {
  const { collectionList, accessUserToken, publicPhotoList, userInfoData } =
    props;

  const [pageNumber, setPageNumber] = useState(1);

  const getPublicPhotosList = (url, token) => {
    props.getUserUploadPhotos(url, token, PUBLIC_PHOTOS_LIST);
  };

  const handleOpenDrwer = () => {
    props.navigation.openDrawer();
  };

  const handleOpenUserProfile = () => {
    props.navigation.navigate('Profile');
  };

  const onMomentumScrollEnd = (e) => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;
    const contentSize = e.nativeEvent.contentSize.height;
    const isScrollToBottom = scrollViewHeight + scrollPosition;
    if (isScrollToBottom >= contentSize - 50) {
      setPageNumber(pageNumber + 1);
      // getPublicPhotosList(
      //   `https://api.unsplash.com/photos?page=${pageNumber}`,
      //   accessUserToken?.access_token
      // );
    }
  };

  useEffect(() => {
    getPublicPhotosList(
      'https://api.unsplash.com/photos?per_page=8',
      accessUserToken?.access_token
    );
    if (size(collectionList) === 0) {
      props?.getPublicCollectionList(
        'https://api.unsplash.com/collections',
        accessUserToken?.access_token
      );
    } else {
      console.log('public collection is present');
    }
  }, []);

  return (
    <View style={styles.homeMainContainer}>
      <View style={styles.homeTopbar}>
        <TouchableOpacity onPress={() => handleOpenDrwer()}>
          <Ionicons name="reorder-three-outline" size={33} />
        </TouchableOpacity>
        <Text style={styles.topbarText}>Unsplash</Text>
        <TouchableOpacity onPress={() => handleOpenUserProfile()}>
          <Image
            source={{ uri: userInfoData?.profile_image?.large }}
            style={styles.profileImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainCollectionContainer}>
        <Text style={styles.collectionText}>Top Collection List</Text>
        <FlatList
          style={styles.CollectionContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={collectionList}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => <PreviewCollectionPhotos item={item} />}
        />
      </View>
      <View style={styles.PhotosContainer}>
        <Text style={styles.photosText}>Top Photo List</Text>
        {!publicPhotoList.errors ? (
          <MasonryPhotoList
            photoList={publicPhotoList}
            onMomentumScrollEnd={onMomentumScrollEnd}
          />
        ) : (
          <Text> The access token is invalid</Text>
        )}
      </View>
    </View>
  );
};

const mapStatetoProps = (state) => {
  return {
    accessUserToken: state.accessToken,
    collectionList: state.publicCollection,
    publicPhotoList: state.publicPhotos,
    userInfoData: state.userInfo,
  };
};

const mapDispatchtoProps = {
  getPublicCollectionList,
  getUserUploadPhotos,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeScreen);

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    margin: 2,
    // backgroundColor:'black'
  },
  homeTopbar: {
    flex: 0.27,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 5,
  },
  mainCollectionContainer: {
    flex: 2,
  },
  CollectionContainer: {
    margin: 3.5,
  },
  PhotosContainer: {
    flex: 3,
    margin: 3.5,
  },
  imgCardContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  collectionText: {
    fontSize: 22,
    fontWeight: '500',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  photosText: {
    fontSize: 22,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  topbarText: {
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  profileImg: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
});
