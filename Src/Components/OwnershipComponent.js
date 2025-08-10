import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const OwnershipComponent = (props) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.boxed}>
        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../Screens/landimage.jpg')}
              style={styles.landimage}
            />
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <Text style={styles.landtext}>
                {props.title}
              </Text>
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
  container: {
    // marginTop:20,
  },
  boxed: {

    // marginTop: 20,
  },
  box: {
    width: 320,
    height: 100,
    backgroundColor: 'lightgrey',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 5,
    marginTop:20,
  },
  landimage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginLeft: 15,
    marginTop: 10,
    marginRight: 10,
  },
  landtext: {
    marginBottom: 5,
    marginTop:10,
    // backgroundColor:'red',
    fontFamily:Font.bold,
    fontSize:12
  },
  landtexttwo: {
    fontSize: 10,
    color: '#646464',
  },
  dotline: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    borderStyle: 'dotted',
    marginTop: 5,
    width: 210,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  totalarea: {
    fontSize: 8,
    color: 'green',
  },
  Acre: {
    color: 'black',
  },
  certificate: {
    fontSize: 8,
    marginRight: 17,
  },
});
