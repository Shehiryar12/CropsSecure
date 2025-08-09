import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const ForgotPassword = () => {
  return (
    <View>
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color="#000000"
          style={styles.icon}
        />

        <Text style={styles.heading}>Forgot Password</Text>

        <View style={{ width: 39 }}></View>
      </View>

      <View>
        <Text style={styles.define}>
          Enter your email to receive an OTP and reset your password
        </Text>

        <View style={styles.emailcontainer}>
          <Text style={styles.emailstyle}>Email</Text>

          <TextInput
            style={styles.textinput}
            placeholder="Enter your email"
            placeholderTextColor="#DBD8D8"
            borderColor="#DBD8D8"
            keyboardType="email-address"
          />

          <TouchableOpacity style={styles.OTP}>
            <Text style={styles.otpstyle}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    marginTop: 20,
  },

  heading: {
    fontFamily: Font.bold,
    fontSize: 16,
    color: '#000',
    // marginTop: 13,
  },
  define: {
    marginTop: 11,
    color: '#646464',
    width: 280,
    marginHorizontal: 35,
    textAlign: 'center',
  },
  NameContainer: {
    paddingHorizontal: 21,
    marginTop: 18,
    // marginHorizontal:10,
  },
  namestyle: {
    fontFamily: Font.medium,
    color: '#646464',
  },

  emailcontainer: {
    paddingHorizontal: 22,
  },

  emailstyle: {
    color: '#646464',
    fontFamily: Font.medium,
    marginTop: 30,
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  OTP:{
    backgroundColor:"#009245",
    // marginTop,
    marginTop:90,
    borderRadius:8,
  },
  otpstyle:{
     textAlign:"center",
    marginVertical:10, 
    color:"white",
  }
});
