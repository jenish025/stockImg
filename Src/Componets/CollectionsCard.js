import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Width } from '../../appConfigFile';

const CollectionsCard = (props) => {
  return (
    <SafeAreaView style={styles.mainCardCollection}>
      <TouchableOpacity>
        <Text>collection</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CollectionsCard;

const styles = StyleSheet.create({
  mainCardCollection: {
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 1,
    marginRight: 5,
    width: Width - 10,
  },
});
