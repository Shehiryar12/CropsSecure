import { ScrollView, StyleSheet, Text,View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

import PasswordInput from '../Components/Passwordinput';
import Dob from '../Components/Dob';
import Endtext from '../Components/Endtext';
import AuthorizedAccount from '../Components/AuthorizedAccount';

const Authorized = () => {
  
  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color="#000000"
            style={styles.icon}
          />

          <Text style={styles.heading}>Create Account</Text>

          <View style={{ width: 25 }}></View>
        </View>

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
          title="DOB "
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
        
      <Endtext
  title="By selecting checkbox I agree to Crop Secure's Terms of Service, and Privacy Policy."
  buttontext="Create Account"
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
    // fontSize: 18,
    color: '#000',
    marginTop: 45,
  },
  Authorizedtext: {
    paddingHorizontal: 18,
    color: '#009245',
    marginTop: 14,
    fontSize: 15,
  },
  NameContainer: {
    paddingHorizontal: 22,
    marginTop: 18,
  },
  namestyle: {
    fontFamily: Font.medium,
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 8,
    // borderColor:"#009245"
  },
});
