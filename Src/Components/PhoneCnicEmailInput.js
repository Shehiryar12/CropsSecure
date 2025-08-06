import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const PhoneCnicEmailInput = props => {
  return (
    <View>
      <Text style={styles.label}>{props?.title}</Text>
      <TextInput
        style={styles.input}
        placeholder={props?.placeholder}
        // placeholderTextColor={props?.placeholder}
        maxLength={props?.maxLength}
        fontSize={11}
        keyboardType="numeric"
          placeholderTextColor={"#DBD8D8"}
      />
    </View>
  );
};

export default PhoneCnicEmailInput;

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 19,
    marginTop: 22,
    fontFamily: Font.medium,
    fontSize: 13,
    color: '#646464',
  },
  input: {
    height: 48,
    marginHorizontal: 19,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    fontFamily: Font.medium,
    borderRadius: 8,
    paddingHorizontal: 5,
   
    
  },
});
