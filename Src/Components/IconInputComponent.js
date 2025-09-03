import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { wp, hp } from '../Constant/Responsive';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const IconInputComponent = props => {
  const [pass, setPass] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <Image
        source={props?.icon || require('../Assets/Images/abc.png')}
        style={styles.vectorstyle}
      />

      <TextInput
        style={styles.textstyle}
        placeholder={props?.placeholder || 'ABC'}
        placeholderTextColor={props?.placeholderTextColor || '#9F9F9F'}
      />

      <TouchableOpacity onPress={() => setPass(!pass)}>
        <MaterialIcons
          name={pass ? 'visibility' : 'visibility-off'}
          style={styles.passwordicon}
          size={wp('5%')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconInputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between', // 👈 icon, text, password icon ke beech proper space

    borderColor: '#CBCBCB',
    borderRadius: wp(1.8),
    marginHorizontal: wp(5.7),
    height: hp(6),
    paddingLeft: wp(2),
  },
  vectorstyle: {
    width: wp(4.5),
    height: hp(4.5),
    resizeMode: 'contain',
    marginRight: wp(1),
    alignSelf: 'center',
  },
  textstyle: {
    fontSize: wp(3.6),
    color: 'black',
    fontFamily: Font.medium,
    paddingTop: hp(2.0),
  },
  passwordicon: {
    color: '#B4B4B4',
  },
});
