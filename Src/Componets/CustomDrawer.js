import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { connect } from 'react-redux';

const CustomDrawer = (props) => {
  const { userInfoData } = props;
  return (
    <View style={styles.drawerMainContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#babac0' }}>
        <ImageBackground
          style={styles.backgroungImg}
          // source={{ uri: userInfoData.profile_image.large }}
        >
          <Image
            source={{ uri: userInfoData.profile_image.large }}
            style={styles.profileImg}
          />
          <Text style={styles.userNameText}>
            {userInfoData?.first_name} {userInfoData?.last_name}
          </Text>
        </ImageBackground>
        <View style={styles.drawerItemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>bottom</Text>
      </View>
    </View>
  );
};

const mapStatetoProps = (state) => {
  return {
    userInfoData: state.userInfo,
  };
};

export default connect(mapStatetoProps, null)(CustomDrawer);

const styles = StyleSheet.create({
  drawerMainContainer: {
    flex: 1,
  },
  backgroungImg: {
    padding: 15,
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userNameText: {
    color: '#fff',
    fontSize: 18,
  },
  drawerItemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});
