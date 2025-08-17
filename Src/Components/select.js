import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const Select = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color:"white",fontFamily:Font.medium,fontSize:10,paddingLeft:10,paddingRight:10,}}>{props?.title}</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder='No file selected' placeholderTextColor={"#DBD8D8"}/>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBD8D8',
    borderRadius: 8,
    marginHorizontal: 21,
    paddingHorizontal: 10,
    marginTop:5 ,
  },
  btn: {
    marginRight: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#009245',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 12,
    
    fontFamily:Font.medium
  },
});
