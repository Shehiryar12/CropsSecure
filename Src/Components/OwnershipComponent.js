import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OwnershipComponent = (props) => {
  return (
    <View style={styles.container}>
      {/* Box Section */}
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
                  Total Area: <Text style={styles.Acre}>10 Acres</Text>
                </Text>
                <Text style={styles.certificate}>View Certificate</Text>
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
  boxed: {
    marginTop: 20,
  },
  box: {
    width: 320,
    height: 110,
    backgroundColor: 'lightgrey',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 5,
  },
  landimage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginLeft: 15,
    marginTop: 10,
    marginRight: 10,
  },
  landtext: {
    marginBottom: 5,
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
