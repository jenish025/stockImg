import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../Screens/DashboardScreen';
import Loginscreen from '../Screens/Loginscreen';
import DrawerNavigation from './DrawerNavigation';
import AuthComfromScreen from '../Screens/AuthComfromScreen';
import FullSizePhtoScreen from '../Screens/FullSizePhtoScreen';
import FollowersScreen from '../Screens/FollowersScreen';
import FollowerProfileScreen from '../Screens/FollowerProfileScreen';
// import SplashScreens from '../Screens/SplashScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="splashscreen"
        component={SplashScreens}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Loginscreen"
        component={Loginscreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DashbordScreen"
        component={DashboardScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthConformationScreen"
        component={AuthComfromScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FullSizePhotoScreen"
        component={FullSizePhtoScreen}
        options={{
          title: '',
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="FollowerScreen"
        component={FollowersScreen}
        options={{
          title: '',
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="FollowerProfileScreen"
        component={FollowerProfileScreen}
        options={{
          title: 'Profile',
          // headerShown: false,
        }}
       
      />
      <Stack.Screen
        name="DrawerScreen"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
