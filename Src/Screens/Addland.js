import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import AddlandComponent from '../Components/AddlandComponent';
import Acre from '../Components/Acre';
import AreaUnit from '../Components/AreaUnit';
import Select from '../Components/Select';
import { wp, hp } from '../Constant/Responsive';
import Header from '../Components/Header';

const Addland = () => {
  return (
    <SafeAreaView style={styles.container}>
  
      <Header />

      
      <View style={styles.box}>
        <Image
          source={require('../Assets/Images/upload-file-icon.png')}
          style={styles.uploadIcon}
          resizeMode="contain"
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

      <View style={styles.areaRow}>
        <Acre label="Area" placeholder="Enter your land area" />
        <AreaUnit label="Area Unit" placeholder="Acre" keyboardType="numeric" />
      </View>

      <View style={styles.status}>
        <Text style={styles.statusText}>
          Upload Land Ownership Certification
        </Text>
      </View>

      <Select title="Select" />

      <TouchableOpacity style={styles.buttoncontainer}>
        <Text style={styles.btntext}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Addland;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    width: wp(90),
    backgroundColor: '#DBD8D8',
    marginLeft: wp(5),
    marginTop: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(25),
    borderRadius: wp(2),
  },
  uploadIcon: {
    width: wp(15),
    height: hp(7),
  },
  textstyle: {
    fontFamily: Font.medium,
    color: '#464444',
    marginTop: hp(2.5),
    fontSize: wp(3),
    textAlign: 'center',
  },

  areaRow: {
    flexDirection: 'row',
  },

  status: {
    marginLeft: wp(5),
    marginTop: hp(1.5),
  },
  statusText: {
    fontFamily: Font.medium,
    fontSize: wp(3.5),
    color: '#646464',
  },

  buttoncontainer: {
    backgroundColor: '#009245',
    marginHorizontal: wp(5),
    borderRadius: wp(2),
    marginTop: hp(15),
    paddingVertical: hp(1.5),
  },
  btntext: {
    color: 'white',
    textAlign: 'center',
    fontFamily: Font.medium,
    fontSize: wp(3.2),
  },
});
