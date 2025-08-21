import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import LandComponenttwo from '../Components/LandComponenttwo';
import { hp, wp } from '../Constant/Responsive';
import { districtNames } from '../Constant/DummyData';
import DropdownComp from '../Components/DropdownComp';

const LandData = () => {
  const [district, setDistrict] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.status}>Land Record</Text>
        <View style={styles.space}></View>
      </View>

      <DropdownComp
        titleLabel={'District Name'}
        data={districtNames} // array of options
        labelField="label"
        valueField="value"
        placeholder={'Enter district name'}
        value={district} // 👈 selected value
        onChange={item => setDistrict(item.value)} // 👈 selected value update
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
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
    flex: 1,
    paddingHorizontal: wp(5),
  },
  space: {
    width: wp(7),
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 15,
  },
  status: {
    fontFamily: Font.bold,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00A651',
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
    marginHorizontal: wp(2),
    marginTop: hp(7),
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.medium,
    fontSize: 13,
    color: 'white',
  },
});
