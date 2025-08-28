import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Reset from '../Components/Reset';
import PasswordInput from '../Components/Passwordinput';
import { Font } from '../Constant/Font';
import { useNavigation } from '@react-navigation/native';  // 👈 import

const ResetPassword = () => {
  const navigation = useNavigation(); // 👈 navigation hook

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

    // ✅ Agar dono valid hain to navigate
    if (valid) {
      console.log('Password reset successful!');
     navigation.navigate('Welcome')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Reset
        title="Reset Password"
        define="Enter your new password below to reset your account"
      />

      {/* Password Field */}
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

      {/* Confirm Password Field */}
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

      {/* Confirm Button */}
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
    marginHorizontal: 25,
    marginTop: 30,
    borderRadius: 8,
  },
  confirm: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    fontFamily: Font.medium,
  },
  error: {
    marginLeft: 25,
    marginTop: 5,
    fontFamily: Font.medium,
    color: 'red',
    fontSize: 12,
  },
});
