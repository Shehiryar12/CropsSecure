import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
const PasswordContainer = props => {
  const [pass, setPass] = useState(true);

  return (
    <View>
      <Text style={styles.titletext}>{props?.title}</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.password}
          placeholder= {props?.placeholder}
        //   placeholderTextColor={props?.placeholder}
          secureTextEntry={pass}
          placeholderTextColor={"#DBD8D8"}
        />
        <TouchableOpacity onPress={() => setPass(!pass)}>
          <MaterialIcons
            name={pass ? 'visibility' : 'visibility-off'}
            style={styles.passwordicon}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordContainer;

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 19,
    borderBottomColor: '#D9D9D9',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D9D9D9',
    paddingHorizontal: 5,
  },
  password: {
    flex: 1,
    fontFamily: Font.medium,
    fontSize: 11,
  },
  passwordicon: {
    color: '#B4B4B4',
  },
  titletext: {
    paddingHorizontal: 19,
    marginTop: 22,
    fontFamily: Font.medium,
    fontSize: 13,
    color: '#646464',
  },
});
