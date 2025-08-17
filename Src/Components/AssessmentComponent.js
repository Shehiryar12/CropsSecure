import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AssessmentComponent = props => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>{props?.label}</Text>

        <View
          style={[
            styles.landstyle,
            { borderColor: props?.borderColor || '#DBD8D8' },
          ]}
        >
          <TextInput
            placeholder={props?.placeholder}
            placeholderTextColor={props?.placeholderTextColor}
            style={{
              flex: 1,
              color: props?.textColor,
              fontSize: 13,
              fontFamily:Font.medium,
            }}
          />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#DBD8D8" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AssessmentComponent;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Font.medium,
    marginBottom: 5,
    color: '#646464',
    marginHorizontal: 8,
    marginTop: 25,
    marginLeft: 21,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 8,
  },

  landstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
     paddingVertical: 3,
    marginHorizontal: 20,
    paddingHorizontal:8,
    fontFamily:Font.medium,
  },
});
