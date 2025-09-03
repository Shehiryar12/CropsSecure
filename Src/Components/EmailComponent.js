import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { wp, hp } from '../Constant/Responsive';

const EmailComponent = props => {
  return (
    <View style={styles.inputContainer}>
      <Image
        // source={require('../Assets/Images/Vector.png')}
        style={styles.vectorstyle}
        source={props?.icon}
      />
      <TextInput
        placeholder={props?.placeholder}
        placeholderTextColor={props?.placeholderTextColor}
        style={styles.placeholderstyle}
      />
    </View>
  );
};

export default EmailComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBCBCB',
    borderRadius: wp(1.8),
    marginHorizontal: wp(5.7),
    marginTop: 10,
  },
  vectorstyle: {
    marginLeft: wp(2.6),
    width: wp(3.8),
    height: hp(5.3),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  placeholderstyle: {
    fontFamily: Font.medium,
    fontSize: wp(3.6),
    color: 'black',
    flex: 1,
    marginLeft: wp(0.8),
  },
});
