import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Height, Width } from '../../appConfigFile';

const FullSizePhtoScreen = (props) => {
  const { route } = props;
  const { params } = route;
  const { item } = params;
  return (
    <View style={styles.fullPhotoContainer}>
      <View style={styles.userProfileContainer}>
        <View style={styles.userProfileBar}>
          <Image
            source={{ uri: item?.user?.profile_image?.large }}
            style={styles.userProfile}
          />
          <Text style={styles.userNameText}>{item?.user?.username}</Text>
        </View>
        <View style={styles.mainImgContainer}>
          <Image
            source={{ uri: item?.urls?.regular }}
            style={styles.mainImg}
          resizeMode='stretch'
          />
        </View>
      </View>
    </View>
  );
};

export default FullSizePhtoScreen;

const styles = StyleSheet.create({
  fullPhotoContainer: {
    flex: 1,
    margin: 5,
  },
  userProfileContainer: {
    display: 'flex',
    backgroundColor: '#babac0',
    borderRadius: 10,
    padding: 5,
  },
  userProfileBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfile: {
    height: 50,
    width: 50,
    borderRadius: 40,
    marginRight: 15,
  },

  userNameText: {
    fontSize: 18,
    fontWeight: '500',
  },
  mainImgContainer: {

  },
  mainImg: {
    marginTop: 10,
    height: Height/2 ,
    borderRadius: 10,
  },
});
