import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import UserUploadImgCard from './UserUploadImgCard';
import { size } from 'lodash';

const MasonryPhotoList = (props) => {
  const { photoList } = props;
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <ActivityIndicator size="large" color="#babac0" />
      ) : (
        <ScrollView
          onMomentumScrollEnd={props.onMomentumScrollEnd}
          showsVerticalScrollIndicator={false}>
          {size(photoList) != 0 ? (
            <View style={styles.imgCardContainer}>
              <View style={{ marginRight: 5, marginTop: 8 }}>
                {photoList
                  ?.filter((_, index) => index % 2 === 0)
                  ?.map((item, index) => {
                    return <UserUploadImgCard item={item} index={index} />;
                  })}
              </View>
              <View style={{ marginTop: 8 }}>
                {photoList
                  ?.filter((_, index) => index % 2 === 1)
                  ?.map((item, index) => {
                    return <UserUploadImgCard item={item} index={index} />;
                  })}
              </View>
            </View>
          ) : (
            <Text> No Photos </Text>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default MasonryPhotoList;

const styles = StyleSheet.create({
  imgCardContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
});
