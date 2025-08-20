import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AssessmentComponent from '../Components/AssessmentComponent';
import Assessmentwo from '../Components/Assessmentwo';
import Assessmenthree from '../Components/Assessmentthree';
import { wp, hp } from '../Constant/Responsive';

const Assessment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={wp(6)} color="black" />
        <Text style={styles.heading}>Loss Assessment</Text>
        <View style={styles.space}></View>
      </View>

      <AssessmentComponent
        label="Crop Type"
        placeholder="Select Crop Type"
        placeholderTextColor="#DBD8D8"
      />

      <Assessmentwo
        title="Loss Date"
        placeholder="Select Loss Date"
        placeholderTextColor="#DBD8D8"
        keyboardType="numeric"
      />

      <Assessmenthree
        title="Area Affected (in acres)"
        placeholder="Enter effected area"
        placeholderTextColor="#DBD8D8"
        keyboardType="numeric"
      />

      <AssessmentComponent
        label="Loss Type"
        placeholder="Select loss type"
        placeholderTextColor="#DBD8D8"
      />

      <TouchableOpacity style={styles.buttonstyle}>
        <Text style={styles.buttontext}>Calculate Loss</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Assessment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.7),
    marginLeft: wp(3),
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: wp(4),
  },
  space: {
    width: wp(9),
  },
  buttonstyle: {
    backgroundColor: '#009245',
    marginHorizontal: wp(5),
    borderRadius: wp(2.5),
    paddingVertical: hp(0.4),
    marginTop: hp(20),
  },
  buttontext: {
    textAlign: 'center',
    paddingVertical: hp(1.2),
    color: 'white',
    fontFamily: Font.medium,
  },
});
