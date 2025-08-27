import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

import PasswordInput from '../Components/Passwordinput';
import Dob from '../Components/Dob';
import Endtext from '../Components/Endtext';
import AuthorizedAccount from '../Components/AuthorizedAccount';

const Authorized = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = () => {
    setSubmitted(true);
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.header}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#000000" />
          <Text style={styles.heading}>Create Account</Text>
          <View style={{ width: 25 }} />
        </View>

        <Text style={styles.Authorizedtext}>Register as Authorized Dealer</Text>
        <AuthorizedAccount
          title="Name"
          placeholder="Enter your name"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          value={name}
          onChangeText={setName}
        />
        {submitted && name === '' ? (
          <Text style={styles.error}>Name is required</Text>
        ) : null}

        <AuthorizedAccount
          title="Father’s Name"
          placeholder="Enter your father’s name"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          value={fatherName}
          onChangeText={setFatherName}
        />
        {submitted && fatherName === '' ? (
          <Text style={styles.error}>Father’s Name is required</Text>
        ) : null}

        {/* CNIC */}
        <AuthorizedAccount
          title="CNIC"
          placeholder="Enter your CNIC"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          maxLength={13}
          value={cnic}
          onChangeText={setCnic}
        />
        {submitted && cnic === '' ? (
          <Text style={styles.error}>CNIC is required</Text>
        ) : null}

        {/* Email */}
        <AuthorizedAccount
          title="Email"
          placeholder="Enter your email"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          value={email}
          onChangeText={setEmail}
        />
        {submitted && email === '' ? (
          <Text style={styles.error}>Email is required</Text>
        ) : null}

        {/* Phone */}
        <AuthorizedAccount
          title="Phone Number"
          placeholder="Enter your phone number"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          maxLength={11}
          value={phone}
          onChangeText={setPhone}
        />
        {submitted && phone === '' ? (
          <Text style={styles.error}>Phone Number is required</Text>
        ) : null}

        {/* DOB */}
        <Dob
          title="DOB"
          placeholder="Your DOB"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          value={dob}
          onChangeText={setDob}
        />

        {/* Password */}
        <PasswordInput
          title="Password"
          placeholder="Enter your password"
          placeholderTextColor="#DBD8D8"
          value={password}
          onChangeText={setPassword}
        />
        {submitted && password === '' ? (
          <Text style={styles.error}>Password is required</Text>
        ) : null}

        <PasswordInput
          title="Confirm Password"
          placeholder="Confirm your password"
          placeholderTextColor="#DBD8D8"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {submitted && confirmPassword === '' ? (
          <Text style={styles.error}>Confirm Password is required</Text>
        ) : null}

        <Endtext
          title={
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                <MaterialIcons
                  name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                  size={16}
                  color="black"
                  marginTop={3}
                  marginLeft={8}
                  borderColor="#727171"
                  backgroundColor="white"
                />
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                By selecting checkbox I agree to Crop Secure's{' '}
                <Text style={styles.linkText}>Terms of Service</Text> and{' '}
                <Text style={styles.linkText}>Privacy Policy</Text>
              </Text>
            </View>
          }
          buttontext="Sign Up"
          accounttext="Already have an account? "
          onPress={handleSubmit}
        />
      </ScrollView>
    </View>
  );
};

export default Authorized;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    marginTop: 12,
  },
  heading: {
    fontFamily: Font.bold,
    color: '#000',
    marginTop: 45,
  },
  Authorizedtext: {
    paddingHorizontal: 18,
    color: '#009245',
    marginTop: 14,
    fontSize: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    
  },
  checkboxText: {
    fontSize: 11,
    lineHeight: 16,
    marginTop: 2,

 
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 11,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginLeft: 25,
    marginTop: 2,
  },
});
