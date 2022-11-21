import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUserFollowerList } from '../Api/UserUploadPhotosApi';
import FollowersCard from '../Componets/FollowersCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FollowersScreen = (props) => {
  const { route, userFollower, navigation } = props;
  const { params } = route;
  const { item } = params;

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    navigation.setOptions({ title: item?.screenName });
    props.getUserFollowerList(item?.uri, item.token?.access_token);
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      <View style={styles.followMainContainer}>
        <View style={styles.followTopbar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.gobackIcon}>
            <Ionicons name="arrow-back-outline" size={28} />
          </TouchableOpacity>
          <Text style={styles.screenName}>{item?.screenName}</Text>
        </View>
        <View style={styles.followListContainer}>
          {showLoader ? (
            <ActivityIndicator size="large" color="#babac0" />
          ) : (
            <FlatList
              data={userFollower}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <FollowersCard item={item} />}
            />
          )}
        </View>
      </View>
    </>
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

const styles = StyleSheet.create({
  followMainContainer: {
    flex: 1,
    padding: 5,
  },
  followTopbar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  followListContainer: {
    flex: 20,
  },
  gobackIcon: {
    backgroundColor: '#babac0',
    borderRadius: 50,
    marginRight: 5,
    opacity: 0.8,
  },
  screenName: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
  },
});
