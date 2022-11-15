import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const UserUploadImgCard = (props) => {
  const { item } = props;
  const Navigation = useNavigation();

  const handlePhotoPress = (item) => {
    Navigation.navigate('FullSizePhotoScreen', { item: item });
    // props.navigation.replace('FullSizePhotoScrenn', { item: response?.data})
  };

  return (
    <TouchableOpacity
      style={styles.imgCardContainer}
      onPress={() => handlePhotoPress(item)}>
      <Image
        style={styles.image}
        source={{ uri: item?.urls?.regular }}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};

export default UserUploadImgCard;

const styles = StyleSheet.create({
  image: {
    height: 115,
    width: 115,
    borderRadius: 10,
  },
  imgCardContainer: {
    margin: 5,
  },
});
