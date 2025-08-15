import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LandComponent = (props) => {
  return (
    <View style={styles.container}>
   
      <TextInput
        placeholder={props?.placeholder}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <MaterialIcons 
        name={"keyboard-arrow-right"} 
        size={24} 
        color="#555" 
        style={styles.icon}
      />
    </View>
  );
};

export default LandComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1, // takes remaining space
    fontSize: 16,
    color: '#000',
  },
  icon: {
    marginLeft: 8,
  },
});
