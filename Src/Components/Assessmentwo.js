import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { wp, hp } from '../Constant/Responsive';

const Assessmentwo = props => {
  return (
    <View>
      <Text style={styles.heading}>{props?.title}</Text>
      <View
        style={[
          styles.landstyle,
          props?.borderColor ? { borderColor: props.borderColor } : null,
        ]}
      >
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
          keyboardType={props?.keyboardType}
          style={styles.textInput}
        />
        <AntDesign name="calendar" size={wp(5)} color="#DBD8D8" />
      </View>
    </View>
  );
};

export default Assessmentwo;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Font.medium,
    marginBottom: hp(0.7),
    color: '#646464',
    marginHorizontal: wp(2),
    marginTop: hp(3.2),
    marginLeft: wp(5.5),
  },
  landstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBD8D8',
    borderRadius: wp(2.5),
    paddingVertical: hp(0.8),
    marginHorizontal: wp(5),
    paddingHorizontal: wp(2),
  },
  textInput: {
    flex: 1,
    color: '#000', 
    fontSize: wp(3.2),
    fontFamily: Font.medium,
  },
});
