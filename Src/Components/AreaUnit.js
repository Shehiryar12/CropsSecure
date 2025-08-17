import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AreaUnit = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.heading}>{props?.label}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          marginHorizontal: 40,
          paddingHorizontal: 8,

          justifyContent: 'space-between',
          height: 47,
          width: 120,
          flexDirection: 'row',

          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder={props?.placeholder}
          keyboardType={props?.keyboardType}
          style={{ fontFamily: Font.medium,  flex: 1 }}
          placeholderTextColor={'#DBD8D8'}
        />
        <MaterialIcons name="keyboard-arrow-down" size={21} color="#DBD8D8" />
      </View>
    </View>
  );
};

export default AreaUnit;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Font.medium,
    marginTop: 27,
    color: '#646464',
    marginHorizontal: 42,
  },
});
