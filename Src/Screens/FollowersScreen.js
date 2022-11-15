import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUserFollowerList } from '../Api/UserUploadPhotosApi';
import FollowersCard from '../Componets/FollowersCard';

const FollowersScreen = (props) => {
  const { route, userFollower } = props;
  const { params } = route;
  const { item } = params;

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    props.navigation.setOptions({ title: item?.screenName });
    props.getUserFollowerList(item?.uri, item.token?.access_token);
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);

  return (
    <View>
      {showLoader ? (
        <ActivityIndicator size="large" color="#babac0"  />
      ) : (
        <FlatList
          data={userFollower}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FollowersCard item={item} />}
        />
      )}
    </View>
  );
};

const mapStatetoProps = (state) => {
  return {
    userFollower: state.userFollower,
  };
};

const mapDispatchtoProps = {
  getUserFollowerList,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(FollowersScreen);

const styles = StyleSheet.create({});
