import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { wp, hp } from '../Constant/Responsive';

const AreaComponent = props => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.textinputname}>{props?.title}</Text>
        <View
          style={[
            styles.box,
            {
              borderColor: props?.borderColor,
              borderRadius: props?.borderRadius,
            },
          ]}
        >
          <TextInput
            style={[
              styles.input,
              { width: props?.inputWidth, fontSize: props?.fontSize },
            ]}
            placeholder={props?.placeholder}
            placeholderTextColor={props?.placeholderTextColor}
          />
          <MaterialIcons
            name="keyboard-arrow-down"
            size={wp(6)}
            color="#DBD8D8"
            style={styles.icon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AreaComponent;

const styles = StyleSheet.create({
  textinputname: {
    marginTop: hp(2.5),
    fontFamily: Font.medium,
    color: '#646464',
    fontSize: wp(3.5),
    marginLeft: wp(5.5),
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp(3),
    paddingVertical: hp(0.4),
    marginHorizontal: wp(5),
  },
  input: {
    flex: 1,
    fontFamily: Font.medium,
  },
  icon: {
    marginLeft: wp(2),
  },
});
