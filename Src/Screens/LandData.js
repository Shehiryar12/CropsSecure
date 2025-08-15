import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import LandComponenttwo from '../Components/LandComponenttwo';

const LandData = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={23}
          color="black"
          paddingHorizontal={-7}
        />
        <Text style={styles.status}>Land Record</Text>
        <View style={{ width: 45 }}></View>
      </View>

      <LandComponenttwo
        label="District Name"
        placeholder="Enter district name"
        placeholderTextColor="#DBD8D8"
        borderColor="green"
      />

      <LandComponenttwo label="Tehsil Name" placeholder="Enter tehsil name"  placeholderTextColor="#DBD8D8"/>
      <LandComponenttwo label="UC" placeholder="Enter UC name"  placeholderTextColor="#DBD8D8"/>
      <LandComponenttwo label="Village Name" placeholder="Enter village name"  placeholderTextColor="#DBD8D8"/>
      <LandComponenttwo
        label="Other (for more information)"
        placeholder="Enter other info"
         placeholderTextColor="#DBD8D8"
      />
    </SafeAreaView>
  );
};

export default LandData;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: 'white',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  status: {
    fontFamily: Font.bold,
    fontSize: 16,
    marginLeft: 14,
  },
});
