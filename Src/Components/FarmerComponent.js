import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FarmerComponent = props => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.boxone}>
        <Image
          source={require('../Screens/imageone.png')}
          style={styles.imageone}
        />
        {/* <Image source={require("../Screens/imageone.png")} style={styles.imageone}/> */}
        <Text style={{ fontSize: 10, marginTop: 8 }}>LAND RECORD</Text>
      </View>

      <View style={styles.boxone}>
        <Image
          source={require('../Screens/imagetwo.png')}
          style={styles.imageone}
        />
        <Text style={{ fontSize: 9, marginTop: 8 }}>
          LAND OWNERSHIP DETAILS
        </Text>
      </View>

      <View style={styles.boxone}>
        <Image
          source={require('../Screens/imagethree.jpg')}
          style={styles.imageone}
        />
        <Text style={{ fontSize: 9, marginTop: 8 }}>
         CROP TO INSURE
        </Text>
      </View>

       <View style={styles.boxone}>
        <Image
          source={require('../Screens/imagefour.png')}
          style={styles.imageone}
        />
        <Text style={{ fontSize: 9, marginTop: 8 }}>
         CROP TO INSURE
        </Text>
      </View>

        <View style={styles.boxone}>
        <Image
          source={require('../Screens/imagefive.png')}
          style={styles.imageone}
        />
        <Text style={{ fontSize: 9, marginTop: 8 }}>
         CROP TO INSURE
        </Text>
      </View>

       <View style={styles.boxone}>
        <Image
          source={require('../Screens/imagesix.jpg')}
          style={styles.imageone}
        />
        <Text style={{ fontSize: 9, marginTop: 8 }}>
         CROP TO INSURE
        </Text>
      </View>
    </View>
  );
};

export default FarmerComponent;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row', // images ko side by side karega
    // marginLeft: 17,
    // marginTop: 20
    paddingHorizontal: 11,
    flexWrap: 'wrap', 
  },

  boxone: {
    width: 140,
    height: 143,
    backgroundColor: 'white',
    marginLeft: 20,
    marginTop: 20,
    elevation: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#009245A3',
    borderWidth: 1,
    //   paddingHorizontal:10,
    //   marginHorizontal:30,
  },
  imageone: {
    width: 60,
    height: 60,
  },
});
