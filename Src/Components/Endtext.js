import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Font } from '../Constant/Font';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const Endtext = props => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <Text style={styles.textstyle}>{props?.title}</Text>

      {/* Sign up button works with props.onPress */}
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttontext}>{props?.buttontext}</Text>
      </TouchableOpacity>

      <View style={styles.accountWrap}>
        <Text style={styles.accountText}>{props?.accounttext}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.authWrap}>
    
        <TouchableOpacity onPress={() => navigation.navigate('Authorized')}>
          <Text style={styles.authorized}>
            Register as an authorized dealer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Endtext;

const styles = StyleSheet.create({
  textstyle: {
    paddingHorizontal: 10,
    marginTop: 18,
    paddingLeft: 35,
    fontSize: 9,
    fontFamily: Font.medium,
    width:290,
  },
  button: {
    backgroundColor: '#009245',
    marginHorizontal: 25,
    borderRadius: 8,
    marginTop: 34,
  },
  buttontext: {
    textAlign: 'center',
    paddingVertical: 13,
    color: 'white',
  },
  accountWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  accountText: {
    fontSize: 10,
    fontFamily: Font.medium,
    textAlign: 'center',
  },
  loginText: {
    fontSize: 10,
    fontFamily: Font.bold,
    color: 'green',
    textAlign: 'center',
    marginLeft: 1,
  },
  authWrap: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
   
  },
  authorized: {
    fontSize: 12,
    marginLeft: 5,
    fontFamily: Font.medium,
    color:'green',
    
  },
});
