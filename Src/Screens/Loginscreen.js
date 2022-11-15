import { Button, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';
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
    </SafeAreaView>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({});
