import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import LossCompensationComponent from '../Components/LossCompensationComponent';
import LossCompensationComponenttwo from '../Components/LossComponsationComponenttwo';

const LossCompensation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>Loss Compensation</Text>
        <View style={{ width: 34 }}></View>
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
