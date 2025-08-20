import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import LossCompensationComponent from '../Components/LossCompensationComponent';
import LossCompensationComponenttwo from '../Components/LossComponsationComponenttwo';
import { wp, hp } from '../Constant/Responsive'; 

const LossCompensation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={wp(6)} color="black" />
        <Text style={styles.heading}>Loss Compensation</Text>
        <View style={{ width: wp(8) }}></View>
      </View>

      <LossCompensationComponent
        title="Tobacco"
        date="25 Dec, 2024"
        description="Tobacco mosaic virus and Satellite Tobacco Mosaic Virus "
        effectedarea="Effected Area:"
      />

      <LossCompensationComponenttwo
        title="Wheat"
        date="25 Dec, 2024"
        description="Powdery mildew occurs"
        effectedarea="Effected Area:"
      />
    </SafeAreaView>
  );
};

export default LossCompensation;

const styles = StyleSheet.create({

  container:{
            flex:1,
            backgroundColor:'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.8),   // 14 ki jagah hp
    marginLeft: wp(3),    // 12 ki jagah wp
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: wp(4),      // 15 ki jagah responsive wp
  },
});
