import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import PhoneCnicEmailInput from '../Components/PhoneCnicEmailInput';
import PasswordContainer from '../Components/PasswordContainer';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const [yes, setYes] = useState(false);
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('AccountScreen');
  };

  return (
    <View>
  
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color="#000000"
          style={styles.icon}
        />
        <Text style={styles.heading}>Welcome Back!</Text>
        <View style={{ width: 39 }} />
      </View>

   
      <Text style={styles.signintext}>Sign In</Text>

 
      <View>
        <PhoneCnicEmailInput
          title="Phone/cnic/email id"
          placeholder="Enter phone/cnic/email id"
          maxLength={13}
        />
        <PasswordContainer
          title={'Password'}
          placeholder="Enter your password"
        />

        {/* Forgot password */}
        <Text style={styles.passwordtext}>Forgot Password</Text>

        {/* Remember Me */}
        <View style={styles.rememberContainer}>
          <TouchableOpacity onPress={() => setYes(!yes)}>
            <MaterialIcons
              name={yes ? 'check-box' : 'check-box-outline-blank'}
              size={18}
              color="lightgrey"
            />
          </TouchableOpacity>
          <Text style={styles.remember}>Remember Me</Text>
        </View>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signin}>
        <Text style={styles.buttontext}>Sign In</Text>
      </TouchableOpacity>

      {/* Register */}
      <View style={styles.accountstyle}>
        <Text style={styles.account}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    marginTop: 20,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 18,
    color: '#000',
    marginTop: 35,
  },
  signin: {
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
  signintext: {
    color: '#009245',
    paddingHorizontal: 15,
    marginTop: 14,
    fontSize: 16,
  },
  passwordtext: {
    color: '#009245',
    paddingHorizontal: 20,
    marginTop: 5,
    fontSize: 12,
    textDecorationLine:"underline",
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    marginLeft: 20,
   },
  remember: {
    fontFamily: Font.medium,
    fontSize: 10,
    marginLeft: 5, 
  },
  accountstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 10,
  },
  account: {
    fontSize: 8,
    fontFamily: Font.medium,
    color: '#727171',
  },
  register: {
    color: '#009245',
    fontFamily: Font.bold,
    fontSize: 8,
    marginLeft: 4,
    marginTop: -1,
  },
});







//use check box by using use state 