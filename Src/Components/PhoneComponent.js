import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font, fontSize } from '../Constant/Font';
import { wp, hp } from '../Constant/Responsive';
import { Image } from 'react-native';

const PhoneComponent = props => {
  return (
      <View>
        <View style={styles.signupcontainer}>
          <Text style={styles.label}>{props?.label}</Text>
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.setheading}>{props?.setAccount}</Text>
          <Text style={styles.smalltext}>{props?.small}</Text>
        
        <Image source={require("../Assets/Images/Group.png")} style={styles.firstphonestyle}/>
        </View>
      </View>
  );
};

export default PhoneComponent;

const styles = StyleSheet.create({
  signupcontainer: {
    backgroundColor: '#4AB95A',
    height: hp(12.3),
  },

  label: {
    fontFamily: Font.bold,
    marginLeft: wp(5.6),
    color: '#FFFFFF',
    height: hp(14),
    marginTop: hp(6.8),
  },
  setheading: {
    fontFamily: Font.bold,
    marginLeft: wp(5.5),
    marginTop: hp(2.5),
    fontSize: wp(5.3),
  },
  smalltext:{
    marginLeft:wp(5.7),
    fontSize:wp(3.1),
  },
  firstphonestyle:{

 width: wp(72),          
  height: hp(15),         
  resizeMode: 'contain', 
  alignSelf: 'center',   
  marginRight:wp(1.1),
  },

  
});
