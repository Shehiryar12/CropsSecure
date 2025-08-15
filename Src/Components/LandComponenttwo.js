import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const LandComponenttwo = props => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{ fontFamily: Font.medium, marginBottom: 5, color: '#646464',marginHorizontal:7, }}
      >
        {props?.label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: props?.borderColor || '#DBD8D8', // ye line add karo
          borderRadius: 8,
          // paddingHorizontal: 7,
                    // 
                    marginHorizontal:7,
        }}
      >
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
          borderColor={props?.borderColor}
           style={{
            flex: 1,
            color: props?.textColor,   
          
          }}
        />
        <MaterialIcons name="keyboard-arrow-down" size={24} color="#DBD8D8" />
      </View>
    </View>
  );
};

export default LandComponenttwo;

const styles = StyleSheet.create({});
