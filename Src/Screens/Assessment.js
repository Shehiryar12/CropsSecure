import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AssessmentComponent from '../Components/AssessmentComponent';
import Assessmentwo from '../Components/Assessmentwo';
import Assessmenthree from '../Components/Assessmentthree';

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
  buttonstyle:{
    backgroundColor:"#009245",
     marginHorizontal: 20,
       borderRadius: 10,
        paddingVertical: 3,
        //  paddingHorizontal:8,
        marginTop:160,
    
  },
  buttontext:{
             textAlign:'center',
             paddingVertical:10,
             color:'white',
             fontFamily:Font.medium,
             
  }
});
