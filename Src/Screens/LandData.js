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
  const [tehsil, setTehsil] = useState('');
  const [UC, setUC] = useState('');
  const [VillageName, setVillageName] = useState('');
  const [otherformoreinformation, setOtherformoreinformation] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.status}>Land Record</Text>
        <View style={styles.space}></View>
      </View>

      <DropdownComp
        titleLabel={'District Name'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter district name'}
        value={district}
        onChange={item => setDistrict(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
      />

      <DropdownComp
        titleLabel={'Tehsil Name'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter tehsil name'}
        value={tehsil}
        onChange={item => setTehsil(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
      />

  
      <DropdownComp
        titleLabel={'UC'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter UC name'}
        value={UC}
        onChange={item => setUC(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
      />


      <DropdownComp
        titleLabel={'Village Name'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter Village Name'}
        value={VillageName}
        onChange={item => setVillageName(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
      />


      <DropdownComp
        titleLabel={'Other (for more information)'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter other info'}
        value={otherformoreinformation}
        onChange={item => setOtherformoreinformation(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
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
