import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const SplashScreen = (props) => {
  // useEffect(() => {
  //   setTimeout(() => {
        
  //       props.navigation.replace('mainscreen');
  //   }, 2000);
  // }, []);

  return (
    <SafeAreaView>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
