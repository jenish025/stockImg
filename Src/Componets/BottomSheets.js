import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomSheets = (props) => {
  const { userData } = props;
  console.log(userData.user, 'userData');
  return (
    <View style={styles.bottomMainContainer}>
      <View style={styles.userContainer}>
        <Image
          source={{ uri: userData.user.profile_image.large }}
          style={styles.userProfileImg}
        />
        <View style={styles.userNameInfo}>
          <Text style={styles.fristNameText}>{userData.user?.first_name} {userData.user?.last_name}</Text>
          <Text style={styles.userNameText}>@{userData.user?.username}</Text>
        </View>
        <Ionicons style={styles.downloadIcon} name="md-download-outline" size={30} color='red' />
      </View>
      <View style={styles.PhotosContainer}>
        <Text></Text>
      </View>
    </View>
  );
};

export default BottomSheets;

const styles = StyleSheet.create({
  bottomMainContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    paddingRight:10,
  },
  userContainer: {
    flex: 0.4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PhotosContainer: {
    flex: 2,
  },
  userProfileImg: {
    height: 65,
    width: 65,
    borderColor: 'red',
    borderRadius: 50,
  },
  userNameInfo: {
    width: '68%',
  },
  fristNameText:{
    fontSize:18,
    fontWeight:'500',
    fontStyle:'italic'
  },
  userNameText:{
    fontSize:13,
    fontWeight:'400',
    fontStyle:'italic'
  },
  downloadIcon:{



  }
});
