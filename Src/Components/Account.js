import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

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
    paddingHorizontal: 21,
    marginTop: 18,
    // marginHorizontal:10,
  },
  namestyle: {
    fontFamily: Font.medium,
   color:"#646464"
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal:8,
  },
});
