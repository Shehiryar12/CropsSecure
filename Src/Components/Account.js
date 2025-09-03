import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { wp, hp } from '../Constant/Responsive';


const Account = props => {
  return (
    <View style={styles.NameContainer}>
      <Text style={styles.namestyle}>{props?.title}</Text>
      <TextInput
        style={styles.textinput}
        placeholder={props?.placeholder}
        placeholderTextColor={props?.placeholderTextColor}
        borderColor={props?.borderColor}
        maxLength={props?.maxLength}
        value={props?.value}
        onChangeText={props?.onChangeText}
      />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  NameContainer: {
    paddingHorizontal: wp('5.5%'), 
    marginTop: hp('2%'),          
  },
  namestyle: {
    fontFamily: Font.medium,
    color: '#646464',
    fontSize: hp('1.8%'), 
  },
  textinput: {
    borderWidth: 1,
    borderRadius: wp('2%'),     
    paddingHorizontal: wp('2%'),
    height: hp('6%'),           
  },
});
