import { Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const UserUploadImgCard = (props) => {
  const { item, index } = props;
  const Navigation = useNavigation();
  const [imgRatio, setImgRatio] = useState(1);

  console.log(Platform.OS);

  const handlePhotoPress = (item) => {
    Navigation.navigate('FullSizePhotoScreen', { item: item });
    // props.navigation.replace('FullSizePhotoScrenn', { item: response?.data})
  };

  useEffect(() => {
    if (item) {
      Image.getSize(item?.urls?.small, (width, height) =>
        setImgRatio(width / height)
      );
    }
  }, [Image]);

  return (
    <TouchableOpacity onPress={() => handlePhotoPress(item)} key={index}>
      <Image
        key={index}
        style={[
          {
            // height: item.height / 25,
            width: Platform.OS === 'ios' ? 206 : 188,
            aspectRatio: imgRatio,
          },
          styles.image,
        ]}
        source={{ uri: item?.urls?.small }}
      />
    </TouchableOpacity>
  );
};

export default UserUploadImgCard;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginBottom: 5,
  },
  // imgCardContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   flex: 1,
  //   margin: 2,
  // },
  imgVIewContainer: {
    flex: 1,
  },
});
