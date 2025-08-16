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
});
