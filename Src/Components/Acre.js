import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const Acre = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.heading}>{props?.label}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          marginHorizontal: 18,
          paddingHorizontal: 8,
            width:190,

        }}
      >
        <TextInput
          style={styles.input}
          placeholder={props?.placeholder}
          placeholderTextColor="#DBD8D8"
        />
      </View>
    </View>
  );
};

export default Acre;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Font.medium,
    marginLeft: 19,
    marginTop: 27,
    color: '#646464',
  },
  input: {
    fontSize: 12,
    paddingVertical: 13,
    color: '#DBD8D8',
    fontFamily: Font.medium,
  },
});
