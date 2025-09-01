import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import PhoneCnicEmailInput from '../Components/PhoneCnicEmailInput';
import PasswordContainer from '../Components/PasswordContainer';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const [yes, setYes] = useState(false);
  const [emailOrPhone, setemailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('AccountScreen');
  };

  const signIn = () => {
    let emailError = '';
    let passwordError = '';

    if (emailOrPhone === '') {
      emailError = 'Plase enter valid email/phone/cnic';
    }
    if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
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
              size={18}
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5,
    fontFamily: Font.medium,
  },
});
