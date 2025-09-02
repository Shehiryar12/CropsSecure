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
import { wp, hp } from '../Constant/Responsive';

const PasswordContainer = props => {
  const [pass, setPass] = useState(true);

  return (
    <View>
      <Text style={styles.titletext}>{props?.title}</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.password}
          placeholder={props?.placeholder}
          secureTextEntry={pass}
          placeholderTextColor={"#DBD8D8"}
          value={props?.value}
          onChangeText={props?.onChangeText}
        />
        <TouchableOpacity onPress={() => setPass(!pass)}>
          <MaterialIcons
            name={pass ? 'visibility' : 'visibility-off'}
            style={styles.passwordicon}
            size={wp('5%')}
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
    marginHorizontal: wp('5%'), 
    borderBottomColor: '#D9D9D9',
    height: hp('6%'),          
    borderWidth: 1,
    borderRadius: wp('2%'),    
    borderColor: '#D9D9D9',
    paddingHorizontal: wp('1.5%'), 
  },
  password: {
    flex: 1,
    fontFamily: Font.medium,
    fontSize: wp('3%'),          
  },
  passwordicon: {
    color: '#B4B4B4',
  },
  titletext: {
    paddingHorizontal: wp('5%'),
    marginTop: hp('2.5%'),      
    fontFamily: Font.medium,
    fontSize: wp('3.5%'),     
    color: '#646464',
  },
});
