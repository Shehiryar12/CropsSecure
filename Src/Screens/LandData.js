import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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

      <LandComponenttwo
        label="Tehsil Name"
        placeholder="Enter tehsil name"
        placeholderTextColor="#DBD8D8"
      />
      <LandComponenttwo
        label="UC"
        placeholder="Enter UC name"
        placeholderTextColor="#DBD8D8"
      />
      <LandComponenttwo
        label="Village Name"
        placeholder="Enter village name"
        placeholderTextColor="#DBD8D8"
      />
      <LandComponenttwo
        label="Other (for more information)"
        placeholder="Enter other info"
        placeholderTextColor="#DBD8D8"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LandData;

const styles = StyleSheet.create({
  container: {
    margin: 16,
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
  button:{
     backgroundColor: '#00A651',
    paddingVertical: 14,
    borderRadius: 8,
    marginHorizontal: 8,
    marginTop: 57,
    alignItems: 'center',
  },
  buttonText:{
       fontFamily:Font.medium,
       fontSize:13,
       color:"white",
  }
});
