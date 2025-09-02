import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PhoneCnicEmailInput = props => {
  return (
    <View>
      <Text style={styles.label}>{props?.title}</Text>
      <TextInput
        style={styles.input}
        placeholder={props?.placeholder}
        maxLength={props?.maxLength}
        fontSize={wp('3%')}
        keyboardType="numeric"
        placeholderTextColor={'#DBD8D8'}
        value={props?.value}
        onChangeText={props?.onChangeText}
      />
    </View>
  );
};

export default PhoneCnicEmailInput;

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: wp('5%'), 
    marginTop: hp('2.5%'),
    fontFamily: Font.medium,
    fontSize: wp('3.5%'), 
    color: '#646464',
  },
  input: {
    height: hp('6%'),
    marginHorizontal: wp('5%'), 
    borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    fontFamily: Font.medium,
    borderRadius: wp('2%'), 
    paddingHorizontal: wp('2%'), 
  },
});
