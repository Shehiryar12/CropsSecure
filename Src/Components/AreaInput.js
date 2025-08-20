import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { wp, hp } from '../Constant/Responsive';

const AreaInput = props => {
  return (
    <View>
      <Text style={styles.textinputname}>{props?.title}</Text>
      <View
        style={[
          styles.box,
          {
            borderColor: props?.borderColor,
            borderRadius: props?.borderRadius,
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
          borderRadius={props?.borderRadius}
          fontSize={props?.fontSize}
          keyboardType={props?.keyboardType}
        />
      </View>
    </View>
  );
};

export default AreaInput;

const styles = StyleSheet.create({
  textinputname: {
    marginTop: hp(2.5),
    fontFamily: Font.medium,
    fontSize: wp(3.5),
    marginLeft: wp(5.5),
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp(3),
    paddingVertical: hp(0.4),
    paddingHorizontal: wp(0.5),
    marginHorizontal: wp(5),
  },
  input: {
    flex: 1,
    fontFamily: Font.medium,
  },
});
