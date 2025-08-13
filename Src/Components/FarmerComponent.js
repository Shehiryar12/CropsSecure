import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const FarmerComponent = props => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.boxone}>
        <Image
          source={require('../Assets/Images/imageone.png')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle} numberOfLines={2} ellipsizeMode='tail'>{props.Land}</Text>
      </View>

      <View style={styles.boxone}>
        <Image
          source={require('../Assets/Images/imagetwo.png')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle}>{props.Details}</Text>
      </View>

      <View style={styles.boxone}>
        <Image
          source={require('../Assets/Images/imagethree.jpg')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle}>{props.Insure}</Text>
      </View>

      <View style={styles.boxone}>
        <Image
          source={require('../Assets/Images/imagefour.png')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle}>{props.Compensation}</Text>
      </View>

      <View style={styles.boxone}>
        <Image
          source={require('../Assets/Images/imagefive.png')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle}>{props.Assessment}</Text>
      </View>

      <View style={styles.boxone}>
        <Image
          source={require('../Assets/Images/imageone.png')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle}>{props?.Registration}</Text>
      </View>
    </View>
  );
};

export default FarmerComponent;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
    paddingHorizontal: 19,
    marginTop: 25,
  },
  boxone: {
    width: '45%', 
    height: 143,
    backgroundColor: 'white',
    marginBottom: 15,
    elevation: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#009245A3',
    borderWidth: 1,
  },
  imageone: {
    width: 60,
    height: 60,
  },
  textstyle: {
    fontSize: 9,
    marginTop: 8,
    color: 'black',
    fontFamily: Font.bold,
    textAlign: 'center',
  },
});
