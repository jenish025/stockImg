import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Width } from '../../appConfigFile';
import { useNavigation } from '@react-navigation/native';

const PreviewCollectionPhotos = (props) => {
  const { item, widthFrom } = props;
  console.log(item)
  const Navigation = useNavigation();

  const handleOpenCollection = () => {
    Navigation.navigate('CollectionPhotoListScreen', { item: item });
  };

  return (
    <View
      style={[
        widthFrom === 'profile'
          ? { width: Width, height: 240, marginBottom:8 }
          : styles.mainCardCollection,
      ]}>
      <TouchableOpacity
        style={styles.imgContainer}
        onPress={() => handleOpenCollection(item)}>
        <Image
          source={{ uri: item?.preview_photos[0]?.urls?.small }}
          style={[
            widthFrom === 'profile' ? { width: 250 } : { width: 150 },
            styles.img1,
          ]}
        />
        <View style={styles.imgContainerRight}>
          <Image
            source={{ uri: item.preview_photos[1]?.urls?.small }}
            style={styles.img2}
          />
          <Image
            source={{ uri: item.preview_photos[2]?.urls?.small }}
            style={styles.img3}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PreviewCollectionPhotos;

const styles = StyleSheet.create({
  mainCardCollection: {
    width: Platform.OS === 'ios' ? Width - 137 : Width - 104,
    // width: Width,
    height: 240,
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  img1: {
    // width: 150,
    height: '100%',
    marginRight: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imgContainerRight: {
    flex: 1,
  },
  img2: {
    flex: 1,
    width: 130,
    height: '100%',
    marginBottom: 2,
    borderTopRightRadius: 10,
  },
  img3: {
    flex: 1,
    width: 130,
    height: '100%',
    borderBottomRightRadius: 10,
  },
});
