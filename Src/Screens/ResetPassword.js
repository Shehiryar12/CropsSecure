import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Reset from '../Components/Reset';
import PasswordInput from '../Components/Passwordinput';

const ResetPassword = () => {
  return (
    <View>
      <Reset
        title="Reset Password"
        define=" Enter your new password below to reset your account "
        passwordtext="Password"
      />
      <PasswordInput
        title="Password"
        placeholder="Enter your password"
      
        placeholderTextColor="#DBD8D8"
      />
      <PasswordInput
        title="Confirm Password"
        placeholder="Confirm your password"
         placeholderTextColor="#DBD8D8"
      />

         <TouchableOpacity style={styles.OTP}>
                     <Text style={styles.otpstyle}>Send OTP</Text>
                   </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
    OTP: {
    backgroundColor: '#009245',
    // marginTop,
    marginHorizontal:25,
    marginTop: 90,
    borderRadius: 8,
    // paddingHorizontal:20,
  },
    otpstyle: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
  },
});
