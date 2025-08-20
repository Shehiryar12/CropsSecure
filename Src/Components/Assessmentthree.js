import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { wp, hp } from '../Constant/Responsive';

const Assessmenthree = props => {
  return (
    <View>
      <Text style={styles.heading}>{props?.title}</Text>
      <View
        style={[
          styles.landstyle,
          { borderColor: props?.borderColor || '#DBD8D8' },
        ]}
      >
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
          keyboardType={props?.keyboardType}
          style={{
            flex: 1,
            color: props?.textColor,
            fontSize: wp(3.2),
            fontFamily: Font.medium,
          }}
        />
      </View>
    </View>
  );
};

export default Assessmenthree;

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
    borderRadius: wp(2.5),
    paddingVertical: hp(0.8),
    marginHorizontal: wp(5),
    paddingHorizontal: wp(2),
  },
});
