import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Font } from '../Constant/Font';
import LandComponent from '../Components/LandComponent';
import LandComponenttwo from '../Components/LandComponenttwo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const LandData = () => {
  return (
    <SafeAreaView>
      <LandComponenttwo title="Land Record" placeholder="Enter district name"/>

    


    </SafeAreaView>
  );
};

export default LandData;

const styles = StyleSheet.create({

});

