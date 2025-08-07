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
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const [pass, setPass] = useState(true);
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

        <View style={{ width: 39 }}></View>
      </View>

      <Text style={styles.signintext}> Sign In</Text>
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

        <Text style={styles.passwordtext}>Forgot Password</Text>
        <Text style={styles.remember}>Remember Me</Text>
      </View>
      <TouchableOpacity style={styles.signin}>
        <Text style={styles.buttontext}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.accountstyle}>
        <Text style={styles.account}> Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.register} >
            Register
          </Text>
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
  phone: {
    borderWidth: 1,
    marginHorizontal: 14,
    marginHorizontal: 21,
    borderColor: '#DBD8D8',
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginHorizontal: 16,
    marginHorizontal: 21,
    borderRadius: 8,
    borderColor: '#DBD8D8',
    height: 45,
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

  signintext: {
    color: '#009245',
    paddingHorizontal: 15,
    marginTop: 14,
    // fontFamily: Font.semiBold,
    fontSize: 16,
  },
  passwordtext: {
    color: '#009245',
    paddingHorizontal: 20,
    marginTop: 5,
    fontSize:12,
  },
  remember: {
    marginTop: 28,
    paddingHorizontal: 20,
    fontFamily: Font.medium,
    fontSize: 11,
    color: '#464444',
  },
  accountstyle:{
    flexDirection:"row",
    justifyContent:'center',
    marginTop: 10,
    fontSize:10,
  },
  account:{
   fontSize:8,
   fontFamily:Font.medium,
   color:"#727171",
  },
  register: {
 color: '#009245',
  fontFamily: Font.bold,
  fontSize: 8,
  marginLeft: 4,
  marginTop:-1,
  
  }
  
});
