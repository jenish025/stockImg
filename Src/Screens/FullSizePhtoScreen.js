import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { Height, Width } from '../../appConfigFile';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import * as Animatable from 'react-native-animatable';
import BottomSheets from '../Componets/BottomSheets';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FullSizePhtoScreen = (props) => {
  const { route, navigation } = props;
  const { params } = route;
  const { item } = params;
  const [imgRatio, setImgRatio] = useState(1);

  const snapPoints = useMemo(() => ['16%', '90%'], []);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (item?.urls?.regular) {
      Image.getSize(item?.urls?.regular, (width, height) =>
        setImgRatio(Width / (Height - 34.5))
      );
    }

    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [Image]);

  return (
    <>
      {loader ? (
        <ActivityIndicator size="large" color="#babac0" />
      ) : (
        <>
          <View style={styles.collectionBackBarContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={28} />
            </TouchableOpacity>
            {/* <Text>name</Text> */}
          </View>
          <View style={styles.MainContainer}>
            <Image
              source={{ uri: item?.urls?.raw }}
              style={[
                {
                  height: Height - 24,
                  // width: '100%',
                  aspectRatio: imgRatio,
                },
                styles.mainImg,
              ]}
              resizeMode="stretch"
            />
            <BottomSheet snapPoints={snapPoints}>
              <Animatable.View delay={500} duration={1000} animation="fadeInUp">
                <BottomSheets userData={item} />
              </Animatable.View>
            </BottomSheet>
          </View>
        </>
      )}
    </>
  );
};

export default gestureHandlerRootHOC(FullSizePhtoScreen);

const styles = StyleSheet.create({
  MainContainer: {
    height: Height,
    flex: 1,
  },
  mainImg: {
    // borderRadius: 5,
  },
  collectionBackBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#babac0',
    borderRadius: 50,
    margin: 8,
    opacity: 0.5,
  },
});
