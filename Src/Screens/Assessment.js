import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AssessmentComponent from '../Components/AssessmentComponent';
import Assessmentwo from '../Components/Assessmentwo';

const Assessment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>Loss Assessment</Text>
        <View style={{ width: 34 }}></View>
      </View>

      <AssessmentComponent
        label="Crop Type"
        placeholder="Select Crop Type"
        placeholderTextColor="#DBD8D8"
      />
      {/* <AssessmentComponent
        label="Loss Date"
        placeholder="Select Loss Date"
        placeholderTextColor="#DBD8D8"
      /> */}

      <Assessmentwo title="Loss Date" />

      {/* <AssessmentComponent
        label="Area Affected (in acres)"
        placeholder="Enter effected area"
        placeholderTextColor="#DBD8D8"
      />

      <AssessmentComponent
        label="Loss Type"
        placeholder="Select loss type"
        placeholderTextColor="#DBD8D8"
      /> */}
    </SafeAreaView>
  );
};

export default Assessment;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 14,
    marginLeft: 12,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
});
