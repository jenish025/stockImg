import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  AllUserInfo,
  UserAccessCode,
  UserAccessToken,
} from '../Redux/Action/UserAuthAction';
import axios from 'axios';
import { getUserAccessTokenData } from '../Api/UserAuthApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const { accessUserCode, accessUserToken, userInfoData } = props;

  const getUserAccessToken = async (code) => {
    axios
      .post(
        `https://unsplash.com/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=exp%3A%2F%2F127.0.0.1%3A19000%2F--%2Fdashbord&client_id=p4ujNBL74OUjCLjSFjhohACuKCQFKoXvyvO26GLFrOM&client_secret=iTdCCrRWfUCu_4axVPHzd79Fu4pRght9fvGf1GHIH1g`
      )
      .then(async (response) => {
        props?.userAccessToken(response?.data);
        const jsonValue = JSON.stringify(response?.data);
        await AsyncStorage.setItem('userToken', jsonValue);
        await AsyncStorage.setItem('isLoggin', `${true}`);
        getUserInformation(response?.data?.access_token);
      });
  };

  const getUserInformation = (token) => {
    const url = 'https://api.unsplash.com/me';
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url,
    };

    axios(options).then((response) => {
      props?.userInfo(response?.data);
      setUserInfo(response?.data);
    });
  };

  useEffect(() => {
    if (props.route?.params.item) {
      props?.userAccessToken(props.route?.params.item?.access_token);
      getUserInformation(props.route?.params.item?.access_token);
    } else {
      props.userAccessCode(props.route?.params?.code);
      if (Object.keys(accessUserToken).length === 0) {
        getUserAccessToken(props.route?.params?.code);
      }
    }
  }, []);

  // useEffect(() => {
  //   if (accessUserCode != '') {
  //     if (Object.keys(accessUserToken).length === 0) {
  //       console.log('run token api');
  //       getUserAccessToken();
  //     } else {
  //       console.log('accessToken present');
  //       if (Object.keys(userInfoData).length === 0) {
  //         console.log('run user info api');
  //         getUserInformation();
  //       } else {
  //         console.log('user info is done');
  //       }
  //     }
  //   } else {
  //     console.log('Somting want to worng not find accessCode');
  //   }
  //   // console.log(Object.keys(accessUserToken?.accessToken)?.length === 0)
  //   // console.log(accessUserToken,JSON.stringify(accessUserToken?.accessToken));
  // }, [props.route?.params?.code]);

  return (
    <SafeAreaView>
      <Text>{userInfo?.username}name</Text>
    </SafeAreaView>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(DashboardScreen);

const styles = StyleSheet.create({});
