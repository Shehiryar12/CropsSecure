import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddlandComponent = props => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.heading}>{props?.label}</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          marginHorizontal: 18,
          paddingHorizontal: 8,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder={props?.placeholder}
          placeholderTextColor="grey"
        />
        <MaterialIcons name="location-on" size={21} color="#DBD8D8" />
      </View>
    </View>
  );
};

export default AddlandComponent;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Font.medium,
    marginLeft: 19,
    marginTop: 27,
    color: '#646464',
  },
  input: {
    flex: 1, // take all available space
    fontSize: 12,
    paddingVertical: 13,
    flexDirection: 'row',
    color: '#DBD8D8',
    fontFamily: Font.medium,
  },
});
