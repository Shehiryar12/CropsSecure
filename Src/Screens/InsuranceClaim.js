import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import InsuranceClaimComponent from '../Components/InsuranceClaimComponent';
import { wp, hp } from '../Constant/Responsive';

const InsuranceClaim = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={wp('6%')} color="black" />
        <Text style={styles.heading}>Submit Insurance Claim</Text>
        <View style={{ width: wp('8%') }}></View>
      </View>
      <InsuranceClaimComponent
        title="FLOOD DAMAGE TO WHEAT CROP"
        incidentdate="Date of Incident"
        date="Dec 12, 2024"
        upload=" Upload Pictures "
      />
    </SafeAreaView>
  );
};

export default InsuranceClaim;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
    marginLeft: wp('3%'),
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: wp('4%'),
  },
});
