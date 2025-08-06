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

      <Text style={{ color: '#009245', marginTop: 14 }}>
        Sign In
      </Text>

      <View>
        <Text
          style={{
            paddingHorizontal: 13,
            marginTop: 22,
            fontFamily: Font.medium,
            fontSize: 13,
            color: '#646464',
          }}
        >
          Phone/cnic/email id
        </Text>
        <TextInput
          style={styles.phone}
          placeholder="Enter phone/cnic/email id"
          placeholderTextColor={'#DBD8D8'}
          maxLength={13}
        />

        <Text
          style={{
            paddingHorizontal: 15,
            marginTop: 22,
            fontFamily: Font.medium,
            fontSize: 13,
            color: '#646464',
          }}
        >
          Password
        </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.password}
            placeholder="Enter your password"
            placeholderTextColor={'#DBD8D8'}
            secureTextEntry={pass}
          />
          <TouchableOpacity onPress={() => setPass(!pass)}>
            <MaterialIcons
              name={pass ? 'visibility' : 'visibility-off'}
              style={styles.passwordicon}
              size={20}
            />
          </TouchableOpacity>
        </View>
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
    // marginTop:30,
    fontFamily: Font.Bold,
    fontSize: 17,
    marginTop: 50,
  },
  phone: {
    borderWidth: 1,
    marginHorizontal: 14,
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
    marginHorizontal: 16,
    borderRadius: 8,
    borderColor: '#DBD8D8',
    height: 45,
    paddingHorizontal: 10,
  },
  passwordicon: {
    color: '#DBD8D8',
  },
});
