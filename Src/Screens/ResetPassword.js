import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Reset from '../Components/Reset';
import PasswordInput from '../Components/Passwordinput';
import { Font } from '../Constant/Font';
import { useNavigation } from '@react-navigation/native';
import { wp, hp } from '../Constant/Responsive';

const ResetPassword = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleConfirm = () => {
    let valid = true;

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm password is required');
      valid = false;
    }

    if (valid) {
      console.log('Password reset successful!');
      navigation.navigate('Welcome');
    }
  };

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
        value={password}
        onChangeText={text => {
          setPassword(text);
          setPasswordError('');
        }}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <PasswordInput
        title="Confirm Password"
        placeholder="Confirm your password"
        placeholderTextColor="#DBD8D8"
        value={confirmPassword}
        onChangeText={text => {
          setConfirmPassword(text);
          setConfirmPasswordError('');
        }}
      />
      {confirmPasswordError ? (
        <Text style={styles.error}>{confirmPasswordError}</Text>
      ) : null}

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
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
    marginHorizontal: wp('6%'),   
    marginTop: hp('3%'),         
    borderRadius: wp('2%'),      
  },
  confirm: {
    textAlign: 'center',
    marginVertical: hp('1.5%'),   
    color: 'white',
    fontFamily: Font.medium,
    fontSize: wp('4%'),         
  },
  error: {
    marginLeft: wp('6%'),
    marginTop: hp('0.7%'),
    fontFamily: Font.medium,
    color: 'red',
    fontSize: wp('3%'),
  },
});
