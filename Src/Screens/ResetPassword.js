import { StyleSheet, View } from 'react-native';
import React from 'react';
import Reset from '../Components/Reset';

const ResetPassword = () => {
  return (
    <View>
      <Reset
        title="Reset Password"
        define=" Enter your new password below to reset your account "
        passwordtext="Password"
      />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
