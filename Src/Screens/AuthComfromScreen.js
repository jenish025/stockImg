import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  AllUserInfo,
  UserAccessCode,
  UserAccessToken,
} from '../Redux/Action/UserAuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { test } from '../Api/UserAuthApi';
import { redirectUri } from '../../appConfigFile';

const AuthComfromScreen = (props) => {
  const { accessUserCode, accessUserToken, userInfoData } = props;
  const [userInfo, setUserInfo] = useState({});

  const getUserToken = async (code) => {
    const url = `https://unsplash.com/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=p4ujNBL74OUjCLjSFjhohACuKCQFKoXvyvO26GLFrOM&client_secret=iTdCCrRWfUCu_4axVPHzd79Fu4pRght9fvGf1GHIH1g`;
    axios.post(url).then(async (response) => {
      props?.userAccessToken(response?.data);
      const jsonValue = JSON.stringify(response?.data);
      await AsyncStorage.setItem('userToken', jsonValue);
      await AsyncStorage.setItem('isLoggin', `${true}`);
      getUserInformation(response?.data?.access_token);
    });
  };

  const getUserInformation = async (token) => {
    const url = 'https://api.unsplash.com/me';
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url,
    };

    await axios(options).then((response) => {

      props?.userInfo(response?.data);
      setUserInfo(response?.data);
      props.navigation.replace('DrawerScreen', { item: response?.data });
    });
  };

  useEffect(() => {
    if (props.route?.params.item) {
      props?.userAccessToken(props.route?.params.item);
      getUserInformation(props.route?.params.item?.access_token);
    } else {
      props.userAccessCode(props.route?.params?.code);
      if (Object.keys(accessUserToken).length === 0) {
        getUserToken(props.route?.params?.code);
      }
    }
  }, []);

  return (
    <View>
      <Text>AuthComfromScreen</Text>
    </View>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    userAccessCode: (code) => dispatch(UserAccessCode(code)),
    userAccessToken: (token) => dispatch(UserAccessToken(token)),
    userInfo: (info) => dispatch(AllUserInfo(info)),
  };
};

const mapStatetoProps = (state) => {
  return {
    accessUserCode: state.accessCode,
    accessUserToken: state.accessToken,
    userInfoData: state.userInfo,
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(AuthComfromScreen);

const styles = StyleSheet.create({});
