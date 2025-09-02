import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InsuranceClaimComponent = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.status}>{props?.title}</Text>
        <Text style={{ color: '#646464', fontFamily: Font.medium, fontSize: wp('2.5%') }}>
          {props?.incidentdate}
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: Font.bold,
            fontSize: wp('2.5%'),
            marginLeft: wp('0.5%'),
          }}
        >
          {props?.date}
        </Text>

        <View style={styles.picContainer}>
          <Text style={{ fontFamily: Font.bold, fontSize: wp('3%') }}>
            {props?.upload}
          </Text>
        </View>

        <View style={styles.picbox}>
          <Image source={require('../Assets/Images/cropImg4.png')} style={styles.imagestyle} />
          <Image source={require('../Assets/Images/cropImg1.png')} style={styles.imagestyle} />
          <Image source={require('../Assets/Images/cropImg2.png')} style={styles.imagestyle} />
          <Image source={require('../Assets/Images/cropImg3.png')} style={styles.imagestyle} />
          <Image source={require('../Assets/Images/cropImg1.png')} style={styles.imagestyle} />
          <View style={styles.box}>
            <Image source={require('../Assets/Images/addIcon.png')} style={{ width: wp('8%'), height: hp('4%') }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InsuranceClaimComponent;

const styles = StyleSheet.create({
  innercontainer: {
    marginLeft: wp('5.5%'),
  },
  status: {
    fontFamily: Font.bold,
    fontSize: wp('3%'),
    marginTop: hp('2.5%'),
  },
  picContainer: {
    marginTop: hp('2.5%'),
  },
  picbox: {
    backgroundColor: 'white',
    width: wp('86%'),
    height: hp('24.5%'),
    borderRadius: wp('2%'),
    marginTop: hp('1.2%'),
    borderColor: '#DBD8D8',
    borderWidth: 1,
    flexDirection: 'row',
    marginLeft: wp('1.5%'),
    flexWrap: 'wrap',
  },
  imagestyle: {
    width: wp('26%'),
    height: hp('11%'),
    borderRadius: wp('2%'),
    marginHorizontal: wp('1.2%'),
    marginTop: hp('0.7%'),
  },
  box: {
    width: wp('26%'),
    height: hp('11%'),
    marginTop: hp('0.7%'),
    borderWidth: 1,
    borderRadius: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DBD8D8',
    marginLeft:wp(0.7)
  },
});
