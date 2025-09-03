import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { wp, hp } from '../Constant/Responsive';

const PhoneComponent = props => {
  return (
    <View style={{flex: 1}}>
      
      <View style={styles.signupcontainer}>
        <Text style={styles.label}>{props?.label}</Text>
      </View>

    
      <View style={styles.innerContainer}>
        <Text style={styles.setheading}>{props?.setAccount}</Text>
        <Text style={styles.smalltext}>{props?.small}</Text>

        <Image
          source={require('../Assets/Images/Group.png')}
          style={styles.firstphonestyle}
        />
      </View>
    </View>
  );
};

export default PhoneComponent;

const styles = StyleSheet.create({
  signupcontainer: {
    backgroundColor: '#4AB95A',
    height: hp(12.3),
    justifyContent: 'center',
  },

  label: {
    fontFamily: Font.bold,
    marginLeft: wp(5.6),
    color: '#FFFFFF',
    fontSize: wp(4.2),
    paddingTop:36,
  },

  setheading: {
    fontFamily: Font.bold,
    marginLeft: wp(5.5),
    marginTop: hp(2.5),
    fontSize: wp(5.3),
  },

  smalltext: {
    marginLeft: wp(5.7),
    fontSize: wp(3.1),
  },

  firstphonestyle: {
    width: wp(72),
    height: hp(15),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: wp(1.1),
    marginTop: hp(1.7),
  },

  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: wp(10),
    borderTopRightRadius: wp(10),
   
  },
});
