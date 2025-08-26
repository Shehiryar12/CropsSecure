import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSendOTP = () => {
    if (email === '') {
      setError('*Email is required');
    } else {
      setError('');
      // OTP logic here
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={24} color="#000000" style={styles.icon} />
        <Text style={styles.heading}>Forgot Password</Text>
        <View style={{ width: 39 }}></View>
      </View>

      <Text style={styles.define}>
        Enter your email to receive an OTP and reset your password
      </Text>

      <View style={styles.emailcontainer}>
        <Text style={styles.emailstyle}>Email</Text>

        <TextInput
          style={styles.textinput}
          placeholder="Enter your email"
          placeholderTextColor="#DBD8D8"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          borderColor="lightgrey"
        />

        {error !== '' && <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text>}

        <TouchableOpacity style={styles.OTP} onPress={handleSendOTP}>
          <Text style={styles.otpstyle}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 11, marginTop: 20 },
  heading: { fontFamily: Font.bold, fontSize: 16, color: '#000' },
  define: { marginTop: 11, color: '#646464', width: 280, marginHorizontal: 35, textAlign: 'center', fontFamily: Font.medium, fontSize: 12 },
  emailcontainer: { paddingHorizontal: 22 },
  emailstyle: { color: '#646464', fontFamily: Font.medium, marginTop: 30 },
  textinput: { borderWidth: 1, borderRadius: 8, paddingHorizontal: 8 ,borderColor:'#646464'},
  OTP: { backgroundColor: '#009245', marginTop: 90, borderRadius: 8 },
  otpstyle: { textAlign: 'center', marginVertical: 10, color: 'white' },
});
