import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ImgCardList = (props) => {

  return (
    <TouchableOpacity style={styles.imgCardContainer}>
      <Image
        source={{ uri: props?.item?.urls?.regular }}
        style={styles.image }
      />
    </TouchableOpacity>
  );
};

export default ImgCardList;

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
    borderRadius:10
  },
  imgCardContainer:{
    margin:5
    
  }
});
