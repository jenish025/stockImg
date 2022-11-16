import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUserUploadPhotos } from '../Api/UserUploadPhotosApi';
import UserUploadImgCard from '../Componets/UserUploadImgCard';
import { PUBLIC_COLLECTION_PHOTOS_LIST } from '../Redux/ReduxConst';

const CollectionPhotoListScreen = (props) => {
  const { accessUserToken, publicCollectionPhotoList } = props;
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
          {!publicCollectionPhotoList.errors ? (
            <FlatList
              style={styles.photoListContainer}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              data={publicCollectionPhotoList}
              keyExtractor={(item) => item?.id}
              renderItem={({ item }) => <UserUploadImgCard item={item} />}
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

const styles = StyleSheet.create({});
