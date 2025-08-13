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

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#000000" />
          <Text style={styles.heading}>Create Account</Text>
          <View style={{ width: 25 }} />
        </View>

        {/* Sub Heading */}
        <Text style={styles.Authorizedtext}>Register as Authorized Dealer</Text>

        {/* Form Fields */}
        <AuthorizedAccount
          title="Name"
          placeholder="Enter your name"
          placeholderTextColor="#DBD8D8"
          borderColor="green"
        />
        <AuthorizedAccount
          title="Father’s Name"
          placeholder="Enter your father’s name"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
        />
        <AuthorizedAccount
          title="CNIC"
          placeholder="Enter your CNIC"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          maxLength={11}
        />
        <AuthorizedAccount
          title="Email"
          placeholder="Enter your email"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
        />
        <AuthorizedAccount
          title="Phone Number"
          placeholder="Enter your phone number"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          maxLength={11}
        />

        <Dob
          title="DOB"
          placeholder="Your DOB"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
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

        {/* Terms + Button + Account Text */}
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
    width: 290,
  },
  checkboxText: {
    fontSize: 11,
    lineHeight: 16,
    flexShrink: 1,
    marginLeft: 4,
    marginTop: 2,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 11,
  },
});
