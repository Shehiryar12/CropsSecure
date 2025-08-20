import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

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
    marginTop: 20,
    fontFamily: Font.medium,
    // color: '#646464',
    fontSize: 13,
    marginLeft: 22,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 2,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    fontFamily: Font.medium,
  },
});
