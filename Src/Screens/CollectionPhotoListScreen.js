import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUserUploadPhotos } from '../Api/UserUploadPhotosApi';
import UserUploadImgCard from '../Componets/UserUploadImgCard';
import { PUBLIC_COLLECTION_PHOTOS_LIST } from '../Redux/ReduxConst';
import MasonryList from '@react-native-seoul/masonry-list';
import { size } from 'lodash';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MasonryPhotoList from '../Componets/MasonryPhotoList';

const CollectionPhotoListScreen = (props) => {
  const { accessUserToken, publicCollectionPhotoList, navigation } = props;
  const { route } = props;
  const { params } = route;

  
  const [showLoader, setShowLoader] = useState(true);

  const getCollectionPhotosList = (url, token) => {
    props.getUserUploadPhotos(url, token, PUBLIC_COLLECTION_PHOTOS_LIST);
  };
  useEffect(() => {
    getCollectionPhotosList(
      params.item.links.photos,
      accessUserToken?.access_token
    );
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);
  return (
    <View>
      {showLoader ? (
        <ActivityIndicator size="large" color="#babac0" />
      ) : (
        <View>
          <View style={styles.collectionBackBarContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={28} />
            </TouchableOpacity>
            {/* <Text>name</Text> */}
          </View>
          {!publicCollectionPhotoList.errors ? (
            <MasonryPhotoList
              photoList={publicCollectionPhotoList}
              onMomentumScrollEnd={() => console.log('get more img')}
            />
          ) : (
            <Text> The access token is invalid</Text>
          )}
        </View>
      )}
    </View>
  );
};

const mapDispatchtoProps = {
  getUserUploadPhotos,
};

const mapStatetoProps = (state) => {
  return {
    accessUserToken: state.accessToken,
    userPhotoList: state.photoList,
    publicCollectionPhotoList: state.publicCollectionPhotos,
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(CollectionPhotoListScreen);

const styles = StyleSheet.create({
  imgCardContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  collectionBackBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#babac0',
    borderRadius: 50,
    margin: 8,
    opacity: 0.5,
  },
});
