import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import Account from '../Components/Account';
import PasswordInput from '../Components/Passwordinput';
import Dob from '../Components/Dob';
import Endtext from '../Components/Endtext';
import { useNavigation } from '@react-navigation/native';
import { wp, hp } from '../Constant/Responsive';

const AccountScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!fatherName) newErrors.fatherName = 'Father’s Name is required';
    if (!cnic) newErrors.cnic = 'CNIC is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phone) newErrors.phone = 'Phone is required';
    if (!dob) newErrors.dob = 'DOB is required';
    if (!password) newErrors.password = 'Password is required';
    if (!cpassword) newErrors.cpassword = 'Confirm Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigation.navigate('Authorized');
    }
  };

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

          <View style={styles.space}></View>
        </View>
        <Text style={styles.signintext}> Sign up</Text>

        <Account
          title="Name"
          placeholder="Enter your name"
          placeholderTextColor="#DBD8D8"
          borderColor="green"
          value={name}
          onChangeText={text => {
            setName(text);
            setErrors({ ...errors, name: '' });
          }}
        />
        {errors.name ? (
          <Text style={styles.errorText}>{errors.name}</Text>
        ) : null}

        <Account
          title="Father’s Name"
          placeholder="Enter your father’s name"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          value={fatherName}
          onChangeText={text => {
            setFatherName(text);
            setErrors({ ...errors, fatherName: '' });
          }}
        />
        {errors.fatherName ? (
          <Text style={styles.errorText}>{errors.fatherName}</Text>
        ) : null}

        <Account
          title="CNIC"
          placeholder="Enter your CNIC"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          maxLength={11}
          value={cnic}
          onChangeText={text => {
            setCnic(text);
            setErrors({ ...errors, cnic: '' });
          }}
        />
        {errors.cnic ? (
          <Text style={styles.errorText}>{errors.cnic}</Text>
        ) : null}

        <Account
          title="Email"
          placeholder="Enter your email"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setErrors({ ...errors, email: '' });
          }}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

        <Account
          title="Phone Number"
          placeholder="Enter your phone number"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          maxLength={11}
          value={phone}
          onChangeText={text => {
            setPhone(text);
            setErrors({ ...errors, phone: '' });
          }}
        />
        {errors.phone ? (
          <Text style={styles.errorText}>{errors.phone}</Text>
        ) : null}

        <Dob
          title="DOB "
          placeholder="Your DOB"
          placeholderTextColor="#DBD8D8"
          borderColor="#DBD8D8"
          value={dob}
          onChangeText={text => {
            setDob(text);
            setErrors({ ...errors, dob: '' });
          }}
        />
        {errors.dob ? <Text style={styles.errorText}>{errors.dob}</Text> : null}

        <PasswordInput
          title="Password"
          placeholder="Enter your password"
          placeholderTextColor="#DBD8D8"
          value={password}
          onChangeText={text => {
            setPassword(text);
            setErrors({ ...errors, password: '' });
          }}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <PasswordInput
          title="Confirm Password"
          placeholder="Confirm your password"
          placeholderTextColor="#DBD8D8"
          value={cpassword}
          onChangeText={text => {
            setCpassword(text);
            setErrors({ ...errors, cpassword: '' });
          }}
        />
        {errors.cpassword ? (
          <Text style={styles.errorText}>{errors.cpassword}</Text>
        ) : null}

        <Endtext
          title="By selecting checkbox l agree to Crop Secure's Terms of Service, and Privacy Policy."
          buttontext="Sign up"
          accounttext="Already have an account? "
          onPress={validateForm}
        />
      </ScrollView>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  space: {
    width: wp(8),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
    marginTop: hp(1),
  },
  heading: {
    fontFamily: Font.bold,
    color: '#000',
    marginTop: hp(7),
  },
  signintext: {
    paddingHorizontal: wp(5),
    color: '#009245',
    marginTop: hp(2),
    fontSize: wp(4),
  },
  NameContainer: {
    paddingHorizontal: wp(10),
    marginTop: hp(2.3),
  },
  namestyle: {
    fontFamily: Font.medium,
  },
  textinput: {
    borderWidth: 1,
    borderRadius: wp(2),
  },
  errorText: {
    color: 'red',
    marginLeft: wp(5.8),
  },
});
