import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { authUrl } from '../../appConfigFile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loginscreen = (props) => {
  const handleLogin = () => {
    WebBrowser.openBrowserAsync(authUrl);
  };

  const getUserToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const newToken = JSON.parse(userToken);
    if (newToken) {
      props.navigation.replace('AuthConformationScreen', { item: newToken });
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  return (
    <SafeAreaView>
      <Button title="LoginWebLink" onPress={handleLogin} />
      <Text></Text>
    </SafeAreaView>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({});
