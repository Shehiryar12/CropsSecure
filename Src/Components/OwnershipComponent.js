import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { wp, hp } from '../Constant/Responsive';

const OwnershipComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxed}>
        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../Assets/Images/imagefive.png')}
              style={styles.landimage}
            />
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <Text style={styles.landtext}>{props.title}</Text>
              <Text style={styles.landtexttwo}>{props.define}</Text>

              <View style={styles.dotline}></View>

              <View style={styles.totalContainer}>
                <Text style={styles.totalarea}>
                  Total Area: <Text style={styles.Acre}>{props.Acres}</Text>
                </Text>
                <Text style={styles.certificate}>{props.certificate}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OwnershipComponent;

const styles = StyleSheet.create({
  container: {},
  boxed: {},
  box: {
    width: wp(85),
    height: hp(13),
    backgroundColor: 'lightgrey',
    marginHorizontal: wp(8),
    borderRadius: wp(2),
    paddingVertical: hp(0.6),
    marginTop: hp(2.5),
  },
  landimage: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(2),
    marginLeft: wp(4),
    marginTop: hp(1.3),
    marginRight: wp(2.5),
  },
  landtext: {
    marginBottom: hp(0.6),
    marginTop: hp(1.2),
    fontFamily: Font.bold,
    fontSize: wp(3),
  },
  landtexttwo: {
    fontSize: wp(2.6),
    color: '#646464',
  },
  dotline: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    borderStyle: 'dotted',
    marginTop: hp(0.6),
    width: wp(55),
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(0.6),
  },
  totalarea: {
    fontSize: wp(2.2),
    color: 'green',
  },
  Acre: {
    color: 'black',
  },
  certificate: {
    fontSize: wp(2.2),
    marginRight: wp(4.5),
  },
});
