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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    marginLeft: wp('5%'),
    fontSize: wp('3.5%'),
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp('2%'),
    borderColor: '#DBD8D8',
    paddingHorizontal: wp('2%'),
    marginHorizontal: wp('5%'),
  },
  textinput: {
    flex: 1,
    fontFamily: Font.medium,
    fontSize: wp('3%'),
    paddingVertical: hp('1%'),
  },
});
