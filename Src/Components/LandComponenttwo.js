import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const LandComponenttwo = (props) => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons 
          name="keyboard-arrow-left" 
          size={24} 
          color="black" 
          style={styles.headerIcon}
        />
        <Text style={styles.heading}>{props?.title}</Text>
        <View style={{ width: 30 }} />
      </View>

    
      <View style={styles.inputContainer}>
        
        <TextInput
          placeholder={props?.placeholder}
          style={styles.input}
          placeholderTextColor="#888"
        />
        <MaterialIcons 
          name="keyboard-arrow-right" 
          size={24} 
          color="black" 
        />    
      </View>
    </SafeAreaView>
  );
};

export default LandComponenttwo;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: 12,
    paddingHorizontal: 1,
  },
  headerIcon: {
    marginLeft: 8,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 8,
  },
});
