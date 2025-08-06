import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import PhoneCnicEmailInput from '../Components/PhoneCnicEmailInput';
import PasswordContainer from '../Components/PasswordContainer';

const Welcome = () => {
  const [pass, setPass] = useState(true);

  return (
    <View>
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color="#000000"
          style={styles.icon}
        />

        <View style={styles.center}>
          <Text style={styles.heading}>Welcome Back!</Text>
        </View>

        <View style={{ width: 37 }}></View>
      </View>

      <Text style={styles.signintext}> Sign In</Text>
      <View>
        <PhoneCnicEmailInput title="Phone/cnic/email id"  placeholder="Enter phone/cnic/email id"  placeholdertextcolor="#DBD8D8"  maxLength={13} />
        <PasswordContainer title={'Password'} placeholder="Enter your password" placeholdertextcolor="#DBD8D8" />

        <Text style={styles.passwordtext}>Forgot Password</Text>
        <Text style={styles.remember}>Remember Me</Text>
      </View>
      <TouchableOpacity style={styles.signin}>
        <Text style={styles.buttontext}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.accountregister}>
        <Text style={styles.account}>
          Don't have an account? <Text style={styles.register}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: 17,
    marginTop: 50,
  },
  phone: {
    borderWidth: 1,
    marginHorizontal: 21,
    borderColor: '#DBD8D8',
    borderRadius: 8,
    marginTop: 10,
    height: 45,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginHorizontal: 21,
    borderRadius: 8,
    borderColor: '#DBD8D8',
    height: 45,
    paddingHorizontal: 10,
  },
  passwordicon: {
    color: '#DBD8D8',
  },
  signin: {
    //  paddingVertical:70,
    backgroundColor: '#009245',
    marginTop: 65,
    marginHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 8,
  },
  buttontext: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  accountregister: {
    marginTop: 10,
  },

  signintext: {
    color: '#009245',
    paddingHorizontal: 19,
    marginTop: 14,
    fontFamily: Font.semiBold,
    fontSize: 16,
  },
  passwordtext: {
    color: '#009245',
    paddingHorizontal: 20,
    marginTop: 2,
  },
  remember: {
    marginTop: 28,
    paddingHorizontal: 20,
    fontFamily: Font.medium,
    fontSize: 11,
    color: '#464444',
  },
  account: {
    textAlign: 'center',
    fontFamily: Font.medium,
    fontSize: 10,
    color: '#727171',
  },
  register: {
    color: '#009245',
    fontFamily: Font.bold,
    fontSize: 10,
    textAlign: 'center',
  },
});
