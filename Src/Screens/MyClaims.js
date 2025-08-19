import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ClaimComponent from '../Components/ClaimComponent';
import ClaimComponenttwo from '../Components/ClaimComponenttwo';
import ClaimComponentthree from '../Components/ClaimComponentthree';

const MyClaims = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>My Claims</Text>
        <View style={{ width: 37 }}></View>
      </View>

      <ClaimComponent
        title="Tobacco"
        processing="Processing"
        description="Your Claim is processing, you should in touch with us. "
        contact="Contact Us"
        date="25 Dec, 2024"
      />

      <ClaimComponenttwo
        title="Wheat"
        settled="Settled"
        description="Your Claim has been settled, you can"
        contact="Contact Us"
        payment="View Payment"
        date="10 Nov, 2024"
      />

      <ClaimComponentthree
        title="Wheat"
        processing="Cancelled"
        description="Your Claim is processing, you should in touch with us."
        contact="Contact Us"
        date="10 Nov, 2024"
      />
    </SafeAreaView>
  );
};

export default MyClaims;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    marginLeft: 12,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
});
