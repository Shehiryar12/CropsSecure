import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import AreaComponent from '../Components/AreaComponent';
import AreaInput from '../Components/AreaInput';
import { wp, hp } from '../Constant/Responsive';

const Area = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={wp(6)} color="black" />
        <Text style={styles.heading}>Crop To Insure</Text>
        <View style={styles.headerRightSpace}></View>
      </View>

      <AreaComponent
        title="Crop"
        borderRadius={wp(3)}
        borderColor="green"
        placeholder="Select insurance company"
        placeholderTextColor="#DBD8D8"
        fontSize={wp(3)}
      />

      <View style={styles.row}>
        <View style={styles.leftComponent}>
          <AreaComponent
            title="Area Unit"
            borderRadius={wp(3)}
            borderColor="#DBD8D8"
            placeholder="Select unit"
            placeholderTextColor="#DBD8D8"
            fontSize={wp(3)}
          />
        </View>

        <View style={styles.rightComponent}>
          <AreaInput
            title="Area"
            borderRadius={wp(3)}
            placeholder="Enter area"
            placeholderTextColor="#DBD8D8"
            fontSize={wp(3)}
            borderColor="#DBD8D8"
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonstyle}>
        <Text style={styles.buttontext}>Add</Text>
      </TouchableOpacity>

      <View style={styles.dottedcontainertwo}></View>

      <View style={styles.status}>
        <Text style={styles.statusTitle}>Crop</Text>
        <Text style={styles.statusTitle}>Unit</Text>
        <Text style={styles.statusTitle}>Area</Text>
      </View>

      <View style={styles.status}>
        <Text style={styles.statusValue}>Cotton</Text>
        <Text style={[styles.statusValue, styles.unitMarginRight5]}>Acre</Text>
        <Text style={styles.statusValue}>100</Text>
      </View>

      <View style={styles.status}>
        <Text style={styles.statusValue}>Rice</Text>
        <Text style={[styles.statusValue, styles.unitMarginRight2]}>Acre</Text>
        <Text style={styles.statusValue}>80</Text>
      </View>

      <View style={styles.status}>
        <Text style={styles.statusValue}>Wheat</Text>
        <Text style={[styles.statusValue, styles.unitMarginRight6]}>Acre</Text>
        <Text style={styles.statusValue}>20</Text>
      </View>

      <TouchableOpacity style={styles.nextbutton}>
        <Text style={styles.nextbuttontext}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Area;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
    marginLeft: wp(3),
  },
  headerRightSpace: {
    width: wp(10),
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: wp(4),
  },
  row: {
    flexDirection: 'row',
  },
  leftComponent: {
    flex: 1,
    marginRight: -wp(7),
  },
  rightComponent: {
    flex: 1,
  },
  buttonstyle: {
    backgroundColor: '#009245',
    width: wp(25),
    borderRadius: wp(2),
    alignSelf: 'flex-end',
    marginRight: wp(6),
    marginTop: hp(2),
  },
  buttontext: {
    textAlign: 'center',
    paddingVertical: hp(1.5),
    fontFamily: Font.medium,
    color: 'white',
  },
  dottedcontainertwo: {
    borderBottomColor: '#DBD8D8',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginHorizontal: wp(6),
    marginTop: hp(2),
  },
  status: {
    flexDirection: 'row',
    marginTop: hp(1.5),
    justifyContent: 'space-between',
    marginHorizontal: wp(6),
  },
  statusTitle: {
    fontFamily: Font.medium,
    color: '#009245',
  },
  statusValue: {
    fontFamily: Font.medium,
    color: '#646464',
    fontSize: wp(3),
  },
  unitMarginRight5: {
    marginRight: wp(5),
  },
  unitMarginRight2: {
    marginRight: wp(2),
  },
  unitMarginRight6: {
    marginRight: wp(6),
  },
  nextbutton: {
    backgroundColor: '#009245',
    paddingVertical: hp(1.5),
    marginHorizontal: wp(5),
    borderRadius: wp(2),
    marginTop: hp(20),
  },
  nextbuttontext: {
    textAlign: 'center',
    color: 'white',
    fontFamily: Font.medium,
  },
});
