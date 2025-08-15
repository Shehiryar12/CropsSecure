import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const LandComponenttwo = props => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{ fontFamily: Font.medium, marginBottom: 5, color: '#646464', }}
      >
        {props?.label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#DBD8D8',
          borderRadius: 8,
          paddingHorizontal: 7,
          // backgroundColor: '#fff',
        }}
      >
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
           style={{
            flex: 1,
            color: props?.textColor,
            borderColor:props?.borderColor,
            // marginHorizontal:10,
           
           
          }}
        />
        <MaterialIcons name="keyboard-arrow-down" size={24} color="#888" />
      </View>
    </View>
  );
};

export default LandComponenttwo;

const styles = StyleSheet.create({});
