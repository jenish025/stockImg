import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

const BottomSheets = (props) => {
  const { userData } = props;
  console.log(userData);

  const handleDonloadImg = (item) => {
    checkPermission();
  };

  const checkPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);

    if (permission.granted) {
      handleDownload();
    } else {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();
      handleDownload();
    }
  };

  const handleDownload = async () => {
    let FILE_URL = userData?.links?.download;
    // let file_ext = getFileExtention(FILE_URL);

    FileSystem.downloadAsync(
      'http://techslides.com/demos/sample-videos/small.mp4',
      FileSystem.documentDirectory + 'small.mp4'
    )
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri);
      })
      .catch((error) => {
        console.error(error);
      });
    // await MediaLibrary.saveToLibraryAsync(
    //   'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg'
    // );
  };

  // const getFileExtention = (fileUrl) => {
  //   return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  // };

  return (
    <View style={styles.bottomMainContainer}>
      <View style={styles.userContainer}>
        <Image
          source={{ uri: userData.user.profile_image.large }}
          style={styles.userProfileImg}
        />
        <View style={styles.userNameInfo}>
          <Text style={styles.fristNameText}>
            {userData.user?.first_name} {userData.user?.last_name}
          </Text>
          <Text style={styles.userNameText}>@{userData.user?.username}</Text>
        </View>
        <TouchableOpacity onPress={() => handleDonloadImg(userData)}>
          <Ionicons
            style={styles.downloadIcon}
            name="md-download-outline"
            size={30}
            color="red"
          />
        </TouchableOpacity>
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
    paddingRight: 10,
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
  fristNameText: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  userNameText: {
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  downloadIcon: {},
});
