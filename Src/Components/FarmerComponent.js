import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { useNavigation } from '@react-navigation/native';

const FarmerComponent = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.rowContainer}>
      {/* First */}
      <TouchableOpacity style={styles.boxone} onPress={props.Land}>
        <Image
          source={require('../Assets/Images/imageone.png')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle} numberOfLines={2} ellipsizeMode="tail">
          {props.LandTitle}
        </Text>
      </TouchableOpacity>

      {/* Second */}
      <TouchableOpacity style={styles.boxone} onPress={props?.DetailOnPress}>
        <Image
          source={require('../Assets/Images/imagetwo.png')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle}>{props.Details}</Text>
      </TouchableOpacity>

      {/* Third (Navigate to Addland - Crops) */}
      <TouchableOpacity
        style={styles.boxone}
        onPress={() => navigation.navigate('Area')}
      >
        <Image
          source={require('../Assets/Images/imagethree.jpg')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle}>Crop to Insure</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.boxone}  onPress={() => navigation.navigate('LossCompensation')}>
        <Image
          source={require('../Assets/Images/imagefour.png')}
          style={styles.imageone}
          
        />
        <Text style={styles.textstyle}>{props.Compensation}</Text>
      </TouchableOpacity>

    
      <TouchableOpacity style={styles.boxone}   onPress={() => navigation.navigate('Assessment')}>
        <Image
          source={require('../Assets/Images/imagefive.png')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle}>{props.Assessment}</Text>
      </TouchableOpacity>

   
      <TouchableOpacity style={styles.boxone}  onPress={() => navigation.navigate('Ownership')}>
        <Image
          source={require('../Assets/Images/imageone.png')}
          style={styles.imageone}
        />
        <Text style={styles.textstyle}>{props?.Registration}</Text>
      </TouchableOpacity>
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
