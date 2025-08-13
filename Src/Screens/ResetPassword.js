import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Reset from '../Components/Reset';
import PasswordInput from '../Components/Passwordinput';

const ResetPassword = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 15,backgroundColor:'red' }}>
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

      <TouchableOpacity style={styles.confirmbutton}>
        <Text style={styles.confirm}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  confirmbutton: {
    backgroundColor: '#009245',

    marginHorizontal: 25,
    marginTop: 90,
    borderRadius: 8,
  },
  confirm: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
  },
});
