import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getPublicCollectionList,
  getUserUploadPhotos,
} from '../Api/UserUploadPhotosApi';
import PreviewCollectionPhotos from '../Componets/PreviewCollectionPhotos';
import { size } from 'lodash';
import UserUploadImgCard from '../Componets/UserUploadImgCard';
import { PUBLIC_PHOTOS_LIST } from '../Redux/ReduxConst';

const HomeScreen = (props) => {
  const { collectionList, accessUserToken, publicPhotoList } = props;

  const getPublicPhotosList = (url, token) => {
    props.getUserUploadPhotos(url, token, PUBLIC_PHOTOS_LIST);
  };

  useEffect(() => {
    console.log(size(collectionList));
    getPublicPhotosList(
      'https://api.unsplash.com/photos?per_page=50',
      accessUserToken?.access_token
    );
    if (size(collectionList) === 0) {
      props?.getPublicCollectionList(
        'https://api.unsplash.com/collections?per_page=15',
        accessUserToken?.access_token
      );
    } else {
      console.log('public collection is present');
    }
  }, []);

  return (
    <SafeAreaView style={styles.homeMainContainer}>
      <Text>Top Collection List</Text>
      <FlatList
        style={styles.CollectionContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={collectionList}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <PreviewCollectionPhotos item={item} />}
      />
      <View style={styles.PhotosContainer}>
        <Text>Top Photo List</Text>
        {!publicPhotoList.errors ? (
          <FlatList
            style={styles.photoListContainer}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={publicPhotoList}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => <UserUploadImgCard item={item} />}
          />
        ) : (
          <Text> The access token is invalid</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStatetoProps = (state) => {
  return {
    accessUserToken: state.accessToken,
    collectionList: state.publicCollection,
    publicPhotoList: state.publicPhotos,
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
    margin: 5,
  },
  CollectionContainer: {
    flex: 1,
  },
  PhotosContainer: {
    flex: 2,
  },
});
