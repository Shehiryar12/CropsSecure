import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import InsuranceClaimComponent from '../Components/InsuranceClaimComponent';

const InsuranceClaim = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>Submit Insurance Claim</Text>
        <View style={{ width: 32 }}></View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 14,
    marginLeft: 12,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
});
