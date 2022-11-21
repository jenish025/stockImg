import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAnimatedStyle } from 'react-native-reanimated';

const CustomBackGround = (props) => {
  const { animatedIndex, style } = props;
  const animateStyle = useAnimatedStyle(() => ({
    ...style,
    backgroundColor: '#ffff',
    opacity: interpolate(animatedIndex.value, [0, 0.5], [0, 1]),
  }));
  return <View style={animateStyle} />;
};

export default CustomBackGround;

const styles = StyleSheet.create({});
