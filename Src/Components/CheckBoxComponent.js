import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { wp, hp } from '../Constant/Responsive';
import { Font } from '../Constant/Font';

const CheckBoxComponent = props => {
  const [yes, setYes] = useState(false);

  return (
    <View>
      <View style={styles.rememberContainer}>
        <TouchableOpacity onPress={() => setYes(!yes)}>
          <MaterialIcons
            name={yes ? 'check-box' : 'check-box-outline-blank'}
            size={wp(3.7)}
            color="green"
            style={styles.checkboxstyle}
          />
        </TouchableOpacity>

        <Text style={styles.remember}>
          {props?.agreetext}
          <Text style={styles.linkText}>{props?.condition}</Text>{' '}
          {props?.andthe}{' '}
          <Text style={styles.linkText}>{props?.policytext}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.signin}>
        <Text style={styles.buttontext}>{props?.buttontext}</Text>
      </TouchableOpacity>

      <Text style={styles.lowertext}>
        If you have an account{' '}
        <Text style={styles.logintext}>{props?.logintext}</Text>
      </Text>
    </View>
  );
};

export default CheckBoxComponent;

const styles = StyleSheet.create({
  rememberContainer: {
    flexDirection: 'row',
    marginTop: hp(2.3),
    marginLeft: wp(5.9),
  },
  remember: {
    fontFamily: Font.medium,
    fontSize: wp(3.0),
    marginLeft: wp(0.5),
    width: wp(59),
  },
  linkText: {
    color: 'green',
    fontFamily: Font.medium,
  },
  checkboxstyle: {
    marginTop: hp(0.12),
  },
  signin: {
    backgroundColor: '#4AB95A',
    marginTop: hp(2.85),
    marginHorizontal: wp(6),
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
  },
  buttontext: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: wp(3.5),
    fontFamily: Font.medium,
  },
  lowertext: {
    textAlign: 'center',
    fontSize: wp(2.7),
    marginTop: hp(2.9),
    fontFamily: Font.medium,
  },
  logintext: {
    color: 'green',
  },
});
