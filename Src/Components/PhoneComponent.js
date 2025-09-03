import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { wp, hp } from '../Constant/Responsive';
import EmailComponent from './InputComponent';
import SignHeaderComponent from './SignHeaderComponent';
import InputComponent from './InputComponent';
import IconInputComponent from './IconInputComponent';
import CheckBoxComponent from './CheckBoxComponent';

const PhoneComponent = props => {
  return (
    <View style={{ flex: 1 }}>
      <SignHeaderComponent label="Sign Up" />

      <View style={styles.innerContainer}>
        <Text style={styles.setheading}>{props?.setAccount}</Text>
        <Text style={styles.smalltext}>{props?.small}</Text>

        <Image
          source={require('../Assets/Images/Group.png')}
          style={styles.firstphonestyle}
        />

        <EmailComponent
          placeholder="Name"
          icon={require('../Assets/Images/person.png')}
          placeholderTextColor="#9F9F9F"
        />

        <InputComponent
          placeholder="Email"
          icon={require('../Assets/Images/Downarrow.png')}
          placeholderTextColor="#9F9F9F"
        />

        <InputComponent
          placeholder="Phone Number"
          icon={require('../Assets/Images/Phone.png')}
          placeholderTextColor="#9F9F9F"
        />
        <InputComponent
          placeholder="Abc"
          icon={require('../Assets/Images/abc.png')}
          placeholderTextColor="#9F9F9F"
          isPassword={true}
        />

        <InputComponent
          placeholder="Confirm Password"
          icon={require('../Assets/Images/abc.png')}
          placeholderTextColor="#9F9F9F"
          isPassword={true}
        />

        <CheckBoxComponent
          buttontext="Sign Up"
          logintext="Login Now"
          policytext="Privacy Policy"
          agreetext=" I agree to "
          condition="Terms & Conditions"
          andthe="and the"
        />
      </View>
    </View>
  );
};

export default PhoneComponent;

const styles = StyleSheet.create({
  signupcontainer: {
    backgroundColor: '#4AB95A',
    height: hp(12.3),
    justifyContent: 'center',
  },

  label: {
    fontFamily: Font.bold,
    marginLeft: wp(5.6),
    color: '#FFFFFF',
    fontSize: wp(4.2),
    paddingTop: hp(4.9),
  },

  setheading: {
    fontFamily: Font.bold,
    marginLeft: wp(5.5),
    marginTop: hp(2.5),
    fontSize: wp(5.3),
  },

  smalltext: {
    marginLeft: wp(5.7),
    fontSize: wp(3.1),
  },

  firstphonestyle: {
    width: wp(72),
    height: hp(15),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: wp(1.1),
    marginTop: hp(0.7),
  },

  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBCBCB',
    borderRadius: wp(1.8),
    marginHorizontal: wp(5.7),
  },
  vectorstyle: {
    marginLeft: wp(2.4),
    width: wp(3.8),
    height: hp(4.9),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  placeholderstyle: {
    fontFamily: Font.medium,
    fontSize: wp(3.6),
    color: 'black',
    flex: 1,
    marginLeft: wp(0.8),
  },
});
