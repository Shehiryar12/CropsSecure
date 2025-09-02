import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import InsuranceComponent from '../Components/InsuranceComponent';
import { BottomSheet } from '@rneui/themed';
import { wp, hp } from '../Constant/Responsive';

const Insurance = () => {
  const [sheetVisible, setSheetVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={wp(6)} color="black" />
        <Text style={styles.heading}>Crop To Insure</Text>
        <View style={styles.space}></View>
      </View>

      <View>
        <InsuranceComponent
          title="Company"
          borderRadius={wp(3)}
          borderColor="green"
          placeholder="Select insurance company"
          placeholderTextColor="#DBD8D8"
          fontSize={wp(3)}
        />
        <InsuranceComponent
          title="Insurance Type"
          borderRadius={wp(3)}
          borderColor="#DBD8D8"
          placeholder="Select insurance type"
          placeholderTextColor="#DBD8D8"
          fontSize={wp(3)}
        />

        <View style={{ marginTop: hp(2), marginLeft: wp(5) }}>
          <Text style={styles.label}>INSURANCE COMPANY</Text>
          <Text style={styles.value}>EFU Life Assurance Ltd</Text>

          <Text style={styles.label}>INSURANCE TYPE</Text>
          <Text style={styles.value}>Satallite Insurance</Text>

          <Text style={styles.label}>INSURED</Text>
          <Text style={styles.value}>Arshad Ali</Text>

          <Text style={styles.label}>COVERAGE</Text>
          <Text style={styles.value}>
            <Text style={{ fontFamily: Font.bold, color: 'black' }}>RS.</Text>{' '}
            2000000
          </Text>
        </View>

        <View style={styles.dottedcontainer} />
        <View style={styles.prices}>
          <Text style={{ fontFamily: Font.bold, fontSize: wp(2.8) }}>
            Premium
          </Text>
          <Text style={{ fontFamily: Font.bold, fontSize: wp(2.8) }}>
            Rs. <Text style={{ color: 'grey' }}>24000</Text>
          </Text>
        </View>

        <View style={styles.pricestwo}>
          <Text style={{ fontFamily: Font.bold, fontSize: wp(2.8) }}>Tax</Text>
          <Text style={{ fontFamily: Font.bold, fontSize: wp(2.8) }}>
            Rs.<Text style={{ color: 'grey' }}>6000</Text>
          </Text>
        </View>

        <View style={styles.dottedcontainertwo} />
        <View style={styles.totalprice}>
          <Text style={{ fontFamily: Font.bold, fontSize: wp(2.8) }}>Total</Text>
          <Text style={{ fontFamily: Font.bold, fontSize: wp(2.8) }}>
            Rs.30000
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => setSheetVisible(true)}
        >
          <Text style={styles.buttontext}>Pay</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        isVisible={sheetVisible}
        onBackdropPress={() => setSheetVisible(false)}
      >
        <View style={styles.bottomSheet}>
          <Text style={styles.sheetTitle}>Choose Payment Option</Text>

          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require('../Assets/Images/Jazzcashnewlogo.png')}
              style={styles.optionimageone}
              resizeMode="contain"
            />

            <Text style={styles.optionText}>Jazz Cash</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require('../Assets/Images/easypaisa.png')}
              style={styles.optionimagetwo}
              resizeMode="contain"
            />

            <Text style={styles.optionText}>Easy Paisa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require('../Assets/Images/creditCard.png')}
              style={styles.optionimagethree}
              resizeMode="contain"
            />
            <Text style={styles.optionText}>Debit/Credit Card</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  space: {
    width: wp(8),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
    marginLeft: wp(3),
  },
  heading: { fontFamily: Font.bold, fontSize: wp(4) },
  label: {
    fontFamily: Font.bold,
    color: 'black',
    marginTop: hp(1.5),
    fontSize: wp(2.8),
  },
  value: { color: '#646464', fontFamily: Font.medium, fontSize: wp(2.5) },
  dottedcontainer: {
    borderBottomColor: '#646464',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: wp(5),
    marginTop: hp(2),
  },
  pricestwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(5),
    marginTop: hp(0.8),
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginTop: hp(1.8),
    alignItems: 'center',
  },
  dottedcontainertwo: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: wp(5),
    marginTop: hp(1.8),
  },
  totalprice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(5),
    marginTop: hp(1),
  },
  buttonstyle: {
    backgroundColor: '#009245',
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
    marginHorizontal: wp(5),
    marginTop: hp(10),
  },
  buttontext: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Font.medium,
    fontSize: wp(3),
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: wp(5),
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
  },
  sheetTitle: {
    fontFamily: Font.bold,
    fontSize: wp(3.5),
    marginBottom: hp(2),
    textAlign: 'center',
    color: '#646464',
  },
  optionButton: {
    flexDirection: 'row',
    padding: wp(3),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: wp(3),
    marginTop: hp(1.2),
    alignItems: 'center',
  },
  optionText: {
    fontFamily: Font.medium,
    fontSize: wp(3.2),
    color: 'black',
  },

  optionimagethree: {
    width: wp(7),
    height: hp(3),
    marginRight: wp(1.5),
    marginLeft: wp(2),
  },

  optionimagetwo: {
    width: wp(10),
    height: hp(3),
    marginRight: wp(1),
  },
  optionimageone: {
    width: wp(10),
    height: hp(3),
    marginRight: wp(1),
  },
});
