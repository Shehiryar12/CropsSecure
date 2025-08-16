import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import InsuranceComponent from '../Components/InsuranceComponent';

const Insurance = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>Crop To Insure</Text>
        <View style={{ width: 31 }}></View>
      </View>

      <View>
        <InsuranceComponent
          title="Company"
          borderRadius={12}
          borderColor="green"
          placeholder="Select insurance company"
          placeholderTextColor="#DBD8D8"
          fontSize={12}
        />
        <InsuranceComponent
          title="Insurance Type"
          borderRadius={12}
          borderColor="#DBD8D8"
          placeholder="Select insurance type"
          placeholderTextColor="#DBD8D8"
          fontSize={12}
        />

        <View style={{ marginTop: 15, marginLeft: 22 }}>
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
        <View style={styles.dottedcontainer}></View>

        <View style={styles.prices}>
          <Text style={{ fontFamily: Font.bold, fontSize: 11 }}>Premium</Text>
          <Text style={{ fontFamily: Font.bold, fontSize: 11, }}>Rs. <Text style={{color:"grey"}}>24000</Text></Text>
        </View>

         <View style={styles.prices}>
          <Text style={{ fontFamily: Font.bold, fontSize: 11 }}>Tax</Text>
          <Text style={{ fontFamily: Font.bold, fontSize: 11, }}>Rs.<Text style={{color:"grey"}}>6000</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:"red",
    marginTop: 14,
    marginLeft: 12,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
  label: {
    fontFamily: Font.bold,
    color: 'black',
    marginTop: 12,
    fontSize: 11,
  },

  value: {
    color: '#646464',
    fontFamily: Font.medium,
    fontSize: 10,
  },
  dottedcontainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: 22,
    marginTop: 13,
    borderBottomColor: '#646464',
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 13,
    // fontSize:10,
    alignItems: 'center',
  },
});
