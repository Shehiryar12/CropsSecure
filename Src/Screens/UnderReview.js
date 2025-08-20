import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { hp, wp } from '../Constant/Responsive';
import { Font } from '../Constant/Font';

const UnderReview = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={wp(6)} color="black" />
        <Text style={styles.heading}>Loss Compensation</Text>
        <View style={{ width: wp(8) }}></View>
      </View>
      <Image
        source={require('../Assets/Images/reviewClaim.png')}
        style={styles.Imagestyle}
      />
      <Text style={styles.claimcolor}>Claim Under Review</Text>
      <Text style={styles.Estimated}>Estimated Review Time {'\n'}5 Days</Text>
    </SafeAreaView>
  );
};

export default UnderReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.8), // 14 ki jagah hp
    marginLeft: wp(3), // 12 ki jagah wp
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: wp(4), // 15 ki jagah responsive wp
  },
  Imagestyle: {
    width: 245,
    height: 245,
    alignSelf: 'center',
    marginTop: hp(5),
  },
  claimcolor: {
    color: '#009245',
    fontSize: 37,
    fontFamily: Font.bold,
    textAlign: 'center',
    marginTop: 50,
  },
  Estimated: {
    fontFamily: Font.medium,
    color: '#646464',
    textAlign: 'center',
    fontSize:20,
  },
});
