import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddlandComponent from '../Components/AddlandComponent';
import AreaComponent from '../Components/AreaComponent';
import AreaInput from '../Components/AreaInput';
import Acre from '../Components/Acre';
import AccountScreen from './AccountScreen';
import AreaUnit from '../Components/AreaUnit';

const Addland = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>Add Land</Text>
        <View style={{ width: 40 }}></View>
      </View>

      <View style={styles.box}>
        <Image
          source={require('../Assets/Images/upload-file-icon.png')}
          style={{ width: 60, height: 60 }}
        />
        <Text style={styles.textstyle}>
          Upload Land Ownership Certification
        </Text>
      </View>
      <View>
        <AddlandComponent
          label="Location"
          placeholder="Enter your land location"
        />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Acre label="Area" placeholder="Enter your land area" />
        <AreaUnit label="Area Unit" placeholder="Acre"  keyboardType="numeric" />
      </View>

      <View style={styles.status}>
        <Text
          style={{
            fontFamily: Font.medium,
            fontSize: 14,
            color: '#646464',
            marginTop: 10,
          }}
        >
          Upload Land Ownership Certification
        </Text>   
      </View>

      <View>

      </View>
    </SafeAreaView>
  );
};
export default Addland;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 14,
    marginLeft: 11,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
  box: {
    width: 325,
    backgroundColor: 'lightgrey',
    marginHorizontal: 19,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    height: 155,
    borderRadius: 8,
  },
  textstyle: {
    fontFamily: Font.medium,
    color: '#464444',
    marginTop: 22,
    fontSize: 12,
  },
  status: {
    marginLeft: 18,
  },
});
