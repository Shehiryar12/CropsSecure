import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const PasswordInput = (props) => {
  const [show, setShow] = useState(true); 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props?.title}</Text>

      <View style={styles.Box}>
        <TextInput
          style={styles.textinput}
          placeholder= {props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
          secureTextEntry={show}
        />
        <TouchableOpacity onPress={() => setShow(!show)}>
          <MaterialIcons
            name={show ? 'visibility-off' : 'visibility'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    marginTop: 18,
  },
  header: {
    marginBottom: 5,
    // fontSize: 16,
    // color: '#000',
    fontFamily:Font.medium,
     color:"#646464",
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor:"#DBD8D8",
    
   
  },
  textinput: {
    flex: 1,
    height: 40,
    // borderRadius:8,
    
  },
});
