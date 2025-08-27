import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const PasswordInput = props => {
  const [show, setShow] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props?.title}</Text>

      <View style={styles.Box}>
        <TextInput
          style={styles.textinput}
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
          secureTextEntry={show}
           value={props?.value}   // 🔥 ye line add karo
  onChangeText={props?.onChangeText}   // 🔥 ye line add karo
        />
        <TouchableOpacity onPress={() => setShow(!show)}>
          <MaterialIcons
            name={show ? 'visibility-off' : 'visibility'}
            size={20}
            color="#DBD8D8"
          />
        </TouchableOpacity>
      </View>
    </View>   
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  header: {
    marginBottom: 5,
    fontFamily: Font.medium,
    color: '#646464',
    marginLeft:22,
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#DBD8D8',
    paddingHorizontal: 6,
    marginHorizontal:22,
  },
  textinput: {
    flex: 1,
    fontFamily:Font.medium,
    fontSize:11,
  },
});
