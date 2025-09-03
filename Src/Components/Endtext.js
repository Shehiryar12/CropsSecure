import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Font } from '../Constant/Font';
import { useNavigation } from '@react-navigation/native';
import { wp, hp } from '../Constant/Responsive';

const Endtext = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.textstyle}>{props?.title}</Text>

      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttontext}>{props?.buttontext}</Text>
      </TouchableOpacity>

      <View style={styles.accountWrap}>
        <Text style={styles.accountText}>{props?.accounttext}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.authWrap}>
        <TouchableOpacity onPress={() => navigation.navigate('Authorized')}>
          <Text style={styles.authorized}>
            Register as an authorized dealer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Endtext;

const styles = StyleSheet.create({
  textstyle: {
    paddingHorizontal: wp(2.7),
    marginTop: hp(2.2),
    paddingLeft: wp(9.7),
    fontSize: wp(2.4),
    fontFamily: Font.medium,
    width: wp(80.6),
  },
  button: {
    backgroundColor: '#009245',
    marginHorizontal: wp(6.9),
    borderRadius: wp(2.2),
    marginTop: hp(4.2),
  },
  buttontext: {
    textAlign: 'center',
    paddingVertical: hp(1.6),
    color: 'white',
  },
  accountWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(1),
  },
  accountText: {
    fontSize: wp(2.8),
    fontFamily: Font.medium,
    textAlign: 'center',
  },
  loginText: {
    fontSize: wp(2.8),
    fontFamily: Font.bold,
    color: 'green',
    textAlign: 'center',
    marginLeft: wp(0.3),
  },
  authWrap: {
    alignItems: 'center',
    marginTop: hp(6.2),
  },
  authorized: {
    fontSize: wp(3.3),
    marginLeft: wp(1.4),
    fontFamily: Font.medium,
    color: 'green',
  },
});
