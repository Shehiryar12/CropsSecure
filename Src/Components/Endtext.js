import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { useNavigation } from '@react-navigation/native';

const Endtext = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.textstyle}>{props?.title}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>{props?.buttontext}</Text>
      </TouchableOpacity>

      <Text style={styles.accounttext}>
         {props?.accounttext}
        <Text
          style={styles.logintext}
          onPress={() => navigation.navigate('Welcome')}
        >
          Login
        </Text>

       
      </Text>

      {/* <Text style={styles.authorized}>Register as a Authorized Dealer</Text> */}

        <TouchableOpacity onPress={() => navigation.navigate('Authorized')}>
        <Text style={styles.authorized}>Register as a Authorized Dealer</Text>
      </TouchableOpacity>

     
    </View>
  );
};

export default Endtext;

const styles = StyleSheet.create({
  textstyle: {
    paddingHorizontal: 40,
    fontSize: 9,
    fontFamily: Font.medium,
    marginTop: 18,
    // flexWrap:'wrap',
  },

  button: {
    backgroundColor: '#009245',
    // paddingHorizontal:10,
    marginHorizontal: 25,
    // marginHorizontal:10,
    borderRadius: 8,
    marginTop: 34,
    // paddingVertical:10,
  },
  buttontext: {
    textAlign: 'center',
    paddingVertical: 13,
    color: 'white',
  },
  accounttext: {
    textAlign: 'center',
    fontSize: 10,
  },
  logintext: {
    color: 'green',
  },
  authorized:{
    textAlign:"center",
    // fontSize:14,
    fontSize:12,
    marginTop:40,
    color:"#006838"
  }
  
});
