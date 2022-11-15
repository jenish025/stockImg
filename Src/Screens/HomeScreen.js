import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserCollectionList } from '../Api/UserUploadPhotosApi';

const HomeScreen = (props) => {
  const { collectionList, accessUserToken } = props;
  console.log(collectionList, 'collection');

  useEffect(() => {
    props?.getUserCollectionList(
      'https://api.unsplash.com/collections',
      accessUserToken?.access_token
    );
  }, []);

  return (
    <View>
      {collectionList?.map((data) => {
        return (
          <View>
            <Text>{data?.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

const mapStatetoProps = (state) => {
  return {
    accessUserToken: state.accessToken,
    collectionList: state,
  };
};

const mapDispatchtoProps = {
  getUserCollectionList,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeScreen);

const styles = StyleSheet.create({});
