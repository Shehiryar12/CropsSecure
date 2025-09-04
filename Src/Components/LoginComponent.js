import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginHeaderComponent from './LoginHeaderComponent';
import { wp, hp } from '../Constant/Responsive';
import { Font } from '../Constant/Font';

const LoginComponent = props => {
  return (
    <View style={styles.backgroundstyle}>
      <LoginHeaderComponent label="Login" />
      <View style={styles.innerContainer}>
        <Text style={styles.setheading}>Welcome Back</Text>
        <Text style={styles.smalltext}>{props?.small}</Text>
      </View>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  backgroundstyle: {
    flex: 1,
    backgroundColor: '#4AB95A',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
  },
  setheading: {
    fontFamily: Font.bold,
    marginLeft: wp(5.5),
    marginTop: hp(2.5),
    fontSize: wp(5.1),
  },
  smalltext: {
    marginLeft: wp(5.7),
    fontSize: wp(2.6),
    fontFamily: Font.medium,
  },
});
