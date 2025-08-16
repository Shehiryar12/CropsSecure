import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const LandComponenttwo = ({ name, placeholder }) => {
  return (
    <SafeAreaView>
      <Text style={styles.name}>{name}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props?.placeholder}
          style={styles.input}
          placeholderTextColor={props?.placeholderTextColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default LandComponenttwo;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#009245',
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 16,
    paddingRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  name: {
    marginLeft: 16,
    marginTop: 16,
    fontFamily: Font.medium,
    fontSize: 14,
  },
});
