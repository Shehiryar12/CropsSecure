import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font, fontSize } from '../Constant/Font';
import PhoneCnicEmailInput from '../Components/PhoneCnicEmailInput';
import PasswordContainer from '../Components/PasswordContainer';
import { useNavigation } from '@react-navigation/native';
import { wp, hp } from '../Constant/Responsive';

const Welcome = () => {
  const navigation = useNavigation();

  const [yes, setYes] = useState(false);
  const [emailOrPhone, setemailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  const handleRegister = () => {
    navigation.navigate('AccountScreen');
  };

  const signIn = () => {
    let emailError = '';
    let passwordError = '';

    if (emailOrPhone === '') {
      emailError = 'Plase enter valid email/phone/cnic';
    }
    if (password.length < 8) {
      passwordError = 'Password must be at least 8 characters';
    }

    setError({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      navigation.navigate('FarmerRecord');
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={wp(6)}
          color="#000000"
          style={styles.icon}
        />
        <Text style={styles.heading}>Welcome Back!</Text>
        <View style={{ width: wp(10) }} ></View>
      </View>

      <Text style={styles.signintext}>Sign In</Text>

      <View>
        <PhoneCnicEmailInput
          title="Phone/cnic/email id"
          placeholder="Enter phone/cnic/email id"
          maxLength={13}
          value={emailOrPhone}
          onChangeText={setemailOrPhone}
        />
        {error.email ? (
          <Text style={styles.errorText}>{error.email}</Text>
        ) : null}

        <PasswordContainer
          title={'Password'}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        {error.password ? (
          <Text style={styles.errorText}>{error.password}</Text>
        ) : null}

        <View style={styles.rememberContainer}>
          <TouchableOpacity onPress={() => setYes(!yes)}>
            <MaterialIcons
              name={yes ? 'check-box' : 'check-box-outline-blank'}
              size={wp(4.5)}
              color="green"
              borderColor="lightgrey"
            />
          </TouchableOpacity>
          <Text style={styles.remember}>Remember Me</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.signin} onPress={signIn}>
        <Text style={styles.buttontext}>Sign In</Text>
      </TouchableOpacity>

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
    paddingHorizontal: wp(3),
    marginTop: hp(2.5),
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: wp(4.5),
    color: '#000',
    marginTop: hp(4.5),
  },
  signin: {
    backgroundColor: '#009245',
    marginTop: hp(8),
    marginHorizontal: wp(5),
    paddingVertical: hp(2),
    borderRadius: wp(2),
  },
  buttontext: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: wp(3.5),
    fontFamily:Font.medium
  },
  signintext: {
    color: '#009245',
    paddingHorizontal: wp(4),
    marginTop: hp(1.8),
    fontSize: wp(4),
    fontFamily:Font.bold,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3.5),
    marginLeft: wp(5),
  },
  remember: {
    fontFamily: Font.medium,
    fontSize: wp(2.5),
    marginLeft: wp(1.2),
  },
  accountstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(1.3),
  },
  account: {
    fontSize: wp(2.2),
    fontFamily: Font.medium,
    color: '#727171',
  },
  register: {
    color: '#009245',
    fontFamily: Font.bold,
    fontSize: wp(2.2),
    marginLeft: wp(1),
    marginTop: hp(-0.2),
  },
  errorText: {
    color: 'red',
    fontSize: wp(3),
    marginLeft: wp(5),
    marginTop: hp(0.6),
    fontFamily: Font.medium,
  },
});
