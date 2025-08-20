import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import { wp, hp } from '../Constant/Responsive';

const LandComponenttwo = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{props?.label}</Text>
      <View
        style={[
          styles.landstyle,
          {
            borderColor: props?.borderColor || '#DBD8D8',
            borderRadius: props?.borderRadius || wp(2),
          },
        ]}
      >
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
          style={[styles.inputstyle, { color: props?.TextColor }]}
        />
        <MaterialIcons name="keyboard-arrow-down" size={wp(6)} color="#DBD8D8" />
      </View>
    </View>
  );
};

export default LandComponenttwo;

const styles = StyleSheet.create({
  header: {
    marginTop: hp(2.5),
  },
  heading: {
    fontFamily: Font.medium,
    marginBottom: hp(0.6),
    color: '#646464',
    marginHorizontal: wp(0.3),
    fontSize: wp(3.5),
  },
  landstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(2),
  },
  inputstyle: {
    flex: 1,
    fontSize: wp(3.2),
    fontFamily: Font.medium,
  },
});
