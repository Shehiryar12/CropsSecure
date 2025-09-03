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
import { wp, hp } from '../Constant/Responsive';


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
          value={props?.value}
          onChangeText={props?.onChangeText}
        />
        <TouchableOpacity onPress={() => setShow(!show)}>
          <MaterialIcons
            name={show ? 'visibility-off' : 'visibility'}
            size={wp('5%')}
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
    marginTop: hp('2%'),
  },
  header: {
    marginBottom: hp('0.7%'),
    fontFamily: Font.medium,
    color: '#646464',
    marginLeft: wp('6.3%'),
    fontSize: wp('3.7%'),
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp('2%'),
    borderColor: '#DBD8D8',
    paddingHorizontal: wp('1.5%'),
    marginHorizontal: wp('6%'),
  },
  textinput: {
    flex: 1,
    fontFamily: Font.medium,
    fontSize: wp('3.5%'),
    paddingVertical: hp('1.4%'),
  },
});
