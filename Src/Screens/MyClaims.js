import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ClaimComponent from '../Components/ClaimComponent';
import ClaimComponenttwo from '../Components/ClaimComponenttwo';
import ClaimComponentthree from '../Components/ClaimComponentthree';
import { wp, hp } from '../Constant/Responsive'; // optional for responsive

const MyClaims = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={wp(6)} color="black" />
        <Text style={styles.heading}>My Claims</Text>
        <View style={styles.space}></View>
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
 
  container:{
    flex:1,
    backgroundColor:'white',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2), 
    marginLeft: wp(3),
    alignItems: 'center',
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: wp(4),
  },
  space: {
    width: wp(9),
  },
});
