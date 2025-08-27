import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Reset from '../Components/Reset';
import PasswordInput from '../Components/Passwordinput';
import { Font } from '../Constant/Font';

const ResetPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Reset
        title="Reset Password"
        define="Enter your new password below to reset your account"
      />

      <PasswordInput
        title="Password"
        placeholder="Enter your password"
        placeholderTextColor="#DBD8D8"
        style={styles.PasswordInput}
      />
      <PasswordInput
        title="Confirm Password"
        placeholder="Confirm your password"
        placeholderTextColor="#DBD8D8"
         style={styles.PasswordInput}
      />

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirm}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  confirmButton: {
    backgroundColor: '#009245',
    marginHorizontal: 25,
    marginTop: 30,
    borderRadius: 8,
  },
  confirm: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
  },
  
});
