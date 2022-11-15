import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const FollowersCard = (props) => {
  const { item } = props;
  const Navigation = useNavigation();

  const handleFollowerProfile = (item) => {
    Navigation.navigate('FollowerProfileScreen', { item: item });
  };

  return (
    <TouchableOpacity
      style={styles.mainFollowerContainer}
      onPress={() => handleFollowerProfile(item)}>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: item?.profile_image?.large }}
          style={styles.profileImg}
        />
        <View>
          <Text style={styles.userUserName}> {item?.username} </Text>
          <Text style={styles.userFullName}>
            {item?.first_name} {item?.last_name}
          </Text>
        </View>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FollowersCard;

const styles = StyleSheet.create({
  mainFollowerContainer: {
    padding: 8,
  },
  cardContainer: {
    backgroundColor: '#babac0',
    borderRadius: 10,
    padding: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImg: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginRight: -100,
  },
  userUserName: {
    fontSize: 15,
    fontWeight: '500',
  },
  userFullName: {
    marginTop: 3,
    marginLeft: 2,
    fontSize: 12,
  },
});
